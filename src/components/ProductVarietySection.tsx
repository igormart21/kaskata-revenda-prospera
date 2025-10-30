import { Star, Heart, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";
import FadeInUp from "./animations/FadeInUp";
import StaggeredChildren from "./animations/StaggeredChildren";
import StaggeredItem from "./animations/StaggeredItem";
import FloatingOrbs from "./animations/FloatingOrbs";

// Importando as imagens dos sorvetes
import sundaeImg from "@/assets/SUNDAE.png";
import queroMaisImg from "@/assets/QUERO_MAIS.png";
import kaparaoImg from "@/assets/KAPARAO.png";
import chiqueBomImg from "@/assets/CHIQUE_BOM.png";
import yessImg from "@/assets/YESS.png";
import gregoImg from "@/assets/GREGO.png";
import linhaZeroImg from "@/assets/LINHA_ZERO.png";
import acai160Img from "@/assets/ACAI_160ML.png";
import acai1LImg from "@/assets/ACAI_1L.png";
import dualImg from "@/assets/DUAL.png";
import umLitroImg from "@/assets/UM_LITRO.png";
import uniDuniTeImg from "@/assets/UNI_DUNI_TE.png";
import premiattaImg from "@/assets/PREMIATTA.png";
import geladitosImg from "@/assets/GELADITOS.png";
import bestSundaeImg from "@/assets/BEST_SUNDAE.png";
const ProductVarietySection = () => {
  // Array com os produtos e suas descrições
  const produtos = [
    {
      nome: "SUNDAE",
      imagem: sundaeImg,
      descricao: "Sorvete cremoso com cobertura especial, perfeito para quem busca sabor e qualidade premium."
    },
    {
      nome: "QUERO MAIS",
      imagem: queroMaisImg,
      descricao: "Sabor irresistível que faz você querer mais. Textura cremosa e sabor marcante."
    },
    {
      nome: "KAPARAÓ",
      imagem: kaparaoImg,
      descricao: "Sorvete com sabor único e diferenciado, desenvolvido para paladares exigentes."
    },
    {
      nome: "CHIQUE BOM",
      imagem: chiqueBomImg,
      descricao: "Elegância e sabor em uma combinação perfeita. Sorvete premium com ingredientes selecionados."
    },
    {
      nome: "YESS!!",
      imagem: yessImg,
      descricao: "Sabor explosivo que desperta sensações incríveis. Uma experiência única de sabor."
    },
    {
      nome: "GREGO",
      imagem: gregoImg,
      descricao: "Inspirado na tradição grega, sorvete cremoso com textura diferenciada e sabor autêntico."
    },
    {
      nome: "LINHA ZERO %",
      imagem: linhaZeroImg,
      descricao: "Linha especial zero açúcar e zero lactose, desenvolvida para clientes com restrições alimentares."
    },
    {
      nome: "AÇAÍ 160ML",
      imagem: acai160Img,
      descricao: "Açaí cremoso e nutritivo no formato ideal para consumo individual."
    },
    {
      nome: "AÇAÍ 1L",
      imagem: acai1LImg,
      descricao: "Açaí cremoso em embalagem familiar, perfeito para compartilhar momentos especiais."
    },
    {
      nome: "DUAL",
      imagem: dualImg,
      descricao: "Dois sabores em um só produto. Experiência dupla de sabor e textura."
    },
    {
      nome: "1 LITRO",
      imagem: umLitroImg,
      descricao: "Sorvete cremoso em embalagem familiar, ideal para toda a família."
    },
    {
      nome: "UNI-DUNI-TÊ",
      imagem: uniDuniTeImg,
      descricao: "Sorvete divertido com múltiplos sabores, perfeito para crianças e adultos."
    },
    {
      nome: "PREMIATTA",
      imagem: premiattaImg,
      descricao: "Linha premium com ingredientes selecionados e textura cremosíssima."
    },
    {
      nome: "GELADITOS",
      imagem: geladitosImg,
      descricao: "Pequenos sorvetes com grandes sabores. Perfeitos para lanches rápidos."
    },
    {
      nome: "BEST SUNDAE",
      imagem: bestSundaeImg,
      descricao: "O melhor sundae da linha, com coberturas especiais e ingredientes premium."
    }
  ];

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
            radial-gradient(circle at 30% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(255, 255, 0, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)
          `
        }}
      ></motion.div>
      
      {/* Floating orbs for depth */}
      <FloatingOrbs count={3} />
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 backdrop-blur-[1px] bg-white/[0.01]"></div>
      <div className="container relative z-10">
        <FadeInUp className="text-center max-w-5xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 leading-tight tracking-tight"
            style={{
              textShadow: '0 0 30px rgba(255, 255, 0, 0.3), 0 0 60px rgba(255, 255, 0, 0.1)'
            }}
          >
            Nossos <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
            >Produtos</motion.span>
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold mb-6"
          >
            <span className="text-white">Linha</span> <span className="text-yellow-400" style={{ textShadow: '0 0 20px rgba(255, 255, 0, 0.3)' }}>Sorvete</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto"
          >
            Conheça nossa linha completa de sorvetes premium, desenvolvidos com ingredientes 
            selecionados para oferecer o melhor sabor e qualidade aos seus clientes.
          </motion.p>
        </FadeInUp>

        {/* Galeria de Produtos */}
        <StaggeredChildren className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8" staggerDelay={0.1}>
          {produtos.map((produto, index) => (
            <StaggeredItem key={index}>
          <motion.div 
                whileHover={{ scale: 1.02, y: -2 }} // Reduzido movimento
                className="relative group cursor-pointer"
                transition={{ duration: 0.2 }} // Reduzido de 0.3 para 0.2
                style={{ willChange: 'transform' }} // Otimização de performance
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-yellow-400/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110"></div>
                
                {/* Glassmorphism card */}
                <div className="relative bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-200">
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img 
                      src={produto.imagem} 
                      alt={produto.nome}
                      loading="lazy" // Lazy loading para melhor performance
                      decoding="async"
                      className="w-full h-36 object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-yellow-400/20 flex items-center justify-center rounded-2xl"
                    >
          <motion.div 
                        animate={{ rotate: 180 }} // Reduzido de 360 para 180
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }} // Reduzido de 2 para 1
                      >
                        <Star className="w-10 h-10 text-yellow-400 drop-shadow-lg" />
            </motion.div>
          </motion.div>
        </div>
                  <h3 className="font-black text-base text-white mb-3 text-center bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    {produto.nome}
                  </h3>
                  <p className="text-sm text-white/70 text-center leading-relaxed">
                    {produto.descricao}
                  </p>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            </StaggeredItem>
          ))}
        </StaggeredChildren>

        {/* Características dos Produtos */}
        <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-12 sm:mt-16 lg:mt-20" staggerDelay={0.2}>
          <StaggeredItem>
            <motion.div 
              whileHover={{ scale: 1.03, y: -8 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
              
              {/* Glassmorphism card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-6">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-lg"></div>
                    <Users className="relative w-10 h-10 text-blue-400 mr-4 drop-shadow-lg" />
                </motion.div>
                  <h3 className="text-2xl font-black text-white bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    Para Todos os Públicos
                  </h3>
                </div>
                <p className="text-white/80 text-lg leading-relaxed">
                  Desde produtos com alto giro com excelente custo-benefício no ponto comercial, 
                  até opções desenvolvidas para pessoas com alguns tipos de intolerância alimentar.
                </p>
                
                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-3 h-3 bg-blue-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          </StaggeredItem>

          <StaggeredItem>
            <motion.div 
              whileHover={{ scale: 1.03, y: -8 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
              
              {/* Glassmorphism card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-6">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-lg"></div>
                    <Star className="relative w-10 h-10 text-yellow-400 mr-4 drop-shadow-lg" />
                </motion.div>
                  <h3 className="text-2xl font-black text-white bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    Linha Premium
                  </h3>
                </div>
                <p className="text-white/80 text-lg leading-relaxed">
                  Sorvetes desenvolvidos para satisfazer paladares exigentes, oferecendo uma textura agradável ao paladar, 
                  cremosíssima, sabores marcantes, com pedaços de frutas, chocolates ao leite ou meio amargo, 
                  recheios com trufas preparadas para derreter ao saborear o sorvete.
                </p>
                
                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-3 h-3 bg-yellow-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-orange-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          </StaggeredItem>

          <StaggeredItem>
            <motion.div 
              whileHover={{ scale: 1.03, y: -8 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-red-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
              
              {/* Glassmorphism card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-6">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-full blur-lg"></div>
                    <Heart className="relative w-10 h-10 text-pink-400 mr-4 drop-shadow-lg" />
                </motion.div>
                  <h3 className="text-2xl font-black text-white bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    Opções Especiais
                  </h3>
                </div>
                <p className="text-white/80 text-lg leading-relaxed">
                  Opções especiais: Produtos ZERO, sorvete cremosíssimo, desenvolvido para clientes com restrição alimentar, 
                  sorvete trufado, zero açúcar e zero lactose, inclusive na trufa.
                </p>
                
                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-3 h-3 bg-pink-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-red-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          </StaggeredItem>
        </StaggeredChildren>
      </div>
    </section>
  );
};
export default ProductVarietySection;