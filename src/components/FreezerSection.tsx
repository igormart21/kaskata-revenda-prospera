import { motion } from "framer-motion";
import kaskataFreezerDisplay from "@/assets/kaskata-freezer-display.jpeg";
import FadeInUp from "./animations/FadeInUp";
import FadeInLeft from "./animations/FadeInLeft";
import FadeInRight from "./animations/FadeInRight";

const FreezerSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-800/30 via-transparent to-indigo-800/30"></div>
      
      {/* Animated mesh gradient overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at 30% 40%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(255, 255, 0, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 50% 20%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)
          `
        }}
      ></motion.div>
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 backdrop-blur-[1px] bg-white/[0.01]"></div>
      
      <div className="container relative z-10">
        <FadeInUp className="text-center max-w-5xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight"
            style={{
              textShadow: '0 0 30px rgba(255, 255, 0, 0.3), 0 0 60px rgba(255, 255, 0, 0.1)'
            }}
          >
            Freezer <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
            >Profissional</motion.span> Gratuito
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto"
          >
            Receba um freezer profissional em comodato, sem custo inicial. 
            Equipamento moderno e eficiente para maximizar suas vendas.
          </motion.p>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeInLeft className="space-y-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-purple-400/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
              
              {/* Glassmorphism card */}
              <div className="relative bg-gradient-to-br from-yellow-400/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-3xl p-10 hover:bg-gradient-to-br hover:from-yellow-400/30 hover:to-purple-500/30 transition-all duration-300">
                <h3 className="text-3xl font-black text-white mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  ✅ Comodato Gratuito
                </h3>
                <p className="text-xl text-white/90 mb-6 leading-relaxed">
                  Não pague nada pelo freezer. Você só investe nos produtos que vende.
                </p>
                <div className="text-4xl font-black bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent"
                     style={{
                       textShadow: '0 0 20px rgba(255, 255, 0, 0.5)'
                     }}>
                  Sem compromisso
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-3 h-3 bg-yellow-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
              
              {/* Glassmorphism card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-3xl font-black text-white mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  🔧 Manutenção Inclusa
                </h3>
                <p className="text-white/80 text-xl leading-relaxed">
                  Suporte técnico completo e manutenção gratuita do equipamento durante todo período de comodato.
                </p>
                
                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-3 h-3 bg-blue-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.03, x: 10 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Glassmorphism card */}
              <div className="relative bg-gradient-to-r from-green-400/10 to-green-500/10 backdrop-blur-sm border-l-4 border-green-400 p-8 rounded-r-2xl hover:bg-gradient-to-r hover:from-green-400/20 hover:to-green-500/20 transition-all duration-300">
                <h3 className="text-2xl font-black text-white mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  📦 Instalação Gratuita
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Nossa equipe instala o freezer no seu estabelecimento sem custo adicional.
                </p>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-green-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          </FadeInLeft>

          <FadeInRight className="flex justify-center lg:justify-end">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group"
            >
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-400/20 rounded-3xl blur-2xl scale-110 opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              
              {/* Glassmorphism frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-sm border border-white/20"></div>
              
              <motion.img 
                src={kaskataFreezerDisplay} 
                alt="Freezer Kaskata profissional com display de produtos"
                className="relative w-full max-w-lg rounded-3xl shadow-2xl z-10"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5
                }}
                transition={{ duration: 0.3 }}
                animate={{ 
                  y: [0, -15, 0],
                }}
                style={{
                  animation: "float 8s ease-in-out infinite"
                }}
              />
              
              {/* Enhanced badge */}
              <motion.div 
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 1.2, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute top-4 left-4 z-20 relative group/badge"
              >
                {/* Badge glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full blur-lg opacity-75 group-hover/badge:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badge content */}
                <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 p-8 rounded-full shadow-2xl">
                  <div className="text-center">
                    <div className="text-2xl font-black leading-tight">GRÁTIS</div>
                    <div className="text-sm font-bold mt-1">Comodato</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating elements around image */}
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400/30 rounded-full blur-sm"
                animate={{ 
                  y: [0, -20, 0],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0 }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-400/30 rounded-full blur-sm"
                animate={{ 
                  y: [0, 20, 0],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
          </FadeInRight>
        </div>
      </div>
    </section>
  );
};

export default FreezerSection;
