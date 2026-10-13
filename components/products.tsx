import Image from 'next/image'
import { productBrands } from '@/lib/products'

export function Products() {
  return (
    <section id="products" aria-label="Products" className="scroll-mt-16 border-t">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-mono text-xs text-accent">Products</p>
        <h2 className="mt-4 font-serif text-4xl tracking-tight text-balance md:text-5xl">
          What I supply and support
        </h2>

        <div className="mt-16 flex flex-col gap-20">
          {productBrands.map((brand) => (
            <div key={brand.id} id={brand.id} className="scroll-mt-24">
              <h3 className="font-serif text-3xl tracking-tight md:text-4xl">{brand.name}</h3>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground text-pretty">
                {brand.summary}
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                      <h4 className="font-serif text-xl tracking-tight">{product.name}</h4>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
