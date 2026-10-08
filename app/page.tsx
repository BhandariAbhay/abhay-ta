import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Work } from '@/components/work'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
    </>
  )
}
