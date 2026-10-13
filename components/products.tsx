import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { productBrands } from '@/lib/products'

export function Products() {
  return (
    <section id="products" aria-label="Products" className="scroll-mt-16 border-t">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-mono text-xs text-accent">Products</p>
        <h2 className="mt-4 font-serif text-4xl tracking-tight text-balance md:text-5xl">
          Browse by brand
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {productBrands.map((brand) => (
            <Link
              key={brand.id}
              href={`/products/${brand.id}`}
              className="group flex flex-col justify-between gap-10 rounded-lg border bg-card p-8 transition-colors hover:border-accent"
            >
              <div>
                <h3 className="font-serif text-3xl tracking-tight">{brand.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {brand.summary}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-medium">
                View products
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
