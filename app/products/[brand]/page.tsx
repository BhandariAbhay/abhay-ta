import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { deviceCategories, type DeviceCategory } from '@/lib/devices'
import { productBrands, type Product } from '@/lib/products'

export function generateStaticParams() {
  return productBrands.map((brand) => ({ brand: brand.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ brand: string }> }) {
  const { brand: id } = await params
  const brand = productBrands.find((b) => b.id === id)
  return { title: brand ? `${brand.name} products` : 'Products' }
}

function ProductBody({ product }: { product: Product }) {
  return (
    <>
      <h2 className="font-serif text-2xl">{product.name}</h2>
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
    </>
  )
}

function ProductCard({
  product,
  brandId,
  page,
}: {
  product: Product
  brandId: string
  page?: DeviceCategory
}) {
  if (page) {
    return (
      <Link
        href={`/products/${brandId}/${page.slug}`}
        className="group flex flex-col rounded-lg border bg-card p-6 hover:border-accent"
      >
        <ProductBody product={product} />
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium group-hover:text-accent">
          View all {page.devices.length} devices
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </span>
      </Link>
    )
  }

  return (
    <article className="flex flex-col rounded-lg border bg-card p-6">
      <ProductBody product={product} />
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
            <ProductCard
              key={product.name}
              product={product}
              brandId={brand.id}
              page={deviceCategories.find(
                (c) => c.brand === brand.id && c.title === product.name,
              )}
            />
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
