import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import kaskataLogo from "@/assets/kaskata-logo-footer.png";

const Footer = () => {
  return (
    <footer id="contato" className="relative overflow-hidden">
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
      
      {/* Content */}
      <div className="relative border-t border-white/10">
        <div className="container py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <img 
                  src={kaskataLogo} 
                  alt="Kaskata Sorvetes" 
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-white/80 leading-relaxed">
                Desde 1996 oferecendo produtos de qualidade e oportunidades 
                de negócio para mais de 2.000 comerciantes em todo o país.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-black text-white bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Links Rápidos
              </h3>
              <nav className="flex flex-col space-y-3">
                <motion.a 
                  href="#como-funciona" 
                  className="relative group text-white/80 hover:text-white transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Como Funciona
                </motion.a>
                <motion.a 
                  href="#vantagens" 
                  className="relative group text-white/80 hover:text-white transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Vantagens
                </motion.a>
                <motion.a 
                  href="#cadastro" 
                  className="relative group text-white/80 hover:text-white transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Cadastro
                </motion.a>
                <motion.a 
                  href="#contato" 
                  className="relative group text-white/80 hover:text-white transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Contato
                </motion.a>
              </nav>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-black text-white bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Contato
              </h3>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center space-x-3 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-400/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-2 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                      <Phone className="w-5 h-5 text-yellow-400" />
                    </div>
                  </div>
                  <span className="text-white/80 group-hover:text-white transition-colors duration-300">(42) 3635-1088</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-400/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-2 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                      <Mail className="w-5 h-5 text-yellow-400" />
                    </div>
                  </div>
                  <span className="text-white/80 group-hover:text-white transition-colors duration-300">sorvetes.kaskata@gmail.com</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-black text-white bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Atendimento
              </h3>
              <div className="space-y-3 text-white/80">
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-400/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                    <div className="font-medium text-white group-hover:text-white transition-colors duration-300">Segunda a Sexta</div>
                    <div className="text-white/80 group-hover:text-white/90 transition-colors duration-300">8h às 18h</div>
                  </div>
                </motion.div>
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-400/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                    <div className="font-medium text-white group-hover:text-white transition-colors duration-300">Sábado</div>
                    <div className="text-white/80 group-hover:text-white/90 transition-colors duration-300">8h às 12h</div>
                  </div>
                </motion.div>
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-400/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                    <div className="font-medium text-white group-hover:text-white transition-colors duration-300">Domingo</div>
                    <div className="text-white/80 group-hover:text-white/90 transition-colors duration-300">Fechado</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-white/10 mt-12 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-white/60 text-sm">
                © 2024 Kaskata Sorvetes. Todos os direitos reservados.
              </div>
              <div className="flex space-x-6 text-sm text-white/60">
                <motion.a 
                  href="#" 
                  className="hover:text-yellow-400 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Política de Privacidade
                </motion.a>
                <motion.a 
                  href="#" 
                  className="hover:text-yellow-400 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Termos de Uso
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;