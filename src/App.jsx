import React, { useState } from "react";
import "./index.css";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="min-h-screen bg-[#fcfcfd] text-slate-900 font-sans overflow-x-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-5 backdrop-blur-xl bg-white/60 border-b border-gray-100">
        <div className="text-2xl font-black tracking-tighter text-purple-600 cursor-default group">
          Q<span className="transition-colors duration-300 group-hover:text-pink-500">Mee</span>
        </div>

        <div className="space-x-8 hidden md:flex font-medium text-gray-500">
          <a href="#" className="hover:text-purple-600 transition-colors">Home</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Features</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Contact</a>
        </div>
        <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition">
          Sign In
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-500"
          >
            Intelligence meets <br /> modern design.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Experience the next generation of AI-driven interfaces built with precision and speed.
          </motion.p>

          <div className="flex flex-col items-center gap-6">
            <motion.button
              onClick={() => setShowSearch(!showSearch)}
              className="px-8 py-4 bg-purple-600 text-white rounded-2xl font-semibold shadow-xl shadow-purple-200 hover:bg-purple-700 hover:scale-[1.02] transition-all active:scale-95"
            >
              {showSearch ? "Close Search" : "Get Started →"}
            </motion.button>

            {/* Animated Search Bar */}
            <AnimatePresence>
              {showSearch && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  className="w-full max-w-lg mt-4"
                >
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="Ask anything to QMee..."
                      className="w-full px-6 py-4 bg-white border-2 border-purple-100 rounded-2xl shadow-lg focus:outline-none focus:border-purple-500 transition-all text-lg"
                      autoFocus
                    />
                    <button className="absolute right-3 top-2 bottom-2 px-4 bg-purple-600 text-white rounded-xl text-sm font-bold hover:bg-purple-700 transition-colors">
                      Search
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-8 py-20">
        {[
          { title: "Fast Performance ⚡", desc: "Built for speed with sub-second response times.", delay: 0.1 },
          { title: "Modern Design 🎨", desc: "Aesthetic interfaces inspired by the best in tech.", delay: 0.2 },
          { title: "Responsive 📱", desc: "Flawless experience across all your modern devices.", delay: 0.3 }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: item.delay, duration: 0.6 }}
            className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">{item.title}</h3>
            <p className="text-gray-500 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      <footer className="py-12 border-t border-gray-100 text-center text-gray-400 text-sm">
        <p>© 2026 QMee. Crafted for the future.</p>
      </footer>
    </div>
  );
}

export default App;