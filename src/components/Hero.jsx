import { motion } from 'framer-motion'

const Hero = () => {
    return (
        // Wrapper utama: overflow-hidden untuk mencegah scroll horizontal, bg gelap
        <div className="w-full bg-[#0f0f0f] overflow-hidden font-archivo relative">

            {/* RUANG UNTUK NAVBAR: 
                pt-24 (padding-top: 96px) memastikan konten Hero turun 
                dan tidak tertutup Navbar fixed di kemudian hari.
            */}
            <div className="relative w-full min-h-[500px] lg:min-h-[650px] flex flex-col items-center justify-center pt-24 pb-32 px-4 z-10">

                {/* --- BACKGROUND DECORATION --- */}
                {/* Tekstur grid & serat karbon tipis */}
                <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

                {/* Logo NEPS besar di belakang (opacity diredupkan agar teks terbaca) */}
                <img
                    src="https://static.wikia.nocookie.net/zenless-zone-zero/images/2/23/Faction_Criminal_Investigation_Special_Response_Team_Icon.png"
                    alt="NEPS Logo"
                    className="absolute w-[300px] md:w-[500px] opacity-10 filter grayscale invert select-none pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />

                {/* --- MAIN CONTENT --- */}
                <div className="relative z-20 flex flex-col items-center w-full max-w-5xl">

                    {/* Badge Kecil di atas judul */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        className="bg-zzz-yellow text-black px-4 py-1 font-bold tracking-widest text-[10px] md:text-xs uppercase skew-x-[-15deg] mb-6 shadow-[3px_3px_0px_#fff]"
                    >
                        System.Boot // Ver.1.0
                    </motion.div>

                    {/* Judul Utama (Ukuran dipangkas agar pas di laptop) */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: "backOut" }}
                        className="text-6xl md:text-8xl lg:text-9xl font-black italic uppercase text-center leading-[0.85] tracking-tighter text-white"
                    >
                        <span className="block drop-shadow-[5px_5px_0px_rgba(45,212,191,0.3)]">ZENLESS</span>
                        <span className="block text-zzz-yellow relative z-10">ZONE</span>
                        {/* Teks ZERO menggunakan efek outline transparan */}
                        <span className="block text-transparent" style={{ WebkitTextStroke: '1.5px white' }}>ZERO</span>
                    </motion.h1>

                    {/* Dekorasi Garis & Status */}
                    <div className="flex items-center gap-4 mt-8 w-full max-w-md justify-center opacity-60">
                        <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-white"></div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white">New Eridu</span>
                        <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-white"></div>
                    </div>

                    {/* Tombol Get It Now (Dipindahkan ke bawah agar tidak terpotong) */}
                    <motion.button
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className='mt-10 font-black text-xl md:text-2xl text-black bg-white px-8 py-3 rounded-tr-[30px] rounded-bl-[30px] border-2 border-transparent hover:border-zzz-yellow shadow-[6px_6px_0px_#facc15] hover:shadow-[6px_6px_0px_#fff] transition-all flex items-center gap-3 group'
                    >
                        GET IT <span className='text-zzz-yellow group-hover:text-black transition-colors'>NOW!!</span>
                        <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M5 12h14M12 5l7 7-7 7"></path></svg>
                    </motion.button>

                </div>

                {/* Garis Vertikal Neon Kiri Kanan */}
                <div className="absolute top-0 left-6 w-[2px] h-full bg-gradient-to-b from-teal-400/0 via-teal-400/50 to-teal-400/0"></div>
                <div className="absolute top-0 right-6 w-[2px] h-full bg-gradient-to-b from-red-600/0 via-red-600/50 to-red-600/0"></div>

            </div>

            {/* --- ORNAMEN TRANSISI BAWAH (Slanted Edge) --- */}
            {/* Dibuat lebih tipis (h-16 md:h-24) agar tidak memakan layar */}
            <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-white origin-bottom-left -skew-y-2 z-30 border-t-[8px] border-zzz-yellow shadow-[0_-10px_30px_rgba(250,204,21,0.2)]">
                {/* Pita Warning berjalan di atas transisi miring */}
                <div className="absolute -top-[22px] md:-top-[26px] left-0 w-full h-6 md:h-8 bg-black flex items-center overflow-hidden whitespace-nowrap border-y border-white/20 skew-y-0 transform-none origin-center">
                    <motion.div
                        animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                        className="text-[10px] font-bold uppercase tracking-[0.5em] text-zzz-yellow flex gap-10"
                    >
                        <span>WARNING // HOLLOW ACTIVITY DETECTED</span>
                        <span>WARNING // HOLLOW ACTIVITY DETECTED</span>
                        <span>WARNING // HOLLOW ACTIVITY DETECTED</span>
                        <span>WARNING // HOLLOW ACTIVITY DETECTED</span>
                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default Hero