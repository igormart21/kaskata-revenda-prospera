import { motion } from "framer-motion";
import { Star, Heart, Users, ChevronDown } from "lucide-react";
import { useState } from "react";

// Import das imagens de picolés
import lapisImg from "@/assets/LAPIS.png";
import especiataImg from "@/assets/ESPECIATA.png";
import kasketoImg from "@/assets/KASKETO.png";
import infinityImg from "@/assets/INFINITY.png";
import kidsImg from "@/assets/KIDS.png";
import recheiosImg from "@/assets/RECHEIOS.png";
import maxiumImg from "@/assets/MAXIUM.png";
import trufasImg from "@/assets/TRUFAS.png";
import doubleImg from "@/assets/DOUBLE.png";
import moreninhaImg from "@/assets/MORENINHA.png";
import supremImg from "@/assets/SUPREM.png";
import kaskFrutyImg from "@/assets/KASK_FRUTY.png";
import paletaskaMexicanaImg from "@/assets/PALETASKA_MEXICANA.png";
import yogoImg from "@/assets/YOGO.png";
import milkataImg from "@/assets/MILKATA.png";
import unicornioImg from "@/assets/UNICORNIO.png";
import daPolpaImg from "@/assets/DA_POLPA.png";

const picoles = [
  {
    nome: "Lápis",
    imagem: lapisImg,
    descricao: "Um sucesso entre as crianças e os adultos que amam se divertir com sabor! Os picolés Kaskata Lápis vêm em formato de lápis colorido, tornando cada mordida uma experiência criativa e deliciosa."
  },
  {
    nome: "Especiata",
    imagem: especiataImg,
    descricao: "Picolé com especiarias selecionadas, oferecendo um sabor único e marcante."
  },
  {
    nome: "Kasketo",
    imagem: kasketoImg,
    descricao: "Prazer em cada mordida! Três sabores irresistíveis que combinam cremosidade, sabor intenso e uma casquinha que é puro prazer, com chocolate crocante por dentro!"
  },
  {
    nome: "Infinity",
    imagem: infinityImg,
    descricao: "Dois picolés simplesmente irresistíveis, feitos para quem busca cremosidade e sabor em cada mordida, coberta com uma generosa camada de chocolate!"
  },
  {
    nome: "Kids",
    imagem: kidsImg,
    descricao: "A Linha Kids foi criada especialmente para o público infantil, trazendo diversão, cor e sabor em cada mordida! São picolés coloridos, alegres e com combinações irresistíveis de frutas, desenvolvidos com todo o cuidado para agradar o paladar das crianças e garantir momentos de pura alegria."
  },
  {
    nome: "Recheios",
    imagem: recheiosImg,
    descricao: "Prepare-se para uma explosão de sabor e cremosidade! A linha Kaskata Recheios traz dois picolés irresistíveis que combinam textura suave, recheios intensos e um sabor que conquista desde a primeira mordida."
  },
  {
    nome: "Maximum",
    imagem: maxiumImg,
    descricao: "A linha Kaskata Maximum é sinônimo de intensidade. São quatro sabores irresistíveis, cada um com sua própria explosão de cremosidade e textura única. Todos são envoltos por uma generosa camada de chocolate crocante, misturado com pedacinhos que trazem aquele \"crunch\" irresistível. Uma experiência, intensa e extremamente cremosa, feita para quem não abre mão do máximo sabor!"
  },
  {
    nome: "Trufas",
    imagem: trufasImg,
    descricao: "A linha Kaskata Trufa's é uma explosão de sabor e cremosidade em cada mordida! São picolés cremosos com um irresistível recheio de trufa de chocolate meio amargo, envolvidos por uma cobertura generosa de chocolate crocante, que derrete na boca e desperta os sentidos."
  },
  {
    nome: "Double",
    imagem: doubleImg,
    descricao: "A linha Double Kaskata chegou para dobrar o prazer em cada mordida! São picolés extremamente cremosos, combinando dois ou até três sabores irresistíveis em um só produto — uma explosão de sabor e textura que surpreende do começo ao fim."
  },
  {
    nome: "Moreninha",
    imagem: moreninhaImg,
    descricao: "A Kaskata Moreninha é pura tentação! Um delicioso sorvete de baunilha cremosa, envolto por uma generosa camada de chocolate crocante que derrete na boca, entregando uma combinação perfeita entre suavidade e sabor intenso. Uma experiência irresistível que transforma cada mordida em um momento de prazer!"
  },
  {
    nome: "Suprem",
    imagem: supremImg,
    descricao: "A linha Kaskata Suprem traz uma experiência irresistível em cada mordida! São picolés grandes, com pedaços de fruta de verdade, de formato quadrado, extremamente cremosos e feitos à base de leite, garantindo sabor e textura incomparáveis."
  },
  {
    nome: "Kask Fruty",
    imagem: kaskFrutyImg,
    descricao: "A linha Kask Fruty é feita para trazer a leveza, frescura e o sabor naturalmente deliciosos. Ideal para quem busca uma opção saborosa e equilibrada, é uma combinação perfeita entre frescor e o verdadeiro gosto da fruta."
  },
  {
    nome: "Paletaska Mexicana",
    imagem: paletaskaMexicanaImg,
    descricao: "A linha Paletaska Mexicana traz uma experiência irresistível com picolés grandes, quadrados e extremamente cremosos. Inspirada na tradição das paletas mexicanas, essa linha combina recheios generosos e frutas frescas, entregando sabor e textura em cada mordida."
  },
  {
    nome: "Yogo",
    imagem: yogoImg,
    descricao: "A linha Kaskata Yogo é pura diversão em forma de sabor! Um delicioso sorvete de iogurte cremoso, no formato prático e divertido de travesseirinho embalado, perfeito para saborear a qualquer hora. Cada sabor é uma experiência única."
  },
  {
    nome: "Milkata",
    imagem: milkataImg,
    descricao: "A linha Kaskata Milkata é composta por picolés à base de leite, com 77,3% de leite em sua formulação, garantindo uma textura extremamente cremosa e sabor marcante em cada mordida. São seis sabores irresistíveis que trazem o verdadeiro prazer do sabor caseiro."
  },
  {
    nome: "Unicórnio",
    imagem: unicornioImg,
    descricao: "O Picolé Kaskata Unicórnio Marshmallow é uma verdadeira explosão de cores e sabores! Feito com base cremosa e textura aveludada, combina vários sabores irresistíveis que se misturam em um visual mágico e divertido. Cada mordida é uma viagem ao mundo dos sonhos — doce, leve e cheio de encanto. Ideal para quem ama novas sensações e quer transformar qualquer momento em pura alegria!"
  },
  {
    nome: "Da Polpa",
    imagem: daPolpaImg,
    descricao: "A linha Da Polpa Kaskata traz a verdadeira essência das frutas em cada picolé. Elaborados com frutas de verdade, oferecem uma experiência natural, refrescante e cheia de sabor. Pensada para quem busca sabor intenso, qualidade e o prazer genuíno de provar frutas de verdade no palito."
  }
];

const PicoleSection = () => {
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
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-800/30 via-transparent to-indigo-800/30" />
      
      {/* Animated mesh gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)
          `,
          animation: 'meshMove 20s ease-in-out infinite'
        }}
      />
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 backdrop-blur-[1px] bg-white/[0.01]" />
      
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto mb-20"
        >
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
            Linha <motion.span 
              className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
            >Picolé</motion.span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto"
          >
            Descubra nossa variedade de picolés premium, desenvolvidos com ingredientes selecionados 
            para oferecer sabores únicos e experiências inesquecíveis.
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 mb-12 sm:mb-16 items-stretch">
          {picoles.map((picole, index) => (
            <motion.div
              key={picole.nome}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group h-full flex"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-yellow-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 flex flex-col h-full">
                <div className="relative mb-4 flex-shrink-0">
                  <img 
                    src={picole.imagem} 
                    alt={picole.nome}
                    loading="lazy" // Lazy loading para melhor performance
                    decoding="async"
                    className="w-full h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </motion.div>
                </div>
                <h3 className="font-black text-base text-white bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-2 flex-shrink-0">
                  {picole.nome}
                </h3>
                <div className="relative flex-grow flex flex-col min-h-[3.5rem]">
                  <div className="overflow-hidden flex-grow">
                    <motion.p
                      key={expandedIndex === index ? "expanded" : "collapsed"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-white/70 text-xs sm:text-sm leading-relaxed"
                    >
                      {expandedIndex === index ? picole.descricao : getPreview(picole.descricao)}
                    </motion.p>
                  </div>
                  <div className="mt-2 flex-shrink-0 min-h-[1.5rem]">
                    {picole.descricao.length > 80 && (
                      <button
                        onClick={() => toggleDescription(index)}
                        className="flex items-center gap-1 text-yellow-400 hover:text-yellow-300 text-xs font-semibold transition-colors duration-200"
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
                <div className="absolute top-3 right-3 w-2 h-2 bg-yellow-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 w-1 h-1 bg-purple-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 text-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
              <motion.div 
                className="relative mx-auto w-24 h-24 mb-8"
                whileHover={{ scale: 1.05, rotate: 2 }} // Reduzido movimento
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-purple-400/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-full h-full bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-yellow-400/25 transition-all duration-300">
                  <Users className="w-12 h-12 text-white drop-shadow-lg" />
                </div>
              </motion.div>
              <h3 className="text-2xl font-black text-white bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-6">
                Para Todos os Públicos
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Desde picolés tradicionais até sabores inovadores, atendemos 
                todos os gostos e faixas etárias.
              </p>
              
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-3 h-3 bg-yellow-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 text-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
              <motion.div 
                className="relative mx-auto w-24 h-24 mb-8"
                whileHover={{ scale: 1.05, rotate: 2 }} // Reduzido movimento
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-purple-400/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-full h-full bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-yellow-400/25 transition-all duration-300">
                  <Star className="w-12 h-12 text-white drop-shadow-lg" />
                </div>
              </motion.div>
              <h3 className="text-2xl font-black text-white bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-6">
                Sabores Únicos
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Desenvolvemos sabores exclusivos e inovadores que destacam 
                sua loja da concorrência.
              </p>
              
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-3 h-3 bg-yellow-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 text-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
              <motion.div 
                className="relative mx-auto w-24 h-24 mb-8"
                whileHover={{ scale: 1.05, rotate: 2 }} // Reduzido movimento
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-purple-400/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-full h-full bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-yellow-400/25 transition-all duration-300">
                  <Heart className="w-12 h-12 text-white drop-shadow-lg" />
                </div>
              </motion.div>
              <h3 className="text-2xl font-black text-white bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-6">
                Qualidade Premium
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Ingredientes selecionados e processo de fabricação rigoroso 
                garantem a melhor qualidade.
              </p>
              
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-3 h-3 bg-yellow-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PicoleSection;
