import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { productBrands, type Device, type Product } from '@/lib/products'

export function generateStaticParams() {
  return productBrands.map((brand) => ({ brand: brand.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ brand: string }> }) {
  const { brand: id } = await params
  const brand = productBrands.find((b) => b.id === id)
  return { title: brand ? `${brand.name} products` : 'Products' }
}

function DeviceCard({ device }: { device: Device }) {
  return (
    <li className="flex flex-col overflow-hidden rounded-lg border bg-background">
      {device.image && (
        <div className="relative aspect-[4/3] w-full bg-white">
          <Image
            src={device.image}
            alt={`${device.name} fingerprint device`}
            fill
            sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw"
            className="object-contain p-4"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col border-t p-5">
        <p className="text-sm text-accent">{device.type}</p>
        <h4 className="mt-1 font-serif text-2xl">{device.name}</h4>
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

function ProductCard({ product }: { product: Product }) {
  const hasDevices = product.devices && product.devices.length > 0

  return (
    <article
      className={`flex flex-col overflow-hidden rounded-lg border bg-card ${
        hasDevices ? 'sm:col-span-2 lg:col-span-3' : ''
      }`}
    >
      {product.image && (
        <div className="relative aspect-[4/3] w-full bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h2 className="font-serif text-2xl">{product.name}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground text-pretty">
          {product.description}
        </p>
        {product.details && product.details.length > 0 && (
          <ul className="mt-4 flex flex-col gap-1.5 text-sm">
            {product.details.map((detail) => (
              <li key={detail} className="flex gap-2">
                <span aria-hidden="true" className="text-accent">–</span>
                {detail}
              </li>
            ))}
          </ul>
        )}

        {hasDevices && (
          <>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {product.devices!.map((device) => (
                <DeviceCard key={device.name} device={device} />
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground">
              Specifications come from the manufacturer&apos;s brochures and may change. Please
              check with me before ordering.
            </p>
          </>
        )}

        {product.price && <p className="mt-auto pt-5 font-mono text-sm">{product.price}</p>}
      </div>
    </article>
  )
}

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand: id } = await params
  const brand = productBrands.find((b) => b.id === id)
  if (!brand) notFound()

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Link
          href="/#products"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          All products
        </Link>

        <h1 className="mt-8 font-serif text-6xl text-balance md:text-7xl">{brand.name}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          {brand.summary}
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brand.products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        <div className="mt-20 flex flex-col gap-4 rounded-lg border bg-card p-8 md:flex-row md:items-center md:justify-between">
          <p className="font-serif text-3xl">Interested in {brand.name}?</p>
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
