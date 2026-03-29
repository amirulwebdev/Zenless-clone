import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-zzz-yellow/30 py-4' : 'bg-transparent py-8'
                }`}
        >
            <div className="max-w-[1440px] mx-auto px-10 flex justify-between items-center">

                {/* SISI KIRI: BRANDING & UID */}
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-zzz-yellow text-black flex items-center justify-center font-black italic text-2xl skew-x-[-10deg]">
                            06
                        </div>
                        <div className="hidden md:block leading-none">
                            <h1 className="text-white font-black italic text-2xl tracking-tighter uppercase">NEPS</h1>
                            <p className="text-[10px] font-bold text-zzz-yellow tracking-[0.4em] uppercase opacity-60 italic">Bureau</p>
                        </div>
                    </div>

                    {/* UID LANGSUNG (Statis sebagai elemen desain) */}
                    <div className="hidden lg:flex flex-col border-l border-white/10 pl-8">
                        <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.5em]">Identity_Detected</span>
                        <span className="text-xs font-black italic text-white/80 leading-none">UID-06-AMIRUL-2026</span>
                    </div>
                </div>

                {/* TENGAH: NAVIGATION */}
                <ul className="hidden xl:flex items-center gap-12">
                    {['About', 'Personnel', 'Contact'].map((item, i) => (
                        <li key={i}>
                            <a href={`#${item.toLowerCase()}`} className="text-xs font-black italic text-white/50 uppercase tracking-[0.2em] hover:text-zzz-yellow transition-all flex items-center gap-2 group">
                                <span className="text-zzz-yellow opacity-0 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* KANAN: STATUS & SYNC */}
                <div className="flex items-center gap-8">
                    <div className="hidden sm:flex flex-col items-end leading-none">
                        <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">System_Status</span>
                        <span className="text-[10px] font-black italic text-green-400 uppercase tracking-tighter">Connected</span>
                    </div>

                    <button className="bg-white text-black px-8 py-3 font-black italic text-[11px] uppercase skew-x-[-15deg] hover:bg-zzz-yellow transition-all hover:translate-y-[-2px] active:translate-y-0 shadow-[6px_6px_0px_rgba(255,255,255,0.1)]">
                        Sync_Session
                    </button>
                </div>

            </div>
        </motion.nav>
    )
}

export default Navbar