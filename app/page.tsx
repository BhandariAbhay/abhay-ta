import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Products } from '@/components/products'
import { Work } from '@/components/work'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Products />
        <Work />
        <About />
        <Contact />
      </main>
    </>
  )
}
