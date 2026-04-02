/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MessageCircle, Globe, Heart, Stethoscope, Activity, Syringe, Pill, Plus, TestTube } from "lucide-react";
import logoImg from "../imagens/Logo cmb sem fundo.png";

export default function App() {
  return (
    <div className="min-h-[100dvh] bg-gradient-to-br from-slate-50 via-slate-50 to-blue-50/50 flex flex-col items-center justify-between px-5 py-10 sm:p-8 font-sans relative overflow-hidden">
      
      {/* Background Texture Elements - Medical Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] flex flex-wrap justify-center content-start gap-6 sm:gap-10 p-4 overflow-hidden z-0 w-full h-[120vh] -top-10">
        {Array.from({ length: 80 }).map((_, i) => {
          const icons = [Stethoscope, Heart, Syringe, Activity, Pill, Plus, TestTube];
          const Icon = icons[i % icons.length];
          const rotate = [0, 45, 90, -45, 15, -15, 180, 75, -75, 120][i % 10];
          const size = [32, 40, 48, 56, 36, 64][i % 6];
          const mt = i % 2 === 0 ? 'mt-4' : '-mt-4';
          const ml = i % 3 === 0 ? 'ml-6' : '-ml-2';
          
          return (
            <div key={i} style={{ transform: `rotate(${rotate}deg)` }} className={`text-[#E30613] ${mt} ${ml}`}>
              <Icon size={size} strokeWidth={1.5} />
            </div>
          );
        })}
      </div>

      {/* Main Content Container - Perfect width for modern smartphones */}
      <div className="w-full max-w-[400px] flex flex-col items-center z-10 flex-grow justify-center">
        
        {/* Header Section */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-6 sm:mb-8 w-full flex flex-col items-center"
        >
          {/* Logo container with negative margins to kill the image's internal whitespace */}
          <div className="flex justify-center mb-2 w-full px-4 relative z-0">
            <img 
              src={logoImg} 
              alt="Logo CMB Centro Médico da Bahia" 
              className="w-56 sm:w-64 max-w-full h-auto drop-shadow-xl -my-12 sm:-my-14 scale-110 pointer-events-none" 
            />
          </div>
          
          <p className="text-slate-500 text-[14px] sm:text-[15px] font-medium leading-relaxed px-6 max-w-[340px] relative z-10">
            Cuidando da sua saúde com excelência, tecnologia e humanização.
          </p>
        </motion.header>

        {/* Action Buttons Section */}
        <div className="w-full space-y-4 sm:space-y-5 px-2">
          
          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/557498162793"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            className="group relative flex items-center w-full bg-[#22C55E] text-white p-4 sm:p-5 rounded-2xl shadow-[0_8px_20px_rgb(34,197,94,0.25)] overflow-hidden transition-all border border-green-400/50"
          >
            {/* Shine Animation */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
            
            <div className="bg-white/20 p-3 sm:p-3.5 rounded-xl mr-4 backdrop-blur-sm shadow-inner">
              <MessageCircle size={26} className="fill-white drop-shadow-md" />
            </div>
            
            <div className="flex flex-col text-left flex-grow">
              <span className="text-[17px] sm:text-[18px] font-bold leading-tight mb-0.5 tracking-tight text-white drop-shadow-sm">Falar com a Clínica</span>
              <span className="text-[12px] sm:text-[13px] text-green-50 font-medium">Agende sua consulta agora</span>
            </div>
          </motion.a>

          {/* Official Site Button */}
          <motion.a
            href="https://www.centromedicodabahia.com.br"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center w-full bg-white text-[#10317B] p-4 sm:p-5 rounded-2xl shadow-[0_8px_20px_rgb(16,49,123,0.08)] border border-slate-100 hover:border-blue-100 transition-all"
          >
            <div className="bg-blue-50/80 p-3 sm:p-3.5 rounded-xl mr-4 text-[#10317B]">
              <Globe size={26} strokeWidth={2.5} />
            </div>
            
            <div className="flex flex-col text-left flex-grow">
              <span className="text-[17px] sm:text-[18px] font-bold leading-tight mb-0.5 tracking-tight text-[#10317B]">Acessar Site Oficial</span>
              <span className="text-[12px] sm:text-[13px] text-slate-500 font-medium">Conheça nossos serviços</span>
            </div>
          </motion.a>

        </div>
      </div>

      {/* Footer Section - Stuck properly at the bottom */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="w-full max-w-md text-center mt-10 z-10"
      >
        <p className="text-slate-400 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-semibold">
          Atendimento humanizado. Tecnologia e cuidado.
        </p>
      </motion.footer>

      {/* Utilities */}
      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
