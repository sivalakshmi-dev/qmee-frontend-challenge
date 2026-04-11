import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Share2, Sparkles, Zap } from "lucide-react";

const SharePage = () => {
    const [copied, setCopied] = useState(false);
    
    const codeSnippet = `// futurDooM AI Core v3.1
const qMee_Assistant = {
  status: "active",
  aesthetic: "premium",
  logic: "advanced",
  capabilities: [
    "Context Awareness",
    "Generative Responses",
    "Creative Problem Solving"
  ]
};`;

    const handleCopy = () => {
        navigator.clipboard.writeText(codeSnippet);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-[#030712] text-white selection:bg-blue-500/30 font-sans">
            {/* Background Glows */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full" />
            </div>

            {/* Navbar - Premium Structure */}
            <nav className="relative z-20 flex items-center justify-between px-10 py-6 border-b border-white/5 backdrop-blur-md bg-black/20">
                <div className="flex items-center gap-2 font-black text-xl tracking-tighter uppercase">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-sm shadow-[0_0_15px_rgba(37,99,235,0.4)]">f</div>
                    <span>futurDooM</span>
                </div>
                <div className="hidden md:flex gap-6 text-sm text-gray-400 font-medium">
                    <span className="hover:text-white cursor-pointer transition-colors">Platform</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Solutions</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Developers</span>
                </div>
            </nav>

            <main className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8 }}
                    className="space-y-10"
                >
                    {/* Header */}
                    <div className="space-y-6">
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase"
                        >
                            <Sparkles size={14} className="animate-pulse" /> <span>Final Task: Shared AI Logic</span>
                        </motion.div>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent py-2">
                            Share AI Model
                        </h1>
                    </div>

                    {/* Code Parser Box */}
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="relative group rounded-3xl border border-white/10 bg-[#0B0F1A]/80 backdrop-blur-2xl overflow-hidden shadow-2xl"
                    >
                        <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/5">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/40" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                                <div className="w-3 h-3 rounded-full bg-green-500/40" />
                            </div>
                            <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">qmee_core.js</div>
                        </div>
                        <pre className="p-10 text-left font-mono text-sm md:text-base text-blue-300 overflow-x-auto leading-relaxed">
                            <code>{codeSnippet}</code>
                        </pre>
                        
                        {/* Copy Button */}
                        <button 
                            onClick={handleCopy} 
                            className="absolute top-16 right-6 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all active:scale-90"
                        >
                            <AnimatePresence mode="wait">
                                {copied ? (
                                    <motion.div key="c" initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-green-400 text-xs font-bold flex items-center gap-2">
                                        <Check size={18} /> Copied
                                    </motion.div>
                                ) : (
                                    <motion.div key="k" initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-gray-400 text-xs font-bold flex items-center gap-2">
                                        <Copy size={18} /> Copy
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </motion.div>

                    {/* Action Buttons with Micro-interactions */}
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-4">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full md:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-600/20"
                        >
                            <Zap size={18} /> Deploy Logic
                        </motion.button>
                        
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full md:w-auto px-10 py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl font-bold flex items-center justify-center gap-3 backdrop-blur-md transition-all"
                        >
                            <Share2 size={18} /> Get Link
                        </motion.button>
                    </div>

                    <p className="text-gray-600 text-[10px] tracking-[0.3em] uppercase pt-10">
                        Designed by Sivalakshmi Palagiri • 2026
                    </p>
                </motion.div>
            </main>
        </div>
    );
};

export default SharePage;