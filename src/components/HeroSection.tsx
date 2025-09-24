import { Button } from "@/components/ui/button";
import kaskataFreezersMain from "@/assets/kaskata-freezers-main-optimized.png";
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
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
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
        className="absolute inset-0 backdrop-blur-[1px] bg-white/[0.02]"
      ></motion.div>
      
      {/* Enhanced floating particles */}
      <FloatingParticles count={35} />
      
      {/* Animated geometric shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-20 left-20 w-32 h-32 border border-yellow-400/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 0.7 }}
        className="absolute bottom-20 right-20 w-24 h-24 border border-purple-400/20 rounded-lg"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
        <FadeInLeft className="text-center lg:text-left space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight"
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
            className="text-xl md:text-2xl text-white/90 leading-relaxed"
          >
            Junte-se aos mais de <strong className="text-kaskata-yellow">2.000 comerciantes</strong> que já escolheram a Kaskata.
            Receba um freezer consignado e abasteça seu ponto de venda com produtos de alta aceitação.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Button 
                size="lg" 
                onClick={scrollToForm} 
                className="relative text-xl px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-purple-900 font-bold border-0 shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="relative z-10">Solicitar Freezer Agora</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <Button 
                variant="outline" 
                size="lg" 
                className="relative text-xl px-10 py-5 border-2 border-yellow-400/80 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400 font-bold backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <span className="relative z-10">Falar no WhatsApp</span>
              </Button>
            </motion.div>
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
              <motion.div 
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-purple-400/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <motion.div 
                    className="text-3xl font-black bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    style={{
                      textShadow: '0 0 20px rgba(255, 255, 0, 0.3)'
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-white/80 font-medium mt-2">{stat.label}</div>
                </div>
              </motion.div>
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
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-400/20 rounded-3xl blur-2xl scale-110 opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            
            {/* Glassmorphism frame */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-sm border border-white/20"></div>
            
            <motion.img 
              src={kaskataFreezersMain} 
              alt="Freezers Kaskata profissionais - imagem principal"
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
            
            {/* Floating elements around image */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400/30 rounded-full blur-sm"
              animate={{ 
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0 }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400/30 rounded-full blur-sm"
              animate={{ 
                y: [0, 20, 0],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </FadeInRight>
      </div>
    </section>
  );
};

export default HeroSection;