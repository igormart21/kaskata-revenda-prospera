import { Button } from "@/components/ui/button";
import kaskataFreezersMain from "@/assets/WhatsApp Image 2025-10-28 at 13.27.16.jpeg";
import { motion } from "framer-motion";
import FadeInLeft from "./animations/FadeInLeft";
import FadeInRight from "./animations/FadeInRight";
import ScaleIn from "./animations/ScaleIn";
import FloatingParticles from "./animations/FloatingParticles";

const HeroSection = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('cadastro');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Modern gradient background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-700/50 via-transparent to-yellow-400/20"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-purple-600/30 to-purple-900"></div>
      
      {/* Animated mesh gradient overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 0, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.2) 0%, transparent 50%)
          `
        }}
      ></motion.div>
      
      {/* Glassmorphism overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-white/[0.02]"
      ></motion.div>
      
      {/* Enhanced floating particles */}
      <FloatingParticles count={25} />
      
      {/* Animated geometric shapes - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1, rotate: 360 }}
        transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "linear" }}
        className="hidden lg:block absolute top-20 left-20 w-32 h-32 border border-yellow-400/20 rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1, rotate: -360 }}
        transition={{ duration: 2, delay: 0.7, repeat: Infinity, ease: "linear" }}
        className="hidden lg:block absolute bottom-20 right-20 w-24 h-24 border border-purple-400/20 rounded-lg"
      />
      
      {/* Main Content Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl font-black text-white leading-tight text-center"
              style={{
                textShadow: '0 0 20px rgba(255, 255, 0, 0.3)'
              }}
            >
              Pronto para aumentar seus 
              <motion.span 
                className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mt-2"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 3, repeat: Infinity }}
              > lucros?</motion.span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg text-white/90 leading-relaxed text-center px-2"
            >
              Junte-se aos mais de <strong className="text-yellow-400">2.000 comerciantes</strong> que já escolheram a Kaskata.
            </motion.p>
            
            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col gap-3 px-4"
            >
              <Button 
                onClick={scrollToForm} 
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-purple-900 font-bold py-4 text-lg shadow-2xl"
              >
                Solicitar Freezer Agora
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-2 border-yellow-400/80 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400 font-bold py-4 text-lg bg-white/5"
              >
                Falar no WhatsApp
              </Button>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-3 px-4"
            >
              {[
                { number: "30", label: "Anos" },
                { number: "2.000+", label: "Clientes" },
                { number: "56%", label: "Lucro" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center">
                  <div className="text-lg font-black text-yellow-400">{stat.number}</div>
                  <div className="text-xs text-white/80">{stat.label}</div>
                </div>
              ))}
            </motion.div>
            
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex justify-center px-4"
            >
              <img 
                src={kaskataFreezersMain} 
                alt="Freezers Kaskata profissionais"
                fetchPriority="high"
                decoding="async"
                className="w-full max-w-sm rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
        <FadeInLeft className="text-center lg:text-left space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl xl:text-6xl font-black text-white leading-tight tracking-tight"
                style={{
                  textShadow: '0 0 30px rgba(255, 255, 0, 0.3), 0 0 60px rgba(255, 255, 0, 0.1)'
                }}
          >
            Pronto para aumentar seus 
                <motion.span 
                  className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                > lucros?</motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl xl:text-2xl text-white/90 leading-relaxed"
          >
                Junte-se aos mais de <strong className="text-yellow-400">2.000 comerciantes</strong> que já escolheram a Kaskata.
            Receba um freezer consignado e abasteça seu ponto de venda com produtos de alta aceitação.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
                <Button 
                  size="lg" 
                  onClick={scrollToForm} 
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-purple-900 font-bold px-8 py-4 text-xl shadow-2xl"
                >
              Solicitar Freezer Agora
            </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-yellow-400/80 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400 font-bold px-8 py-4 text-xl bg-white/5"
                >
              Falar no WhatsApp
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
                className="flex items-center justify-center lg:justify-start space-x-8 text-white/80"
          >
            {[
              { number: "30", label: "Anos no mercado" },
              { number: "2.000+", label: "Clientes ativos" },
              { number: "56%", label: "Margem de lucro" }
            ].map((stat, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                    <div className="text-3xl font-black text-yellow-400">{stat.number}</div>
                    <div className="text-sm text-white/80 font-medium mt-2">{stat.label}</div>
                  </div>
            ))}
          </motion.div>
        </FadeInLeft>
        
        <FadeInRight className="flex justify-center lg:justify-end">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
                className="relative group"
          >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-400/20 rounded-3xl blur-xl scale-110 opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/20"></div>
            <motion.img 
              src={kaskataFreezersMain} 
              alt="Freezers Kaskata profissionais - imagem principal"
              loading="eager" // Carregamento prioritário para imagem principal
              fetchPriority="high"
              decoding="async"
              className="relative w-full max-w-lg rounded-3xl shadow-2xl z-10"
              whileHover={{ 
                scale: 1.02, // Reduzido de 1.05 para 1.02
              }}
              transition={{ duration: 0.2 }} // Reduzido de 0.3 para 0.2
              style={{
                willChange: 'transform', // Otimização de performance
              }}
            />
          </motion.div>
        </FadeInRight>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;