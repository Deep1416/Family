import React from 'react'
import CarouselPage from './CarouselPage'
import SectionSecond from './SectionSecond'
import DataSection from './DataSection'
import  LastSection from './LastSection'


function Home() {
  return (
    <main>
        <section>
           <CarouselPage/>
        </section>
        <section>
          <SectionSecond/>
        </section>
        <section>
          <DataSection/>
        </section>
        <section>
        <LastSection/>
        </section>
    </main>
  )
}

export default Home
