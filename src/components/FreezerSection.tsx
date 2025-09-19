import { motion } from "framer-motion";
import kaskataFreezerDisplay from "@/assets/kaskata-freezer-display.jpeg";
import FadeInUp from "./animations/FadeInUp";
import FadeInLeft from "./animations/FadeInLeft";
import FadeInRight from "./animations/FadeInRight";

const FreezerSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <FadeInUp className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Freezer <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-primary"
            >Profissional</motion.span> Gratuito
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            Receba um freezer profissional em consignado, sem custo inicial. 
            Equipamento moderno e eficiente para maximizar suas vendas.
          </motion.p>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeInLeft className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-primary p-8 rounded-2xl text-primary-foreground luxury-shadow hover-lift"
            >
              <h3 className="text-2xl font-bold mb-4">✅ Consignado Gratuito</h3>
              <p className="text-lg opacity-90 mb-4">
                Não pague nada pelo freezer. Você só investe nos produtos que vende.
              </p>
              <div className="text-3xl font-bold text-kaskata-yellow">0% de entrada</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-card border rounded-2xl p-8 luxury-shadow hover-lift"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">🔧 Manutenção Inclusa</h3>
              <p className="text-muted-foreground text-lg">
                Suporte técnico completo e manutenção gratuita durante todo o período de consignação.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-xl hover-lift"
            >
              <h3 className="text-xl font-bold text-foreground mb-3">📦 Instalação Gratuita</h3>
              <p className="text-muted-foreground">
                Nossa equipe instala o freezer no seu estabelecimento sem custo adicional.
              </p>
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
                src={kaskataFreezerDisplay} 
                alt="Freezer Kaskata profissional com display de produtos"
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
              
              {/* Badge de destaque */}
              <motion.div 
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 1.2, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute -top-4 -right-4 bg-kaskata-yellow text-foreground p-4 rounded-full luxury-shadow animate-bounce-gentle"
              >
                <div className="text-lg font-bold">GRÁTIS</div>
                <div className="text-sm">Consignado</div>
              </motion.div>
            </motion.div>
          </FadeInRight>
        </div>
      </div>
    </section>
  );
};

export default FreezerSection;
