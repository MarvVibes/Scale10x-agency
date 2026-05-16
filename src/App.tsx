import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { MagneticButton } from "./components/ui/magnetic-button";

export default function App() {
  return (
    <div className="min-h-screen bg-[#000000] text-white font-sans selection:bg-zinc-500/30 overflow-hidden relative">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-8 max-w-7xl mx-auto left-0 right-0">
        <div className="text-2xl font-bold flex items-center tracking-tight">
          <span className="text-zinc-400">Gen</span>
          <span>esis.</span>
        </div>
        
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-400">
          <li><a href="#" className="hover:text-white transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
          </a></li>
          <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
          <li><a href="#" className="hover:text-white transition-colors relative group">
            Solutions
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
          </a></li>
          <li><a href="#" className="hover:text-white transition-colors">About</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <MagneticButton variant="ghost" className="hidden sm:inline-flex px-5 py-2 text-sm text-zinc-300 hover:text-white">
            Request A Demo
          </MagneticButton>
          <MagneticButton variant="primary" glow className="px-5 py-2 text-sm shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            Get Started
          </MagneticButton>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center z-10">
        
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-screen overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            crossOrigin="anonymous"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://labs.google/fx/api/og-video/shared/7aaab73c-6b97-44aa-9898-f827858019df" type="video/mp4" />
          </video>
          {/* A gradient mask to fade the background into the black edges */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
        </div>

        {/* Glow/Halo Effect from Reference - Adjusted for new bg */}
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] max-w-[1600px] aspect-square pointer-events-none overflow-hidden flex items-center justify-center">
             <div className="w-[80%] h-[80%] rounded-full border-[60px] md:border-[120px] border-white/5 blur-[80px] md:blur-[120px]"></div>
             <div className="absolute w-[90%] h-[90%] rounded-full border-[80px] md:border-[150px] border-zinc-600/10 blur-[100px] md:blur-[180px]"></div>
             <div className="absolute w-[60%] h-[60%] bg-zinc-600/5 blur-[120px] rounded-full"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 max-w-4xl pt-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-600/30 bg-zinc-800/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-zinc-400">AI-Powered Web Design</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.05]">
            Designing the Future. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">Powered by AI.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            We build stunning, high-performance websites and digital experiences <br className="hidden md:block" /> by combining human creativity with the power of artificial intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton 
              variant="primary" 
              glow 
              className="w-full sm:w-auto px-7 py-3.5 shadow-[0_0_40px_rgba(255,255,255,0.05)] group"
            >
              Get a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            <MagneticButton 
              variant="secondary"
              className="w-full sm:w-auto px-7 py-3.5"
            >
              See Our Work
            </MagneticButton>
          </div>
          
          <div className="mt-12 flex items-center justify-center">
            <p className="text-sm text-zinc-500 font-medium tracking-wide">
              Built for modern startups, creators and ambitious businesses worldwide.
            </p>
          </div>
        </motion.div>
      </main>

      {/* Background Noise/Texture for Depth */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
}
