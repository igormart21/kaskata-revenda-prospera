import { Star, Heart, Zap, Users } from "lucide-react";
import displayFrente from "@/assets/display_SORVETES-55x90-frente-optimized.jpg";
import displayVerso from "@/assets/display_SORVETES-55x90-verso-optimized.jpg";
import { motion } from "framer-motion";
import FadeInUp from "./animations/FadeInUp";
import StaggeredChildren from "./animations/StaggeredChildren";
import StaggeredItem from "./animations/StaggeredItem";
const ProductVarietySection = () => {
  return <section className="py-20 bg-muted">
      <div className="container">
        <FadeInUp className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Nossos <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-primary"
            >Produtos</motion.span> Premium
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            Conheça nossa linha completa de sorvetes premium, desenvolvidos com ingredientes 
            selecionados para oferecer o melhor sabor e qualidade aos seus clientes.
          </motion.p>
        </FadeInUp>

        {/* Galeria de Produtos */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagem Frente */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <img 
              src={displayFrente} 
              alt="Display de Sorvetes - Frente" 
              className="w-full rounded-2xl shadow-elegant group-hover:shadow-glow transition-all duration-300 transform group-hover:scale-105" 
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute bottom-4 left-4 bg-primary/90 text-primary-foreground p-3 rounded-lg backdrop-blur-sm"
            >
              <h3 className="font-bold text-lg">Linha Premium</h3>
              <p className="text-sm opacity-90">Sorvetes cremosos</p>
            </motion.div>
          </motion.div>

          {/* Imagem Verso */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <img 
              src={displayVerso} 
              alt="Display de Sorvetes - Verso" 
              className="w-full rounded-2xl shadow-elegant group-hover:shadow-glow transition-all duration-300 transform group-hover:scale-105" 
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute bottom-4 left-4 bg-secondary/90 text-secondary-foreground p-3 rounded-lg backdrop-blur-sm"
            >
              <h3 className="font-bold text-lg">Variedade Completa</h3>
              <p className="text-sm opacity-90">Sabores especiais</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Características dos Produtos */}
        <StaggeredChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16" staggerDelay={0.2}>
          <StaggeredItem>
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-card rounded-2xl p-8 luxury-shadow hover-lift"
            >
              <div className="flex items-center mb-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Users className="w-8 h-8 text-primary mr-3" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground">Para Todos os Públicos</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                Desde produtos populares com excelente custo-benefício até opções premium 
                que atendem paladares mais exigentes.
              </p>
            </motion.div>
          </StaggeredItem>

          <StaggeredItem>
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-card rounded-2xl p-8 luxury-shadow hover-lift"
            >
              <div className="flex items-center mb-4">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Star className="w-8 h-8 text-kaskata-yellow mr-3" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground">Linha Premium</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                Sorvetes cremosos com maior quantidade de sólidos, oferecendo 
                textura diferenciada e mais sabor para seus clientes.
              </p>
            </motion.div>
          </StaggeredItem>

          <StaggeredItem>
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-card rounded-2xl p-8 luxury-shadow hover-lift"
            >
              <div className="flex items-center mb-4">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Heart className="w-8 h-8 text-destructive mr-3" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground">Opções Especiais</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                Produtos zero lactose e zero açúcar para atender clientes com 
                necessidades específicas, expandindo seu público-alvo.
              </p>
            </motion.div>
          </StaggeredItem>
        </StaggeredChildren>
      </div>
    </section>;
};
export default ProductVarietySection;