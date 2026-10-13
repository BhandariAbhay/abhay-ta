import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { productBrands } from '@/lib/products'

export function generateStaticParams() {
  return productBrands.map((brand) => ({ brand: brand.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ brand: string }> }) {
  const { brand: id } = await params
  const brand = productBrands.find((b) => b.id === id)
  return { title: brand ? `${brand.name} products` : 'Products' }
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
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          All products
        </Link>

        <h1 className="mt-8 font-serif text-5xl tracking-tight text-balance md:text-6xl">
          {brand.name}
        </h1>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground text-pretty">
          {brand.summary}
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brand.products.map((product) => (
            <article
              key={product.name}
              className="flex flex-col overflow-hidden rounded-lg border bg-card"
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
                <h2 className="font-serif text-xl tracking-tight">{product.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
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
                {product.price && (
                  <p className="mt-auto pt-5 font-mono text-sm">{product.price}</p>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 flex flex-col gap-4 rounded-lg border bg-card p-8 md:flex-row md:items-center md:justify-between">
          <p className="font-serif text-2xl tracking-tight">Interested in {brand.name}?</p>
          <Link
            href="/#contact"
            className="inline-flex items-center self-start rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground md:self-auto"
          >
            Get in touch
          </Link>
        </div>
      </main>
    </>
  )
}
