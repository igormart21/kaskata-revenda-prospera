import { Award, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
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
            className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight"
            style={{
              textShadow: '0 0 30px rgba(255, 255, 0, 0.3), 0 0 60px rgba(255, 255, 0, 0.1)'
            }}
          >
            Desde <motion.span 
              className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >1996</motion.span> atendendo com qualidade e confiança
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto"
          >
            São quase 30 anos de história e mais de 2.000 clientes ativos atendidos quinzenalmente. 
            Escolher a Kaskata é contar com tradição, credibilidade e suporte completo.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
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
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-purple-400/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-full h-full bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-yellow-400/25 transition-all duration-300">
                  <Award className="w-12 h-12 text-white drop-shadow-lg" />
                </div>
              </motion.div>
              <h3 className="text-2xl font-black text-white bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-6">
                Tradição
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Quase 30 anos de experiência no mercado de sorvetes, construindo 
                relacionamentos duradouros e confiáveis.
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
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-purple-400/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-full h-full bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-yellow-400/25 transition-all duration-300">
                  <Users className="w-12 h-12 text-white drop-shadow-lg" />
                </div>
              </motion.div>
              <h3 className="text-2xl font-black text-white bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-6">
                Confiança
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Mais de 2.000 clientes ativos que confiam na qualidade dos nossos 
                produtos e no nosso atendimento personalizado.
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
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-purple-400/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-full h-full bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-yellow-400/25 transition-all duration-300">
                  <Clock className="w-12 h-12 text-white drop-shadow-lg" />
                </div>
              </motion.div>
              <h3 className="text-2xl font-black text-white bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-6">
                Suporte
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Visitas quinzenais dos nossos vendedores para pedidos, suporte 
                e orientações que garantem o sucesso do seu negócio.
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

export default ExperienceSection;