import { motion } from 'framer-motion'

const AboutTactical = () => {
    return (
        // PERBAIKAN MOBILE: Mengubah min-h-screen menjadi h-auto pada mobile agar konten yang panjang tidak terpotong (pt-24 pb-32)
        <div id='about' className="min-h-screen lg:h-screen w-full bg-[#0a0a0a] text-white flex items-center justify-center p-4 md:p-10 relative overflow-hidden font-archivo pt-24 pb-32 lg:py-0">

            {/* --- 1. THE GRID SYSTEM --- */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[length:30px_30px] md:bg-[length:40px_40px]"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-zzz-yellow/5"></div>

            {/* --- 2. VERTICAL DECORATIVE TEXT --- */}
            {/* Tetap hidden di mobile agar tidak memakan space samping */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block">
                <p className="vertical-text text-[10px] font-black tracking-[1em] text-white/20 uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>
                    NEW_ERIDU_SECURITY_PROTOCOL_REV_06
                </p>
            </div>

            {/* --- 3. MAIN CONTAINER --- */}
            {/* PERBAIKAN MOBILE: Gap dikurangi dari 8 ke 6 agar lebih rapat di layar kecil */}
            <div className="max-w-7xl z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">

                {/* SISI KIRI: DATA & ANALYTICS */}
                {/* PERBAIKAN MOBILE: order-2 agar gambar muncul setelah teks di mobile (opsional, tapi bagus untuk hirarki informasi) */}
                <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative max-w-[280px] md:max-w-none mx-auto lg:mx-0"
                    >
                        {/* Frame Foto Karakter */}
                        <div className="relative border-2 border-white/20 p-2 bg-white/5 backdrop-blur-md">
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-zzz-yellow"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-zzz-yellow"></div>

                            <img
                                src="https://static.wikia.nocookie.net/zenless-zone-zero/images/8/87/Officer_Cui_Portrait.png"
                                alt="Officer Cui"
                                className="w-full grayscale hover:grayscale-0 transition-all duration-700"
                            />

                            {/* Overlay Scanning Line */}
                            <motion.div
                                animate={{ y: [0, 200, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-x-0 h-[2px] bg-zzz-yellow/50 z-20 shadow-[0_0_10px_#facc15]"
                            />
                        </div>

                        {/* ID Tag - Ukuran teks dikecilkan sedikit untuk mobile */}
                        <div className="absolute -bottom-3 -right-2 md:-bottom-4 md:-right-4 bg-zzz-yellow text-black px-3 py-1 md:px-4 md:py-2 font-black italic skew-x-[-20deg] shadow-[4px_4px_0px_#fff] z-30">
                            <span className="inline-block -skew-x-[-20deg] text-[10px] md:text-xs">OFFICER_CUI // SR</span>
                        </div>
                    </motion.div>

                    {/* Stats bar - Hidden di mobile kecil agar tidak clutter, atau biarkan jika muat */}
                    <div className="grid grid-cols-3 gap-2 pt-2 max-w-[280px] mx-auto lg:mx-0">
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

                {/* SISI KANAN: MISSION BRIEFING */}
                <div className="lg:col-span-7 order-1 lg:order-2 space-y-4 md:space-y-8">
                    <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 md:w-12 h-[1px] bg-zzz-yellow"></div>
                            <span className="text-zzz-yellow font-black text-[10px] tracking-widest uppercase italic">Operational Dossier</span>
                        </div>

                        {/* PERBAIKAN MOBILE: Font size dikecilkan dari 8xl ke 5xl (mobile) agar tidak overflow layar */}
                        <h2 className="text-4xl md:text-8xl font-black italic leading-[0.9] tracking-tighter uppercase">
                            NEPS <br />
                            <span className="text-zzz-yellow">OVERDRIVE</span>
                        </h2>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {["Combat", "Infiltration", "Tactical"].map(tag => (
                                <span key={tag} className="border border-white/20 px-2 py-1 text-[9px] font-bold uppercase tracking-widest bg-black/40">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-4 md:space-y-6"
                    >
                        {/* PERBAIKAN MOBILE: Text size base ke lg agar enak dibaca di HP */}
                        <p className="text-base md:text-2xl font-light leading-snug text-zinc-400 max-w-2xl">
                            <span className="text-white font-bold italic">Special Response Team 06</span> is the final line between civilization and the Hollow's corruption.
                        </p>

                        {/* Tactical Box */}
                        <div className="relative group p-4 md:p-6 bg-white/5 border border-white/10">
                            <div className="absolute top-0 right-0 p-2 opacity-20">
                                <svg width="15" height="15" viewBox="0 0 20 20" fill="white">
                                    <path d="M0 0h20v2H0zM0 0v20h2V0z" />
                                </svg>
                            </div>
                            <h4 className="text-zzz-yellow font-black italic text-xs mb-2 tracking-widest underline underline-offset-4">MISSION_OBJECTIVE:</h4>
                            <p className="text-xs md:text-base font-mono leading-relaxed text-zinc-300">
                                Maintain public order within the Hollow zones, execute high-risk asset recovery, and eliminate threats.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* --- 4. BOTTOM DECOR --- */}
            {/* PERBAIKAN MOBILE: Menambahkan hidden di elemen status tertentu agar bar bawah tidak sumpek di Android */}
            <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 w-[92%] flex justify-between items-center border-t border-white/10 pt-4">
                <div className="flex gap-6 md:gap-10 items-center">
                    <div className="flex flex-col">
                        <span className="text-[7px] md:text-[8px] text-white/40 uppercase">System Status</span>
                        <span className="text-[10px] md:text-xs font-bold text-green-400">ONLINE</span>
                    </div>
                    {/* Location disembunyikan di mobile agar muat */}
                    <div className="hidden sm:flex flex-col">
                        <span className="text-[8px] text-white/40 uppercase">Location</span>
                        <span className="text-xs font-bold uppercase tracking-tighter italic">New Eridu</span>
                    </div>
                </div>
                <div className="bg-white text-black font-black italic px-3 py-1 skew-x-[-20deg] text-[10px] md:text-xs">
                    06_UNIT
                </div>
            </div>

            {/* Grain Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
        </div>
    )
}

export default AboutTactical