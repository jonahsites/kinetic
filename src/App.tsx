import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ChevronRight, Menu, MapPin, Phone, ArrowUpRight, MousePointer2, Plus, ArrowDown } from "lucide-react";
import Showcase from "./components/Showcase";
import Inventory from "./components/Inventory";
import { useState } from "react";

const navLinks = [
  { name: "01 COLLECTION", type: "page" },
  { name: "02 EXPERIENCE", href: "#experience" },
  { name: "03 IDENTITY", href: "#vibe" },
  { name: "04 CONTACT", href: "#contact" },
];

export default function App() {
  const [showInventory, setShowInventory] = useState(false);
  const { scrollYProgress } = useScroll();
  const rotateX = useTransform(scrollYProgress, [0, 0.1], [0, -10]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);

  return (
    <div className="relative bg-kinetic-white font-sans selection:bg-kinetic-accent selection:text-kinetic-black">
      <AnimatePresence>
        {showInventory && (
          <Inventory onClose={() => setShowInventory(false)} />
        )}
      </AnimatePresence>

      {/* Persistent Nav */}
      <nav className="fixed top-0 left-0 w-full z-[100] border-b-2 border-kinetic-black bg-kinetic-white flex items-center justify-between px-6 py-4 md:px-12">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-kinetic-black flex items-center justify-center">
            <span className="text-kinetic-accent font-display text-xl leading-none">K</span>
          </div>
          <span className="font-display text-2xl tracking-tighter leading-none pt-1">KINETIC</span>
        </div>
        
        <div className="hidden md:flex gap-12">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => link.type === "page" ? setShowInventory(true) : null}
              className="font-mono text-[10px] font-bold tracking-widest hover:text-kinetic-accent hover:bg-kinetic-black px-2 py-1 transition-all"
            >
              {link.href ? <a href={link.href}>{link.name}</a> : <span>{link.name}</span>}
            </button>
          ))}
        </div>

        <button className="bg-kinetic-black text-kinetic-white px-6 py-2 font-mono text-[10px] font-bold tracking-widest hover:bg-kinetic-accent hover:text-kinetic-black transition-colors">
          BOOK NOW
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col justify-between overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <h1 className="text-[30vw] opacity-[0.03] leading-none whitespace-nowrap">
            KINETIC-KINETIC-KINETIC
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end relative z-10">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs font-bold bg-kinetic-accent px-2 py-1">EST. 2026</span>
              <div className="h-[1px] w-20 bg-kinetic-black" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest">Houston / Texas</span>
            </div>
            <h1 className="text-[14vw] lg:text-[10vw] leading-[0.8] mb-12">
              BEYOND<br/>
              <span className="text-outline-brutal">LIMITS</span>
            </h1>
            <div className="max-w-md bg-kinetic-black text-kinetic-white p-8 mb-12 brutal-shadow">
              <p className="font-mono text-sm leading-relaxed uppercase">
                The absolute state of high-performance rental. We do not provide transportation. We provide adrenaline, engineered into carbon fiber and steel.
              </p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => setShowInventory(true)}
                className="group relative bg-kinetic-accent border-2 border-kinetic-black px-12 py-6 overflow-hidden"
              >
                <span className="relative z-10 font-display text-2xl group-hover:text-kinetic-white transition-colors uppercase">COLLECTION</span>
                <div className="absolute inset-0 bg-kinetic-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              <div className="flex flex-col justify-center gap-1 font-mono text-[8px] uppercase tracking-tighter opacity-50">
                <span>SCROLL to</span>
                <span className="font-bold">Accelerate</span>
                <ArrowDown size={12} className="animate-bounce" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-kinetic-black p-4 brutal-shadow group overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1200" 
                alt="Kinetic Drive"
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-20 left-10 lg:-left-20">
                <h2 className="text-[12vw] text-kinetic-accent leading-none -rotate-90 origin-left whitespace-nowrap">
                  RAW POWER
                </h2>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="bg-kinetic-black py-8 border-y-2 border-kinetic-black overflow-hidden relative z-10">
        <div className="flex marquee-scroll whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-20 items-center mx-10 text-kinetic-accent font-display text-[120px] leading-none uppercase">
              <span>Hyper</span>
              <span className="text-outline-brutal border-kinetic-accent" style={{ WebkitTextStroke: '1px #CBFF00' }}>Exotic</span>
              <span>Luxury</span>
              <Plus size={80} />
            </div>
          ))}
        </div>
      </div>

      {/* 3D Showcase Section Header */}
      <section id="experience" className="bg-kinetic-white pt-40 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20 border-b-2 border-kinetic-black pb-10">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold text-kinetic-accent bg-kinetic-black px-4 py-2 block w-fit mb-8 uppercase">01 SHOWROOM</span>
            <h2 className="text-8xl lg:text-[12vw] leading-none">VIRTUAL<br/>GARAGE</h2>
          </div>
          <div className="max-w-xs font-mono text-[10px] leading-relaxed uppercase opacity-60 pb-4">
            Interact with the machines. Every line, every curve, every horsepower is real. Select your weapon below.
          </div>
        </div>
      </section>

      {/* Showcase component */}
      <Showcase />

      {/* Identity Section */}
      <section id="vibe" className="relative bg-kinetic-black text-kinetic-white py-40 px-6 md:px-12 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
             <span className="font-mono text-xs font-bold text-kinetic-black bg-kinetic-accent px-4 py-2 block w-fit mb-8 uppercase">02 IDENTITY</span>
             <h2 className="text-8xl lg:text-[10vw] leading-[0.8] mb-12 uppercase italic">Pure<br/>Kinetic<br/>State</h2>
             <p className="font-mono text-sm leading-loose uppercase opacity-60 mb-12">
                We believe that the road is a canvas and the vehicle is your heartbeat. KINETIC is not a rental agency—it's an initiation into the hyper-reality of high-speed engineering.
             </p>
             <div className="grid grid-cols-2 gap-4">
                <div className="border border-kinetic-white/20 p-8 hover:bg-kinetic-accent hover:text-kinetic-black transition-colors">
                   <h3 className="text-4xl mb-2">0-60</h3>
                   <span className="font-mono text-[10px]">IN SUB 3 SECS</span>
                </div>
                <div className="border border-kinetic-white/20 p-8 hover:bg-kinetic-accent hover:text-kinetic-black transition-colors">
                   <h3 className="text-4xl mb-2">24/7</h3>
                   <span className="font-mono text-[10px]">COMMAND CENTER</span>
                </div>
             </div>
          </div>
          <div className="relative">
             <div className="aspect-square bg-kinetic-white p-2 rotate-3 group overflow-hidden">
                <img 
                   src="https://static.wixstatic.com/media/dfb3c4_b13bf17accfb447ea85569809055bc07~mv2.jpg/v1/fill/w_1470,h_1290,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/dfb3c4_b13bf17accfb447ea85569809055bc07~mv2.jpg" 
                   alt="Interior" 
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale"
                   referrerPolicy="no-referrer"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-kinetic-white py-20 px-6 md:px-12 border-t-4 border-kinetic-black">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20">
          <div>
            <h2 className="text-6xl mb-8">INITIATE<br/>DRIVE</h2>
            <div className="flex flex-col gap-4 font-mono text-xs font-bold uppercase underline">
               <a href="tel:1234567890">+1 (832) KINETIC</a>
               <a href="mailto:drive@kinetic.com">DRIVE@KINETIC.HOU</a>
            </div>
          </div>
          <div className="w-full md:w-[400px]">
             <div className="border-2 border-kinetic-black p-8">
                <h3 className="text-2xl mb-8">DISPATCH UPDATES</h3>
                <div className="flex items-center gap-0 border-b-2 border-kinetic-black pb-2">
                   <input type="email" placeholder="EMAIL@KINETIC" className="bg-transparent font-mono text-xs w-full focus:outline-none" />
                   <ArrowUpRight size={20} />
                </div>
             </div>
          </div>
        </div>
        <div className="mt-40 pt-10 border-t-2 border-kinetic-black flex flex-col md:flex-row justify-between gap-10 font-mono text-[10px] font-bold uppercase opacity-30">
           <span>©2026 KINETIC DRIVE SYSTEM</span>
           <div className="flex gap-10">
              <span>HOUSTON HQ</span>
              <span>PRIVACY.LOG</span>
              <span>TERMS.SYS</span>
           </div>
        </div>
      </footer>
    </div>
  );
}
