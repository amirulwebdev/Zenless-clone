import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <section className="w-full bg-[#0a0a0a] pt-10 pb-32 px-6 font-archivo relative overflow-hidden">

            {/* ELEMEN PENYAMBUNG (Diagonal Line) */}
            {/* Ini yang bikin transisi nggak kaku */}
            <div className="absolute top-0 left-0 w-full h-24 bg-[#0a0a0a] -translate-y-full">
                <div className="w-full h-full border-b-2 border-zzz-yellow/30 skew-y-[-2deg]"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Judul yang 'Menabrak' Batas Atas */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <div className="inline-block bg-zzz-yellow text-black px-4 py-1 font-black italic text-xs skew-x-[-15deg] mb-4">
                        RECRUITMENT_OFFICE
                    </div>
                    <h2 className="text-7xl md:text-[120px] font-black italic leading-[0.75] tracking-tighter uppercase text-white">
                        JOIN THE <br />
                        <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>FORCE.</span>
                    </h2>
                </motion.div>

                {/* FORM BOX - Dibuat 'Floating' di atas background gelap */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start">
                    <div className="lg:col-span-8 lg:col-start-5 relative">
                        {/* Shadow Effect di belakang form agar menyatu dengan kegelapan */}
                        <div className="absolute -inset-4 bg-zzz-yellow/5 blur-3xl rounded-full"></div>

                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-16 relative shadow-[20px_20px_0px_#facc15]"
                        >
                            {/* Watermark di pojok form */}
                            <div className="absolute top-4 right-4 text-4xl font-black italic text-black/[0.03] select-none">FORM_06</div>

                            <form className="space-y-10 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="border-b-4 border-black focus-within:border-zzz-yellow transition-colors">
                                        <label className="text-[10px] font-black text-black/40 uppercase tracking-widest block mb-1">Agent_Name</label>
                                        <input type="text" placeholder="REQUIRED" className="w-full bg-transparent py-2 outline-none font-black italic text-xl uppercase text-black placeholder:text-black/5" />
                                    </div>
                                    <div className="border-b-4 border-black focus-within:border-zzz-yellow transition-colors">
                                        <label className="text-[10px] font-black text-black/40 uppercase tracking-widest block mb-1">Comms_Link</label>
                                        <input type="email" placeholder="EMAIL_ADDR" className="w-full bg-transparent py-2 outline-none font-black italic text-xl uppercase text-black placeholder:text-black/5" />
                                    </div>
                                </div>
                                <div className="border-b-4 border-black focus-within:border-zzz-yellow transition-colors">
                                    <label className="text-[10px] font-black text-black/40 uppercase tracking-widest block mb-1">Message</label>
                                    <textarea rows="2" placeholder="TRANSMIT_DATA..." className="w-full bg-transparent py-2 outline-none font-black italic text-xl uppercase text-black placeholder:text-black/5 resize-none" />
                                </div>
                                <button className="w-full bg-black text-white py-6 font-black italic text-2xl uppercase tracking-widest hover:bg-zzz-yellow hover:text-black transition-all shadow-[10px_10px_0px_#ccc] hover:shadow-none active:translate-y-1">
                                    Submit_Application
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Background Decor - BIAR GAK KOSONG */}
            <div className="absolute bottom-10 left-10 opacity-[0.03] text-white font-black italic text-9xl select-none uppercase">
                PUBP
            </div>
        </section>
    )
}

export default Contact