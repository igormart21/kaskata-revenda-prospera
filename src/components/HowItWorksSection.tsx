import { UserPlus, Search, Truck, Users, Package } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: UserPlus,
    title: "Faça seu Cadastro",
    description: "Cadastre-se em nosso site ou entre em contato pelo WhatsApp para iniciar sua parceria.",
    color: "bg-primary"
  },
  {
    icon: Search,
    title: "Análise do Perfil",
    description: "Analisamos o perfil do seu comércio e da região para definir o mix ideal de produtos.",
    color: "bg-secondary"
  },
  {
    icon: Truck,
    title: "Entrega do Freezer",
    description: "Entregamos seu freezer em comodato sem nenhum custo inicial para você.",
    color: "bg-kaskata-yellow text-foreground"
  },
  {
    icon: Users,
    title: "Visitas Quinzenais",
    description: "Nossos vendedores visitam a cada 15 dias para pedidos e suporte completo.",
    color: "bg-primary"
  },
  {
    icon: Package,
    title: "Entrega Rápida",
    description: "Nossa logística própria entrega os produtos em até 5 a 7 dias úteis após o pedido.",
    color: "bg-secondary"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="relative py-12 sm:py-16 lg:py-24 overflow-hidden px-4 sm:px-6 lg:px-8">
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
            radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 30%, rgba(255, 255, 0, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 50% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)
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
            Como <motion.span 
              className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >Funciona</motion.span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto"
          >
            Um processo simples e eficiente para você começar a lucrar mais 
            com produtos Kaskata no seu comércio.
          </motion.p>
        </div>

        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="flex justify-between items-start relative">
              {/* Modern timeline line */}
              <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-yellow-400 to-purple-500 rounded-full opacity-50"></div>
              
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="flex flex-col items-center relative z-10 flex-1"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <motion.div 
                      className="relative group"
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      {/* Icon glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-yellow-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Icon container */}
                      <div className={`relative w-20 h-20 ${step.color} rounded-full flex items-center justify-center shadow-2xl`}>
                        <Icon className="w-10 h-10 text-white drop-shadow-lg" />
                      </div>
                    </motion.div>
                    
                    {/* Step card */}
                    <motion.div 
                      className="relative group mt-8"
                      whileHover={{ scale: 1.03, y: -8 }}
                    >
                      {/* Card glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-yellow-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
                      
                      {/* Glassmorphism card */}
                      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 max-w-xs text-center">
                        <div className="text-3xl font-black bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent mb-4">
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-black text-white mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                          {step.title}
                        </h3>
                        <p className="text-white/80 text-sm leading-relaxed">
                          {step.description}
                        </p>
                        
                        {/* Decorative elements */}
                        <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.div 
                    className="relative group"
                    whileHover={{ scale: 1.1 }}
                  >
                    {/* Icon glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-yellow-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Icon container */}
                    <div className={`relative w-16 h-16 ${step.color} rounded-full flex items-center justify-center shadow-2xl flex-shrink-0`}>
                      <Icon className="w-8 h-8 text-white drop-shadow-lg" />
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="relative group flex-1"
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    {/* Card glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-yellow-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Glassmorphism card */}
                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                      <div className="text-2xl font-black bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent mb-3">
                        Passo {index + 1}
                      </div>
                      <h3 className="text-xl font-black text-white mb-3 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                        {step.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Decorative elements */}
                      <div className="absolute top-3 right-3 w-2 h-2 bg-yellow-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;