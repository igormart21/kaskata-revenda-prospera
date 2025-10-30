import { motion } from "framer-motion";
import { Star, Heart, Users } from "lucide-react";

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
    descricao: "Picolé cremoso com sabor tradicional, perfeito para todas as idades."
  },
  {
    nome: "Especiata",
    imagem: especiataImg,
    descricao: "Picolé com especiarias selecionadas, oferecendo um sabor único e marcante."
  },
  {
    nome: "Kasketo",
    imagem: kasketoImg,
    descricao: "Picolé crocante por fora e cremoso por dentro, uma experiência de textura única."
  },
  {
    nome: "Infinity",
    imagem: infinityImg,
    descricao: "Picolé com sabor infinito, combinando múltiplos sabores em uma única experiência."
  },
  {
    nome: "Kids",
    imagem: kidsImg,
    descricao: "Picolé especialmente desenvolvido para crianças, com sabores suaves e divertidos."
  },
  {
    nome: "Recheios",
    imagem: recheiosImg,
    descricao: "Picolé com recheio surpresa, oferecendo uma experiência de sabor em camadas."
  },
  {
    nome: "Maxium",
    imagem: maxiumImg,
    descricao: "Picolé máximo em sabor e tamanho, para quem quer mais do melhor."
  },
  {
    nome: "Trufas",
    imagem: trufasImg,
    descricao: "Picolé com sabor de trufa, oferecendo um toque sofisticado e cremoso."
  },
  {
    nome: "Double",
    imagem: doubleImg,
    descricao: "Picolé duplo, combinando dois sabores em uma única experiência deliciosa."
  },
  {
    nome: "Moreninha",
    imagem: moreninhaImg,
    descricao: "Picolé com sabor de chocolate, cremoso e irresistível."
  },
  {
    nome: "Suprem",
    imagem: supremImg,
    descricao: "Picolé supremo em qualidade e sabor, para os paladares mais exigentes."
  },
  {
    nome: "Kask Fruty",
    imagem: kaskFrutyImg,
    descricao: "Picolé com sabores de frutas tropicais, refrescante e natural."
  },
  {
    nome: "Paletaska Mexicana",
    imagem: paletaskaMexicanaImg,
    descricao: "Picolé inspirado na tradição mexicana, com sabores autênticos e picantes."
  },
  {
    nome: "Yogo",
    imagem: yogoImg,
    descricao: "Picolé com base de iogurte, oferecendo um sabor cremoso e saudável."
  },
  {
    nome: "Milkata",
    imagem: milkataImg,
    descricao: "Picolé com sabor de leite condensado, cremoso e doce como lembrança de infância."
  },
  {
    nome: "Unicórnio",
    imagem: unicornioImg,
    descricao: "Picolé colorido e mágico, perfeito para despertar a imaginação das crianças."
  },
  {
    nome: "Da Polpa",
    imagem: daPolpaImg,
    descricao: "Picolé feito com polpa de frutas naturais, oferecendo sabor autêntico e refrescante."
  }
];

const PicoleSection = () => {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {picoles.map((picole, index) => (
            <motion.div
              key={picole.nome}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-yellow-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                <div className="relative mb-4">
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
                <h3 className="font-black text-base text-white bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-2">
                  {picole.nome}
                </h3>
                <p className="text-white/70 text-xs leading-relaxed">
                  {picole.descricao}
                </p>
                
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
