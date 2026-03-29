import React from 'react'
import Hero from './components/hero'
import About from './components/about'
import Character from './components/character'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
    return (
        /* PERUBAHAN DI SINI:
           1. Hapus 'h-screen' dan 'overflow-y-scroll' agar scroll mengikuti body (lebih smooth).
           2. Hapus 'snap-y' dan 'snap-mandatory' untuk menghilangkan efek magnet/lompat.
        */
        <main className="min-h-screen bg-black text-white selection:bg-zzz-yellow selection:text-black">

            {/* Section Hero: 
               Hapus 'snap-start'. Gunakan 'min-h-screen' agar pas satu layar 
               tapi tetap fleksibel jika kontennya bertambah.
            */}
            <main className="bg-[#0a0a0a]">
                <Navbar />
                {/* Hero, About, Character, Contact, Footer... */}
            </main>

            <section className="min-h-screen w-full">
                <Hero />
            </section>

            {/* Bagian 2: About */}
            <section className="min-h-screen w-full">
                <About />
            </section>

            {/* Bagian 3: Character */}
            <section className="min-h-screen w-full">
                <Character />
            </section>

            {/* Bagian 4: Contact */}
            <section className='min-h-screen w-full'>
                <Contact />
            </section>

            {/* Bagian 4: Contact */}
            <section className='min-h-screen w-full'>
                <Footer />
            </section>
        </main>
    )
}

export default App