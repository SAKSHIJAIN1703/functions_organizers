import React from 'react'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Birthday from '../components/Birthday'
import Footer from '../components/Footer'
import Reception from '../components/Reception'
import Anniversary from '../components/Anniversary'

const HeroPage = () => {
    return (
        <>
           <Header /> 
           <Hero />
           <Birthday/>
           <Reception/>
           <Anniversary/>
           <Footer />
        </>
    )
}

export default HeroPage;