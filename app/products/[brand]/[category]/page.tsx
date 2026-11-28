import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { deviceCategories, type Device } from '@/lib/devices'
import { productBrands } from '@/lib/products'

type Params = Promise<{ brand: string; category: string }>

export function generateStaticParams() {
  return deviceCategories.map((c) => ({ brand: c.brand, category: c.slug }))
}

export async function generateMetadata({ params }: { params: Params }) {
  const { brand, category } = await params
  const page = deviceCategories.find((c) => c.brand === brand && c.slug === category)
  return { title: page ? `${page.title} | ${brand.toUpperCase()}` : 'Products' }
}

function DeviceCard({ device }: { device: Device }) {
  return (
    <li className="flex flex-col overflow-hidden rounded-lg border bg-card">
      {device.image && (
        <div className="relative aspect-[4/3] w-full bg-white">
          <Image
            src={device.image}
            alt={`${device.name} fingerprint device`}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
            className="object-contain p-4"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col border-t p-5">
        <p className="text-sm text-accent">{device.type}</p>
        <h2 className="mt-1 font-serif text-2xl">{device.name}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
          {device.summary}
        </p>
        <ul className="mt-4 flex flex-col gap-1.5 text-sm">
          {device.specs.map((spec) => (
            <li key={spec} className="flex gap-2">
              <span aria-hidden="true" className="text-accent">–</span>
              {spec}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6">
          {device.brochure && (
            <a
              href={device.brochure}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent"
            >
              Download brochure (PDF)
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          )}
        </div>
      </div>
    </li>
  )
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { brand: brandId, category } = await params
  const page = deviceCategories.find((c) => c.brand === brandId && c.slug === category)
  const brand = productBrands.find((b) => b.id === brandId)
  if (!page || !brand) notFound()

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Link
          href={`/products/${brand.id}`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          {brand.name}
        </Link>

        <h1 className="mt-8 font-serif text-6xl text-balance md:text-7xl">{page.title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          {page.description}
        </p>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {page.devices.map((device) => (
            <DeviceCard key={device.name} device={device} />
          ))}
        </ul>

        <p className="mt-8 text-xs text-muted-foreground">
          Specifications come from the manufacturer&apos;s brochures and may change. Please check
          with me before ordering.
        </p>

        <div className="mt-16 flex flex-col gap-4 rounded-lg border bg-card p-8 md:flex-row md:items-center md:justify-between">
          <p className="font-serif text-3xl">Need these installed?</p>
          <Link
            href="/#contact"
            className="inline-flex items-center self-start rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-accent md:self-auto"
          >
            Get in touch
          </Link>
        </div>
      </main>
    </>
  )
}
