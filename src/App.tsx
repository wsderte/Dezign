import React from 'react'
import { Header } from './components/header/header'
import { Clients } from './components/clients/clients'
import { Footer } from './components/footer/footer'
import { About } from './components/about/about'

function App() {
    return (
        <div>
            <Header />
            <Clients />
            <About />
            <Footer />
        </div>
    )
}

export default App
