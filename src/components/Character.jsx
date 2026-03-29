import { useState, useEffect } from 'react' // Tambahkan useEffect di sini
import { motion, AnimatePresence } from 'framer-motion'

const characters = [
    { id: "01", name: "ZHU YUAN", role: "TEAM LEADER", color: "#2dd4bf", tag: "PUBP", power: 92, image: "https://static.wikia.nocookie.net/zenless-zone-zero/images/0/07/Agent_Zhu_Yuan_Portrait.png" },
    { id: "02", name: "QINGYI", role: "SENIOR OFFICER", color: "#dc2626", tag: "CQC", power: 88, image: "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d3/Agent_Qingyi_Portrait.png" },
    { id: "03", name: "SETH LOWELL", role: "NEW RECRUIT", color: "#fbbf24", tag: "SHIELD", power: 75, image: "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f9/Agent_Seth_Lowell_Portrait.png" },
    { id: "04", name: "JANE DOE", role: "UNDERCOVER", color: "#a855f7", tag: "INFIL", power: 95, image: "https://static.wikia.nocookie.net/zenless-zone-zero/images/1/11/Agent_Jane_Doe_Portrait.png" },
]

const CharacterOverdrive = () => {
    const [index, setIndex] = useState(0)
    const active = characters[index]

    // --- LOGIKA SCROLL OTOMATIS ---
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % characters.length)
        }, 5000) // Ganti setiap 5 detik

        return () => clearInterval(interval) // Bersihkan interval saat komponen tidak digunakan
    }, [index]) // Reset timer setiap kali index berubah (klik manual)

    return (
        <div id='personnel' className="w-full h-screen bg-[#080808] relative overflow-hidden font-archivo text-white flex items-center justify-center">

            {/* 1. BACKGROUND DYNAMIC TEXT (TEBAL & MIRING) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={active.name}
                        initial={{ opacity: 0, x: 200, skewX: -20 }}
                        animate={{ opacity: 0.1, x: 0, skewX: -20 }}
                        exit={{ opacity: 0, x: -200 }}
                        transition={{ duration: 0.5 }}
                        className="text-[35vw] font-black italic whitespace-nowrap leading-none"
                    >
                        {active.name.split(' ')[0]}
                    </motion.h1>
                </AnimatePresence>
            </div>

            {/* 2. WARNING TAPE DECOR (Atas & Bawah) */}
            <div className="absolute top-0 w-full h-8 bg-zzz-yellow/10 flex items-center overflow-hidden border-b border-zzz-yellow/20">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="flex whitespace-nowrap text-[10px] font-black text-zzz-yellow/40 gap-10 italic"
                >
                    {[...Array(10)].map((_, i) => (
                        <span key={i}>CAUTION // HOLLOW REACHED // AGENT DATA DEPLOYED // ACCESS GRANTED</span>
                    ))}
                </motion.div>
            </div>

            {/* 3. MAIN INTERFACE GRID */}
            <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-0 items-center relative z-10 px-6">

                {/* SISI KIRI: DATA AGENT (Lebih Padat) */}
                <div className="lg:col-span-6 space-y-4 md:space-y-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            className="space-y-4"
                        >
                            <div className="flex items-center gap-3">
                                <span className="bg-zzz-yellow text-black px-3 py-1 text-xs font-black italic skew-x-[-15deg]">AGENT_{active.id}</span>
                                <div className="h-[1px] w-24 bg-white/30"></div>
                            </div>

                            <h2 className="text-7xl md:text-9xl font-black italic leading-[0.8] tracking-tighter uppercase">
                                <span className="block">{active.name.split(' ')[0]}</span>
                                <span className="block text-zzz-yellow drop-shadow-[4px_4px_0px_#000]">{active.name.split(' ')[1] || "AGENT"}</span>
                            </h2>

                            {/* Stats & Info Box */}
                            <div className="bg-black/60 backdrop-blur-md border-l-4 border-zzz-yellow p-5 max-w-sm space-y-4">
                                <div className="space-y-1">
                                    <div className="flex justify-between text-[10px] font-black italic text-zzz-yellow uppercase">
                                        <span>SYNC_CAPACITY</span>
                                        <span>{active.power}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-white/10">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${active.power}%` }}
                                            className="h-full bg-zzz-yellow shadow-[0_0_15px_#facc15]"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-3">
                                    <div className="text-[10px]"><span className="text-white/40 block">FACTION</span><span className="font-bold italic">{active.tag}</span></div>
                                    <div className="text-[10px]"><span className="text-white/40 block">CLASS</span><span className="font-bold italic">{active.role}</span></div>
                                </div>
                            </div>

                            {/* NAVIGATION (Horizontal & Gamey) */}
                            <div className="flex items-center gap-4 pt-2">
                                <div className="flex gap-1">
                                    {characters.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setIndex(i)}
                                            className={`h-2 transition-all duration-300 ${index === i ? 'w-12 bg-zzz-yellow' : 'w-4 bg-white/20 hover:bg-white/50'}`}
                                        />
                                    ))}
                                </div>
                                <div className="text-xs font-black italic text-white/40">0{index + 1} / 04</div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* SISI KANAN: CHARACTER VISUAL */}
                <div className="lg:col-span-6 relative flex justify-center items-center h-[500px] md:h-[650px] -mt-10 lg:mt-0 lg:-ml-20">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active.id}
                            initial={{ opacity: 0, scale: 0.8, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 1.1, x: -50 }}
                            transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                            className="relative w-full h-full flex items-center justify-center"
                        >
                            <div
                                className="absolute w-[300px] h-[450px] md:w-[400px] md:h-[550px] skew-x-[-15deg] shadow-[40px_40px_0px_rgba(0,0,0,0.5)] z-0"
                                style={{ backgroundColor: active.color }}
                            >
                                <div className="absolute inset-0 bg-black/10 mix-blend-overlay opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                            </div>

                            <img
                                src={active.image}
                                alt={active.name}
                                className="h-full w-auto object-contain z-10 drop-shadow-[0_40px_80px_rgba(0,0,0,1)] relative transition-transform duration-500 hover:scale-105"
                            />

                            <div className="absolute top-1/4 right-0 bg-black p-3 border-2 border-white skew-x-[15deg] z-20 hidden md:block">
                                <div className="text-[10px] font-black text-zzz-yellow leading-none">STATUS</div>
                                <div className="text-lg font-black italic leading-none">READY</div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
            {/* Tambahkan ini di paling bawah kontainer Character kamu */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-20"></div>

            {/* 4. SCANLINE & NOISE */}
            <div className="absolute inset-0 pointer-events-none z-50 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/fake-brick.png')]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60 pointer-events-none"></div>
        </div>
    )
}

export default CharacterOverdrive