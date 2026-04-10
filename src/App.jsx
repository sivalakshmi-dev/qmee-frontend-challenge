import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Share2, Code2, Sparkles, Send, Zap, BrainCircuit, BotMessageSquare } from "lucide-react";

const App = () => {
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
    // ఇక్కడ bg-slate-950 వాడాను, ఇది కచ్చితంగా నలుపు రంగుని ఇస్తుంది
    <div className="min-h-screen bg-[#030712] text-white flex flex-col items-center justify-center p-6 font-sans overflow-hidden relative">

      {/* Background Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl space-y-12 text-center z-10"
      >
        {/* Header Section */}
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

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-gray-300 text-sm">
              <BrainCircuit className="text-blue-400" size={18} />
              <span>Model: QMee_v3_1</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-gray-300 text-sm">
              <BotMessageSquare className="text-purple-400" size={18} />
              <span>Type: Assistant</span>
            </div>
          </div>
        </div>

        {/* Code Parser Section */}
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
            <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">
              qmee_core.js
            </div>
          </div>

          <pre className="p-10 text-left font-mono text-sm md:text-base leading-relaxed overflow-x-auto text-blue-300">
            <code>{codeSnippet}</code>
          </pre>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="absolute top-16 right-6 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all active:scale-90"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2 text-green-400 text-xs font-bold">
                  <Check size={18} /> <span>Copied</span>
                </motion.div>
              ) : (
                <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2 text-gray-400 text-xs font-bold">
                  <Copy size={18} /> <span>Copy</span>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto px-10 py-4 bg-blue-600 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-blue-600/20"
          >
            <Zap size={18} /> <span>Deploy Logic</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto px-10 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold flex items-center justify-center gap-3 backdrop-blur-md"
          >
            <Share2 size={18} /> <span>Get Link</span>
          </motion.button>
        </div>

        <p className="text-gray-600 text-[10px] tracking-[0.3em] uppercase pt-10">
          Designed by Sivalakshmi Palagiri • 2026
        </p>
      </motion.div>
    </div>
  );
};

export default App;