import { Button } from "@/components/ui/button";
import kaskataFreezersMain from "@/assets/kaskata-freezers-main-optimized.png";
import { motion } from "framer-motion";
import FadeInLeft from "./animations/FadeInLeft";
import FadeInRight from "./animations/FadeInRight";
import ScaleIn from "./animations/ScaleIn";
import FloatingParticles from "./animations/FloatingParticles";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center luxury-gradient overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black/20"
      ></motion.div>
      
      {/* Floating particles effect */}
      <FloatingParticles count={25} />
      
      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
        <FadeInLeft className="text-center lg:text-left space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight"
          >
            Pronto para aumentar seus 
            <span className="text-kaskata-yellow"> lucros?</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed"
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="cta" size="lg" className="text-xl px-8 py-4 hover-lift animate-glow animate-shimmer">
              Solicitar Freezer Agora
            </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline-primary" size="lg" className="text-xl px-8 py-4 hover-lift animate-glow animate-shimmer">
              Falar no WhatsApp
            </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center lg:justify-start space-x-8 text-primary-foreground/80"
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
                whileHover={{ scale: 1.1 }}
                className="text-center hover-lift"
              >
                <motion.div 
                  className="text-2xl font-bold text-kaskata-yellow"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </FadeInLeft>
        
        <FadeInRight className="flex justify-center lg:justify-end">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.img 
              src={kaskataFreezersMain} 
              alt="Freezers Kaskata profissionais - imagem principal"
              className="w-full max-w-lg rounded-2xl luxury-shadow"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5
              }}
              transition={{ duration: 0.3 }}
              animate={{ 
                y: [0, -10, 0],
              }}
              style={{
                animation: "float 6s ease-in-out infinite"
              }}
            />
          </motion.div>
        </FadeInRight>
      </div>
    </section>
  );
};

export default HeroSection;