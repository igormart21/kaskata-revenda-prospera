import { TrendingUp, DollarSign, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import FadeInUp from "./animations/FadeInUp";
import StaggeredChildren from "./animations/StaggeredChildren";
import StaggeredItem from "./animations/StaggeredItem";

const ProfitSection = () => {
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
            Margem de Lucro que <span className="text-primary">Faz a Diferença</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            Além da rentabilidade excepcional, trabalhamos com preço tabelado e justo, 
            garantindo previsibilidade e competitividade para o seu negócio.
          </motion.p>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <StaggeredChildren className="space-y-8" staggerDelay={0.2}>
            <StaggeredItem>
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-primary p-8 rounded-2xl text-primary-foreground luxury-shadow hover-lift"
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <TrendingUp className="w-8 h-8 mr-3" />
                  </motion.div>
                  <h3 className="text-2xl font-bold">Kaskata - Linha Batidão</h3>
                </div>
                <motion.div 
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                  className="text-5xl font-bold mb-2 animate-glow"
                >
                  ATÉ 56%
                </motion.div>
                <div className="text-lg opacity-90">de margem de lucro</div>
              </motion.div>
            </StaggeredItem>

            <StaggeredItem>
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-card border rounded-2xl p-8 luxury-shadow hover-lift"
              >
                <div className="flex items-center mb-4">
                  <BarChart3 className="w-8 h-8 mr-3 text-muted-foreground" />
                  <h3 className="text-2xl font-bold text-foreground">Concorrência</h3>
                </div>
                <div className="text-4xl font-bold mb-2 text-muted-foreground">~30%</div>
                <div className="text-lg text-muted-foreground">margem média do mercado</div>
              </motion.div>
            </StaggeredItem>
          </StaggeredChildren>

          <StaggeredChildren className="space-y-6" staggerDelay={0.15}>
            <StaggeredItem>
              <motion.div 
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-kaskata-yellow/10 border-l-4 border-kaskata-yellow p-6 rounded-r-xl hover-lift"
              >
                <div className="flex items-center mb-3">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <DollarSign className="w-6 h-6 text-kaskata-yellow mr-2" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-foreground">80% Mais Rentabilidade</h4>
                </div>
                <p className="text-muted-foreground">
                  Enquanto a concorrência oferece cerca de 30% de margem, 
                  a Kaskata entrega até <motion.strong 
                    whileHover={{ scale: 1.05 }}
                    className="text-kaskata-yellow"
                  >80% a mais</motion.strong> de rentabilidade 
                  para o seu negócio.
                </p>
              </motion.div>
            </StaggeredItem>

            <StaggeredItem>
              <motion.div 
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-xl hover-lift"
              >
                <h4 className="text-xl font-bold text-foreground mb-3">Preço Tabelado</h4>
                <p className="text-muted-foreground">
                  Trabalhamos com preços fixos e justos, sem surpresas. 
                  Você sempre saberá exatamente qual será sua margem de lucro.
                </p>
              </motion.div>
            </StaggeredItem>

            <StaggeredItem>
              <motion.div 
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl hover-lift"
              >
                <h4 className="text-xl font-bold text-foreground mb-3">Competitividade Garantida</h4>
                <p className="text-muted-foreground">
                  Nossos preços são calculados para garantir que você seja 
                  competitivo no mercado e ainda tenha excelente rentabilidade.
                </p>
              </motion.div>
            </StaggeredItem>
          </StaggeredChildren>
        </div>
      </div>
    </section>
  );
};

export default ProfitSection;