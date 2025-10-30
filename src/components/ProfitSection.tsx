import { TrendingUp, DollarSign, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import FadeInUp from "./animations/FadeInUp";
import StaggeredChildren from "./animations/StaggeredChildren";
import StaggeredItem from "./animations/StaggeredItem";

const ProfitSection = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden px-4 sm:px-6 lg:px-8">
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
            radial-gradient(circle at 40% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 60% 80%, rgba(255, 255, 0, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 20% 60%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)
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
            Margem de Lucro que <motion.span 
              className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >Faz a Diferença</motion.span> Até 56% de margem de lucro
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto"
          >
            Além da rentabilidade excepcional, trabalhamos com tabela de preços, 
            com preços sugeridos, garantindo previsibilidade e competitividade para o seu negócio.
          </motion.p>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <StaggeredChildren className="space-y-10" staggerDelay={0.2}>
            <StaggeredItem>
              <motion.div 
                whileHover={{ scale: 1.03, y: -8 }}
                className="relative group"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-purple-400/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
                
                {/* Glassmorphism card */}
                <div className="relative bg-gradient-to-br from-yellow-400/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-3xl p-10 hover:bg-gradient-to-br hover:from-yellow-400/30 hover:to-purple-500/30 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-400/20 rounded-full blur-lg"></div>
                      <TrendingUp className="relative w-10 h-10 mr-4 text-white drop-shadow-lg" />
                    </motion.div>
                    <h3 className="text-2xl font-black text-white bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                      Principais produtos de maior giro
                    </h3>
                  </div>
                  <motion.div 
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                    className="text-6xl font-black mb-4 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent"
                    style={{
                      textShadow: '0 0 30px rgba(255, 255, 0, 0.5)'
                    }}
                  >
                    ATÉ 56%
                  </motion.div>
                  <div className="text-xl text-white/90 font-medium">de margem de lucro</div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-6 right-6 w-3 h-3 bg-yellow-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            </StaggeredItem>

            <StaggeredItem>
              <motion.div 
                whileHover={{ scale: 1.03, y: -8 }}
                className="relative group"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-400/20 to-slate-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
                
                {/* Glassmorphism card */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-400/20 to-slate-400/20 rounded-full blur-lg"></div>
                      <BarChart3 className="relative w-10 h-10 mr-4 text-gray-400 drop-shadow-lg" />
                    </motion.div>
                    <h3 className="text-2xl font-black text-white bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                      Concorrência
                    </h3>
                  </div>
                  <div className="text-5xl font-black mb-4 text-gray-400">~30%</div>
                  <div className="text-xl text-white/70 font-medium">margem média do mercado</div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-6 right-6 w-3 h-3 bg-gray-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 w-2 h-2 bg-slate-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            </StaggeredItem>
          </StaggeredChildren>

          <StaggeredChildren className="space-y-8" staggerDelay={0.15}>
            <StaggeredItem>
              <motion.div 
                whileHover={{ scale: 1.03, x: 10 }}
                className="relative group"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Glassmorphism card */}
                <div className="relative bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 backdrop-blur-sm border-l-4 border-yellow-400 p-8 rounded-r-2xl hover:bg-gradient-to-r hover:from-yellow-400/20 hover:to-yellow-500/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 rounded-full blur-lg"></div>
                      <DollarSign className="relative w-8 h-8 text-yellow-400 mr-3 drop-shadow-lg" />
                    </motion.div>
                    <h4 className="text-2xl font-black text-white bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                      80% Mais Rentabilidade
                    </h4>
                  </div>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Enquanto a concorrência oferece cerca de 30% de margem, 
                    a Kaskata entrega até <motion.strong 
                      whileHover={{ scale: 1.05 }}
                      className="text-yellow-400 font-black"
                    >80% a mais</motion.strong> de rentabilidade 
                    para o seu negócio.
                  </p>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            </StaggeredItem>

            <StaggeredItem>
              <motion.div 
                whileHover={{ scale: 1.03, x: 10 }}
                className="relative group"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Glassmorphism card */}
                <div className="relative bg-gradient-to-r from-purple-400/10 to-purple-500/10 backdrop-blur-sm border-l-4 border-purple-400 p-8 rounded-r-2xl hover:bg-gradient-to-r hover:from-purple-400/20 hover:to-purple-500/20 transition-all duration-300">
                  <h4 className="text-2xl font-black text-white mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    Preço Sugerido
                  </h4>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Trabalhamos com preços sugeridos e competitivos, oferecendo flexibilidade. 
                    Você terá uma base sólida para calcular sua margem de lucro.
                  </p>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            </StaggeredItem>

            <StaggeredItem>
              <motion.div 
                whileHover={{ scale: 1.03, x: 10 }}
                className="relative group"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Glassmorphism card */}
                <div className="relative bg-gradient-to-r from-blue-400/10 to-blue-500/10 backdrop-blur-sm border-l-4 border-blue-400 p-8 rounded-r-2xl hover:bg-gradient-to-r hover:from-blue-400/20 hover:to-blue-500/20 transition-all duration-300">
                  <h4 className="text-2xl font-black text-white mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    Competitividade Garantida
                  </h4>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Nossos preços são calculados para garantir que você seja 
                    competitivo no mercado e ainda tenha excelente rentabilidade.
                  </p>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            </StaggeredItem>
          </StaggeredChildren>
        </div>
      </div>
    </section>
  );
};

export default ProfitSection;