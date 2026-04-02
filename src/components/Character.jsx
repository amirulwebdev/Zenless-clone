import { useState, useEffect } from 'react'
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

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % characters.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [index])

    return (
        // PERBAIKAN ANDROID: Gunakan min-h-screen dan py-20 agar konten tidak sesak di HP
        <div id='personnel' className="w-full min-h-screen lg:h-screen bg-[#080808] relative overflow-hidden font-archivo text-white flex items-center justify-center py-20 lg:py-0">

            {/* 1. BACKGROUND DYNAMIC TEXT */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={active.name}
                        initial={{ opacity: 0, x: 200, skewX: -20 }}
                        animate={{ opacity: 0.1, x: 0, skewX: -20 }}
                        exit={{ opacity: 0, x: -200 }}
                        className="text-[40vw] lg:text-[35vw] font-black italic whitespace-nowrap leading-none"
                    >
                        {active.name.split(' ')[0]}
                    </motion.h1>
                </AnimatePresence>
            </div>

            {/* 2. MAIN INTERFACE */}
            {/* PERBAIKAN ANDROID: flex-col untuk HP, grid untuk Windows */}
            <div className="w-full max-w-[1200px] flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-0 items-center relative z-10 px-6">

                {/* SISI KIRI: DATA AGENT */}
                {/* Di Android, teks tampil duluan di atas */}
                <div className="lg:col-span-6 space-y-4 md:space-y-6 order-1">
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

                            {/* Font size dikecilkan sedikit untuk Android (text-5xl) agar tidak pecah */}
                            <h2 className="text-5xl md:text-8xl lg:text-9xl font-black italic leading-[0.8] tracking-tighter uppercase">
                                <span className="block">{active.name.split(' ')[0]}</span>
                                <span className="block text-zzz-yellow drop-shadow-[4px_4px_0px_#000]">{active.name.split(' ')[1] || "AGENT"}</span>
                            </h2>

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

                            <div className="flex items-center gap-4 pt-2">
                                <div className="flex gap-1">
                                    {characters.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setIndex(i)}
                                            className={`h-2 transition-all duration-300 ${index === i ? 'w-12 bg-zzz-yellow' : 'w-4 bg-white/20'}`}
                                        />
                                    ))}
                                </div>
                                <div className="text-xs font-black italic text-white/40">0{index + 1} / 04</div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* SISI KANAN: CHARACTER VISUAL */}
                {/* PERBAIKAN ANDROID: Tinggi dikunci h-[350px] agar tidak menutupi teks, posisi order-2 (di bawah teks) */}
                <div className="lg:col-span-6 relative flex justify-center items-center h-[350px] lg:h-[650px] order-2 lg:mt-0 lg:-ml-20">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            transition={{ duration: 0.4 }}
                            className="relative w-full h-full flex items-center justify-center"
                        >
                            {/* Kotak Background Karakter (Disesuaikan untuk Android) */}
                            <div
                                className="absolute w-[250px] h-[320px] lg:w-[400px] lg:h-[550px] skew-x-[-15deg] shadow-[20px_20px_0px_rgba(0,0,0,0.5)] lg:shadow-[40px_40px_0px_rgba(0,0,0,0.5)]"
                                style={{ backgroundColor: active.color }}
                            >
                                <div className="absolute inset-0 bg-black/10 mix-blend-overlay opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                            </div>

                            {/* IMAGE: h-full akan mengikuti container h-[350px] di Android dan h-[650px] di Windows */}
                            <img
                                src={active.image}
                                alt={active.name}
                                className="h-full w-auto object-contain z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] lg:drop-shadow-[0_40px_80px_rgba(0,0,0,1)] relative transition-transform duration-500 hover:scale-105"
                            />

                            <div className="absolute top-10 right-0 bg-black p-2 border border-white skew-x-[15deg] z-20 hidden lg:block">
                                <div className="text-[8px] font-black text-zzz-yellow leading-none">STATUS</div>
                                <div className="text-sm font-black italic leading-none">READY</div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-20"></div>
            <div className="absolute inset-0 pointer-events-none z-50 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/fake-brick.png')]"></div>
        </div>
    )
}

export default CharacterOverdrive