import { motion } from 'framer-motion'

const AboutTactical = () => {
    return (
        <div id='about' className="min-h-screen w-full bg-[#0a0a0a] text-white flex items-center justify-center p-4 md:p-10 relative overflow-hidden font-archivo">

            {/* --- 1. THE GRID SYSTEM (Cyber Backdrop) --- */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[length:40px_40px]"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-zzz-yellow/5"></div>

            {/* --- 2. VERTICAL DECORATIVE TEXT --- */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block">
                <p className="vertical-text text-[10px] font-black tracking-[1em] text-white/20 uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>
                    NEW_ERIDU_SECURITY_PROTOCOL_REV_06
                </p>
            </div>

            {/* --- 3. MAIN CONTAINER --- */}
            <div className="max-w-7xl z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-10">

                {/* SISI KIRI: DATA & ANALYTICS (5 Columns) */}
                <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Frame Foto Karakter Style 'Scanning' */}
                        <div className="relative border-2 border-white/20 p-2 bg-white/5 backdrop-blur-md shadow-[0_0_30px_rgba(252,211,77,0.05)]">
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-zzz-yellow"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-zzz-yellow"></div>

                            <img
                                src="https://static.wikia.nocookie.net/zenless-zone-zero/images/8/87/Officer_Cui_Portrait.png"
                                alt="Caesar King"
                                className="w-full grayscale hover:grayscale-0 transition-all duration-700"
                            />

                            {/* Overlay Scanning Line */}
                            <motion.div
                                animate={{ y: [0, 300, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-x-0 h-[2px] bg-zzz-yellow/50 z-20 shadow-[0_0_10px_#facc15]"
                            />
                        </div>

                        {/* ID Tag */}
                        <div className="absolute -bottom-4 -right-4 bg-zzz-yellow text-black px-4 py-2 font-black italic skew-x-[-20deg] shadow-[4px_4px_0px_#fff]">
                            <span className="inline-block -skew-x-[-20deg] text-xs">CAESAR_KING // SSR</span>
                        </div>
                    </motion.div>

                    {/* Stats bar kecil di bawah gambar */}
                    <div className="grid grid-cols-3 gap-2 pt-4">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="h-1 bg-white/10 overflow-hidden">
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    whileInView={{ x: "0%" }}
                                    transition={{ delay: 0.5 + (i * 0.2), duration: 1 }}
                                    className="h-full bg-zzz-yellow"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* SISI KANAN: MISSION BRIEFING (7 Columns) */}
                <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-2">
                            <div className="w-12 h-[1px] bg-zzz-yellow"></div>
                            <span className="text-zzz-yellow font-black text-xs tracking-widest uppercase italic">Operational Dossier</span>
                        </div>

                        <h2 className="text-6xl md:text-8xl font-black italic leading-[0.8] tracking-tighter uppercase">
                            NEPS <br />
                            <span className="text-zzz-yellow">OVERDRIVE</span>
                        </h2>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {["Combat", "Infiltration", "Tactical"].map(tag => (
                                <span key={tag} className="border border-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-6"
                    >
                        <p className="text-xl md:text-2xl font-light leading-snug text-zinc-400 max-w-2xl">
                            <span className="text-white font-bold italic">Special Response Team 06</span> is not just a police force. We are the final line between civilization and the Hollow's corruption.
                        </p>

                        {/* Tactical Box */}
                        <div className="relative group p-6 bg-white/5 border border-white/10 clip-path-polygon">
                            <div className="absolute top-0 right-0 p-2 opacity-20">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                                    <path d="M0 0h20v2H0zM0 0v20h2V0z" />
                                </svg>
                            </div>
                            <h4 className="text-zzz-yellow font-black italic text-sm mb-2 tracking-widest underline">MISSION_OBJECTIVE:</h4>
                            <p className="text-sm md:text-base font-mono leading-relaxed text-zinc-300">
                                Maintain public order within the Hollow zones, execute high-risk asset recovery, and eliminate Ethereal threats with absolute prejudice.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* --- 4. BOTTOM DECOR (THE NAV BAR) --- */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] flex justify-between items-center border-t border-white/10 pt-4">
                <div className="flex gap-10 items-center">
                    <div className="flex flex-col">
                        <span className="text-[8px] text-white/40 uppercase">System Status</span>
                        <span className="text-xs font-bold text-green-400">ONLINE</span>
                    </div>
                    <div className="hidden md:flex flex-col">
                        <span className="text-[8px] text-white/40 uppercase">Location</span>
                        <span className="text-xs font-bold uppercase tracking-tighter italic">New Eridu // Sixth Street</span>
                    </div>
                </div>
                <div className="bg-white text-black font-black italic px-4 py-1 skew-x-[-20deg] text-xs">
                    06_UNIT
                </div>
            </div>

            {/* Grain Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
        </div>
    )
}

export default AboutTactical