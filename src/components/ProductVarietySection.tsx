import { Star, Heart, Zap, Users, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
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
      descricao: "A linha Kaskata Sundae foi criada para quem ama um sorvete gostoso, cremoso e irresistível, perfeito para todos os momentos. Cada copo é uma combinação equilibrada de sabor, textura e cobertura generosa que faz cada colherada ser uma explosão de prazer."
    },
    {
      nome: "QUERO MAIS",
      imagem: queroMaisImg,
      descricao: "A linha Kaskata Quero Mais encanta à primeira vista com seu lindo pote e tampa bolha, que valoriza o produto e desperta o desejo de experimentar. Cada detalhe foi pensado para proporcionar uma experiência irresistível, tanto na aparência quanto no sabor."
    },
    {
      nome: "KAPARAÓ",
      imagem: kaparaoImg,
      descricao: "A linha Kaskata Kaparaó foi criada para proporcionar alto giro no comércio com produtos de ótima aceitação e excelente custo-benefício. Cada pote é um convite ao sabor e à cremosidade que conquistam o cliente desde a primeira colherada."
    },
    {
      nome: "CHIQUE BOM",
      imagem: chiqueBomImg,
      descricao: "A linha Kaskata Chique Bom foi criada para quem busca sabor e sofisticação em cada mordida. São sobremesas irresistivelmente cremosas, com combinações que encantam pelo contraste e pela textura perfeita entre o recheio e a cobertura de chocolate."
    },
    {
      nome: "YESS!!",
      imagem: yessImg,
      descricao: "Sabor explosivo que desperta sensações incríveis. Uma experiência única de sabor."
    },
    {
      nome: "GREGO",
      imagem: gregoImg,
      descricao: "A linha Kaskata Grego traz uma experiência irresistível de sabor e cremosidade, em um lindo pote de papel que reflete sofisticação e cuidado em cada detalhe. Produzido com ingredientes selecionados, cada sorvete é uma combinação perfeita de textura cremosa e pedaços de frutas frescas, garantindo um sabor autêntico e marcante."
    },
    {
      nome: "LINHA ZERO %",
      imagem: linhaZeroImg,
      descricao: "A Linha Kaskata Zero% foi criada para quem busca prazer e equilíbrio no mesmo pote. Com um design sofisticado em pote de papel, cada detalhe reflete qualidade e cuidado com o sabor. Os sorvetes são extremamente cremosos, zero açúcar e zero lactose, proporcionando uma experiência deliciosa sem abrir mão do bem-estar."
    },
    {
      nome: "AÇAÍ 160ML",
      imagem: acai160Img,
      descricao: "A linha Kaskata Açaí 160 ml foi criada para oferecer uma experiência intensa, cremosa e refrescante em um tamanho perfeito para qualquer momento do dia. Cada pote é feito com açaí verdadeiro, mantendo a autenticidade e o sabor marcante que só a Kaskata entrega."
    },
    {
      nome: "AÇAÍ 1L",
      imagem: acai1LImg,
      descricao: "A linha Kaskata Açaí foi criada para quem busca sabor, energia e qualidade em cada colherada. Produzido com açaí verdadeiro e ingredientes selecionados, oferece uma textura cremosa e refrescante que conquista em qualquer momento do dia."
    },
    {
      nome: "DUAL",
      imagem: dualImg,
      descricao: "Dois sabores em um só produto. Experiência dupla de sabor e textura."
    },
    {
      nome: "1 LITRO",
      imagem: umLitroImg,
      descricao: "A linha de potes Kaskata 1 Litro foi criada para encantar no ponto de venda — um lindo pote oval, moderno e vibrante, que chama atenção e valoriza a experiência do consumidor. Cada sabor entrega cremosidade, intensidade e pedaços generosos de ingredientes selecionados, transformando o simples ato de tomar sorvete em um momento especial."
    },
    {
      nome: "UNI-DUNI-TÊ",
      imagem: uniDuniTeImg,
      descricao: "O pote Kaskata Uni-Duni-Tê é uma explosão de cor, sabor e diversão! Em uma embalagem vibrante de 2 litros, o cliente encontra três sabores incríveis que conquistam à primeira colherada: Tutti-Frutti, Algodão Doce e Mirtilo."
    },
    {
      nome: "PREMIATTA",
      imagem: premiattaImg,
      descricao: "O nome já diz tudo: Premiatta é sinônimo de sofisticação e prazer em cada colherada. Uma linha premium em todos os sentidos — da cremosidade à textura impecável, passando pelo sabor marcante que conquista até os paladares mais exigentes. Seu pote de 1,5 litro traz uma experiência completa, com design elegante e moderno, que traduz a excelência da Kaskata."
    },
    {
      nome: "GELADITOS",
      imagem: geladitosImg,
      descricao: "A linha Kaskata Geladitos é perfeita para promoções e destaque nos supermercados. Seu pote de 1,5 litros tem uma embalagem marcante, moderna e atrativa, que chama a atenção do consumidor no ponto de venda. Os sabores são cremosos, equilibrados e irresistivelmente saborosos, oferecendo combinações que agradam a todos os paladares."
    },
    {
      nome: "BEST SUNDAE",
      imagem: bestSundaeImg,
      descricao: "A linha Kaskata Best Sundae é sinônimo de prazer e sabor em cada colherada. O lindo pote transparente valoriza o produto, revelando as camadas generosas de sorvete cremoso, recheios intensos e coberturas irresistíveis, despertando o desejo já no ponto de venda."
    }
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Função para obter a primeira frase da descrição (preview)
  const getPreview = (text: string, maxLength: number = 80) => {
    if (text.length <= maxLength) return text;
    const preview = text.substring(0, maxLength);
    const lastSpace = preview.lastIndexOf(' ');
    return lastSpace > 0 ? preview.substring(0, lastSpace) + '...' : preview + '...';
  };

  const toggleDescription = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
        <StaggeredChildren className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 items-stretch" staggerDelay={0.1}>
          {produtos.map((produto, index) => (
            <StaggeredItem key={index}>
          <motion.div 
                whileHover={{ scale: 1.02, y: -2 }} // Reduzido movimento
                className="relative group cursor-pointer h-full flex"
                transition={{ duration: 0.2 }} // Reduzido de 0.3 para 0.2
                style={{ willChange: 'transform' }} // Otimização de performance
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-yellow-400/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110"></div>
                
                {/* Glassmorphism card */}
                <div className="relative bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-200 flex flex-col h-full">
                  <div className="relative overflow-hidden rounded-2xl mb-6 flex-shrink-0">
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
                  <h3 className="font-black text-base text-white mb-3 text-center bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent flex-shrink-0">
                    {produto.nome}
                  </h3>
                  <div className="relative flex-grow flex flex-col min-h-[3.5rem]">
                    <div className="overflow-hidden flex-grow">
                      <motion.p
                        key={expandedIndex === index ? "expanded" : "collapsed"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-sm text-white/70 text-center leading-relaxed"
                      >
                        {expandedIndex === index ? produto.descricao : getPreview(produto.descricao)}
                      </motion.p>
                    </div>
                    <div className="mt-2 flex-shrink-0 min-h-[1.5rem] flex justify-center">
                      {produto.descricao.length > 80 && (
                        <button
                          onClick={() => toggleDescription(index)}
                          className="mx-auto flex items-center gap-1 text-yellow-400 hover:text-yellow-300 text-xs font-semibold transition-colors duration-200"
                          aria-expanded={expandedIndex === index}
                        >
                          <span>{expandedIndex === index ? "Ver menos" : "Ver mais"}</span>
                          <motion.div
                            animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <ChevronDown className="w-3 h-3" />
                          </motion.div>
                        </button>
                      )}
                    </div>
                  </div>
                  
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