import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <footer className="w-full bg-[#0a0a0a] text-white pt-20 pb-0 font-archivo relative overflow-hidden">

            {/* 1. SEAMLESS TRANSITION */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0a0a0a] z-10"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* LEFT SIDE: BRANDING & SYSTEM DATA */}
                    <div className="lg:col-span-6 space-y-12">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-zzz-yellow text-black px-4 py-2 font-black italic text-3xl skew-x-[-15deg]">
                                    06
                                </div>
                                <h3 className="text-6xl font-black italic tracking-tighter uppercase leading-none">
                                    NEPS <br /> <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>SECURITY</span>
                                </h3>
                            </div>
                            <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.5em] italic max-w-sm">
                                Criminal Investigation Special Response Team // Sector 06 New Eridu Bureau.
                            </p>
                        </div>

                        {/* Visual Filler: System Specs */}
                        <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-8">
                            {[
                                { label: "SYNC_RATE", val: "100%", color: "text-zzz-yellow" },
                                { label: "STABILITY", val: "OPTIMAL", color: "text-green-500" },
                                { label: "ENCRYPTION", val: "AES-256", color: "text-white/40" }
                            ].map((stat, i) => (
                                <div key={i} className="space-y-1">
                                    <span className="text-[8px] font-black text-white/20 uppercase">{stat.label}</span>
                                    <span className={`block text-xs font-black italic ${stat.color}`}>{stat.val}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE: LARGE NAV & BIG NUMBER */}
                    <div className="lg:col-span-6 relative h-full flex flex-col justify-between">
                        <div className="grid grid-cols-2 gap-12 relative z-10">
                            <div className="space-y-4">
                                <span className="text-zzz-yellow font-black text-[10px] uppercase tracking-[0.2em] border-l-2 border-zzz-yellow pl-3">Directory</span>
                                <ul className="space-y-3 text-xl font-black italic uppercase tracking-tighter">
                                    <li className="hover:text-zzz-yellow cursor-pointer transition-all hover:translate-x-2">Dashboard</li>
                                    <li className="hover:text-zzz-yellow cursor-pointer transition-all hover:translate-x-2">Agents</li>
                                    <li className="hover:text-zzz-yellow cursor-pointer transition-all hover:translate-x-2">Database</li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <span className="text-zzz-yellow font-black text-[10px] uppercase tracking-[0.2em] border-l-2 border-zzz-yellow pl-3">Network</span>
                                <ul className="space-y-3 text-xl font-black italic uppercase tracking-tighter">
                                    <li className="hover:text-zzz-yellow cursor-pointer transition-all hover:translate-x-2">Discord</li>
                                    <li className="hover:text-zzz-yellow cursor-pointer transition-all hover:translate-x-2">X.com</li>
                                    <li className="hover:text-zzz-yellow cursor-pointer transition-all hover:translate-x-2">Satellite</li>
                                </ul>
                            </div>
                        </div>

                        {/* BIG NUMBER FILLER (Agar sisi kanan tidak kosong) */}
                        <div className="mt-10 opacity-[0.05] text-[15rem] font-black italic leading-none text-right select-none pointer-events-none uppercase">
                            Unit
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. BOTTOM MARQUEE (Solusi untuk ruang kosong paling bawah) */}
            <div className="mt-20 bg-white py-4 overflow-hidden flex whitespace-nowrap border-t-8 border-zzz-yellow">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="flex gap-10 items-center"
                >
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="text-black font-black italic text-2xl uppercase tracking-tighter">
                            New Eridu Public Security • Special Response Team • Sector 06 • Access Granted •
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Sub-footer black bar */}
            <div className="bg-black py-4 px-6 flex justify-between items-center text-[10px] font-black italic text-white/20 uppercase tracking-[0.3em]">
                <span>&copy; 2026 // NEPS_DEV_DIV</span>
                <div className="flex gap-8">
                    <span>Privacy_Protocol</span>
                    <span>Hollow_Safety_Code</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer