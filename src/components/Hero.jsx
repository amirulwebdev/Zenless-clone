import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div className="w-full bg-[#0a0a0a] min-h-screen overflow-hidden font-archivo relative">

            {/* --- 1. GLOBAL BACKGROUND LAYER (Pola Grid & Carbon) --- */}
            {/* Layer ini ada di paling belakang (z-0) agar menyatu dari atas ke bawah */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.10] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[length:30px_30px]"></div>
                <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <img
                    src="https://static.wikia.nocookie.net/zenless-zone-zero/images/2/23/Faction_Criminal_Investigation_Special_Response_Team_Icon.png"
                    alt="NEPS Logo"
                    className="absolute w-[300px] md:w-[600px] opacity-[0.03] filter grayscale invert top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
            </div>

            {/* --- 2. CONTENT LAYER (Teks & Tombol) --- */}
            {/* Kita kasih z-[50] supaya PASTI di depan pita putih */}
            <div className="relative z-[50] w-full min-h-screen flex flex-col items-center justify-center pt-20 pb-32 px-4">

                {/* Badge Ver 1.0 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    className="bg-zzz-yellow text-black px-4 py-1 font-bold tracking-widest text-[10px] md:text-xs uppercase skew-x-[-15deg] mb-6 shadow-[3px_3px_0px_#fff]"
                >
                    System.Boot // Ver.1.0
                </motion.div>

                {/* Judul Utama */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-black italic uppercase text-center leading-[0.85] tracking-tighter text-white"
                >
                    <span className="block drop-shadow-[5px_5px_0px_rgba(45,212,191,0.3)]">ZENLESS</span>
                    <span className="block text-zzz-yellow relative">ZONE</span>
                    <span className="block text-transparent" style={{ WebkitTextStroke: '1.5px white' }}>ZERO</span>
                </motion.h1>

                {/* Tombol Get It Now */}
                <motion.button
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className='mt-10 font-black text-xl md:text-2xl text-black bg-white px-8 py-3 rounded-tr-[30px] rounded-bl-[30px] border-2 border-transparent hover:border-zzz-yellow shadow-[6px_6px_0px_#facc15] transition-all flex items-center gap-3 group pointer-events-auto'
                >
                    GET IT <span className='text-zzz-yellow group-hover:text-black'>NOW!!</span>
                    <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M5 12h14M12 5l7 7-7 7"></path></svg>
                </motion.button>
            </div>

            {/* --- 3. TRANSITION LAYER (Pita Putih Miring) --- */}
            {/* Kita kasih z-[40] agar di belakang konten tapi di depan background */}
            <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-white origin-bottom-left -skew-y-2 z-[40] border-t-[8px] border-zzz-yellow shadow-[0_-10px_30px_rgba(250,204,21,0.2)]">
                {/* Pita Warning */}
                <div className="absolute -top-[22px] md:-top-[26px] left-0 w-full h-6 md:h-8 bg-black flex items-center overflow-hidden border-y border-white/20">
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

            {/* Garis Neon Samping */}
            <div className="absolute top-0 left-6 w-[2px] h-full bg-gradient-to-b from-teal-400/0 via-teal-400/20 to-teal-400/0 z-[10]"></div>
            <div className="absolute top-0 right-6 w-[2px] h-full bg-gradient-to-b from-red-600/0 via-red-600/20 to-red-600/0 z-[10]"></div>

        </div>
    )
}

export default Hero