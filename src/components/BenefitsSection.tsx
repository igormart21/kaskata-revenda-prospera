import { Gift, Palette, TrendingUp, Clock, Truck, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const benefits = [
  {
    icon: Gift,
    title: "Freezer Gratuito",
    description: "Receba um freezer profissional em comodato, sem custo inicial.",
    highlight: "Sem compromisso"
  },
  {
    icon: Palette,
    title: "Mix Sob Medida",
    description: "Produtos selecionados especificamente para o seu público.",
    highlight: "Personalizado"
  },
  {
    icon: TrendingUp,
    title: "Margem Excepcional",
    description: "Até 56% de lucro, muito acima da média do mercado.",
    highlight: "Até 56%"
  },
  {
    icon: Clock,
    title: "Visitas Regulares",
    description: "Vendedores especializados a cada 15 dias para suporte total.",
    highlight: "Quinzenal"
  },
  {
    icon: Truck,
    title: "Logística Própria",
    description: "Entrega rápida e confiável em até 7 dias úteis.",
    highlight: "5-7 dias"
  },
  {
    icon: Award,
    title: "Tradição e Confiança",
    description: "Quase 30 anos de experiência e mais de 2.000 clientes ativos.",
    highlight: "Desde 1996"
  }
];

const BenefitsSection = () => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, delay: number, duration: number}>>([]);

  const scrollToForm = () => {
    const formElement = document.getElementById('cadastro');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 4,
        delay: Math.random() * 2,
        duration: Math.random() * 3 + 2,
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <section id="vantagens" className="relative py-24 overflow-hidden">
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
            radial-gradient(circle at 20% 30%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 255, 0, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)
          `
        }}
      ></motion.div>
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 backdrop-blur-[1px] bg-white/[0.01]"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-20">
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
            Por que escolher a <motion.span 
              className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >Kaskata</motion.span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto"
          >
            Conheça todos os benefícios exclusivos que fazem da Kaskata 
            a melhor escolha para o seu negócio.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -8 }}
                className="relative group"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-yellow-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
                
                {/* Glassmorphism card */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between mb-8">
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-yellow-400/20 rounded-full blur-lg"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-r from-purple-500 to-yellow-500 rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white drop-shadow-lg" />
                      </div>
                    </motion.div>
                    <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 text-yellow-400 px-4 py-2 rounded-full text-sm font-bold">
                      {benefit.highlight}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-black text-white mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-white/80 leading-relaxed text-lg">
                    {benefit.description}
                  </p>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-6 right-6 w-3 h-3 bg-yellow-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="mt-20 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Enhanced floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute rounded-full bg-yellow-400"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  width: `${particle.size + 3}px`,
                  height: `${particle.size + 3}px`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scale: [0, 1.2, 0],
                  y: [0, -100, -200],
                  x: [0, Math.random() * 30 - 15, Math.random() * 60 - 30],
                }}
                transition={{
                  duration: particle.duration,
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
          
          {/* Modern glassmorphism CTA */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-yellow-400/30 rounded-3xl blur-2xl scale-110"></div>
            
            {/* Glassmorphism container */}
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-16">
              <motion.h3 
                className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
                style={{
                  textShadow: '0 0 30px rgba(255, 255, 0, 0.3), 0 0 60px rgba(255, 255, 0, 0.1)'
                }}
              >
                Pronto para aumentar seus lucros?
              </motion.h3>
              <motion.p 
                className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Junte-se aos mais de 2.000 comerciantes que já escolheram a Kaskata.
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button 
                  onClick={scrollToForm} 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-purple-900 px-10 py-5 rounded-xl font-black text-xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300">
                    Solicitar Freezer Agora
                  </div>
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative border-2 border-yellow-400/80 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400 px-10 py-5 rounded-xl font-black text-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300">
                    Falar no WhatsApp
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;