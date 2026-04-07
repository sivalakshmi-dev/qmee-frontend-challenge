import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [isChatting, setIsChatting] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    if (!isChatting) setIsChatting(true);

    const userMessage = { role: "user", text: input, time: "a few seconds ago" };
    setMessages([...messages, userMessage]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [...prev, {
        role: "ai",
        text: "I am QMee, your assistant. How can I help you today?",
        time: "just now"
      }]);
    }, 1000);
  };

  const resetToHome = () => {
    setIsStarted(false);
    setIsChatting(false);
    setMessages([]);
  };

  return (
    <div className="min-h-screen bg-[#fcfcfd] text-slate-900 font-sans flex flex-col items-center">

      {/* Navbar */}
      {isChatting && (
        <header className="w-full max-w-5xl flex justify-between items-center px-8 py-5 sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-50">
          <div className="flex gap-4 items-center">
            <button onClick={resetToHome} className="text-gray-400 hover:text-blue-600 transition-all transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            </button>
            <button onClick={() => setMessages([])} className="text-gray-400 hover:text-blue-600 transition-all transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
            </button>
            <a href="https://linkedin.com/in/sivalakshmi-palagiri" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-600 transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
          </div>
          <div className="group cursor-default text-3xl font-black tracking-tighter">
            <span className="text-blue-600">Q</span>
            <span className="text-blue-600 group-hover:text-pink-500 transition-colors">Mee</span>
          </div>
        </header>
      )}

      <main className={`flex-1 w-full max-w-3xl flex flex-col items-center ${isChatting ? 'justify-start pt-10' : 'justify-center'} p-6`}>

        {!isChatting && (
          <div className="flex flex-col items-center text-center w-full space-y-8">

            <div className="group cursor-default text-7xl font-black tracking-tighter transition-all">
              <span className="text-blue-600">Q</span>
              <span className="text-blue-600 group-hover:text-pink-500 transition-colors duration-300">Mee</span>
            </div>

            <div className="w-36 h-36 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>

            <div className="relative group inline-block">
              <a href="https://linkedin.com/in/sivalakshmi-palagiri" target="_blank" rel="noreferrer" className="bg-white p-2.5 rounded-xl shadow-md hover:bg-blue-50 text-blue-600 transition-all border border-gray-100 flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50 pointer-events-none">
                <div className="bg-slate-800 text-white text-[11px] px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap font-semibold tracking-wide">
                  Know about developer
                </div>
              </div>
            </div>

            {!isStarted ? (
              <div className="flex flex-col items-center pt-6 w-full max-w-lg">
                <button onClick={() => setIsStarted(true)} className="px-12 py-3.5 bg-white border border-gray-200 rounded-2xl font-bold shadow-sm hover:shadow-md transition-all active:scale-95 text-gray-700 flex items-center gap-3 mb-12">
                  <span className="text-xl">→</span> Let's go
                </button>
                <p className="text-sm md:text-base text-gray-400 font-medium text-center">
                  QMee can generate inaccurate responses. Verify responses through independent sources.
                </p>
              </div>
            ) : (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="pt-4 !mb-40 block">
                <h2 className="text-5xl font-bold text-slate-800 mb-3 tracking-tight">Welcome to QMee</h2>
                <p className="text-gray-500 text-lg font-medium italic">Ask me anything, and I'm here to help you.</p>
              </motion.div>
            )}
          </div>
        )}

        {/* Chat History */}
        {isChatting && (
          <div className="w-full space-y-8 pt-4 pb-40 overflow-y-auto scrollbar-hide">
            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex flex-col ${msg.role === 'user' ? 'items-start' : 'items-end'}`}>
                  <span className="text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-widest">{msg.time}</span>
                  <div className={`p-4 px-6 rounded-2xl max-w-[85%] shadow-sm ${msg.role === 'user' ? 'bg-white border border-gray-100 text-slate-700 rounded-tl-none' : 'bg-blue-600 text-white rounded-tr-none'}`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            <div ref={chatEndRef} />
          </div>
        )}

        {/* Search Bar - Alignment Fixed */}
        {(isStarted || isChatting) && (
          <div className="fixed bottom-0 w-full max-w-3xl p-6 bg-gradient-to-t from-[#fcfcfd] via-[#fcfcfd] to-transparent z-40">
            <form onSubmit={handleSend} className="relative flex items-center">
              <input
                type="text" value={input} onChange={(e) => setInput(e.target.value)}
                placeholder="What's on your mind?"
                className="w-full p-5 pr-16 bg-white border border-gray-200 rounded-[2rem] shadow-xl outline-none focus:border-blue-300 transition-all text-slate-700 text-lg"
                autoFocus
              />
              <button type="submit" className="absolute right-3.5 w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center hover:bg-blue-700 transition-all active:scale-90 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
