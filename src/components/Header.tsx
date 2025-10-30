import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import kaskataLogo from "@/assets/kaskata-logo-principal.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToForm = () => {
    const formElement = document.getElementById('cadastro');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="sticky top-0 z-50 w-full border-b border-purple-900/10 bg-white backdrop-blur-md supports-[backdrop-filter]:bg-white/90"
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center space-x-2"
        >
          <img 
            src={kaskataLogo} 
            alt="Kaskata Sorvetes" 
            className="h-12 w-auto"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:flex items-center space-x-8"
        >
          <motion.a 
            href="#como-funciona" 
            className="relative group px-4 py-2 rounded-xl text-sm font-medium text-purple-900/90 hover:text-purple-900 transition-all duração-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-600/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-purple-900/10 backdrop-blur-sm border border-purple-900/20 rounded-xl px-4 py-2 -m-2 group-hover:bg-purple-900/20 group-hover:border-purple-900/30 transition-all duration-300">
              Como Funciona
            </div>
          </motion.a>
          <motion.a 
            href="#vantagens" 
            className="relative group px-4 py-2 rounded-xl text-sm font-medium text-purple-900/90 hover:text-purple-900 transition-all duração-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-600/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-purple-900/10 backdrop-blur-sm border border-purple-900/20 rounded-xl px-4 py-2 -m-2 group-hover:bg-purple-900/20 group-hover:border-purple-900/30 transition-all duration-300">
              Vantagens
            </div>
          </motion.a>
          <motion.a 
            href="#cadastro" 
            className="relative group px-4 py-2 rounded-xl text-sm font-medium text-purple-900/90 hover:text-purple-900 transition-all duração-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-600/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-purple-900/10 backdrop-blur-sm border border-purple-900/20 rounded-xl px-4 py-2 -m-2 group-hover:bg-purple-900/20 group-hover:border-purple-900/30 transition-all duration-300">
              Cadastro
            </div>
          </motion.a>
          <motion.a 
            href="#contato" 
            className="relative group px-4 py-2 rounded-xl text-sm font-medium text-purple-900/90 hover:text-purple-900 transition-all duração-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-600/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-purple-900/10 backdrop-blur-sm border border-purple-900/20 rounded-xl px-4 py-2 -m-2 group-hover:bg-purple-900/20 group-hover:border-purple-900/30 transition-all duration-300">
              Contato
            </div>
          </motion.a>
        </motion.nav>

        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center space-x-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
            <button 
              onClick={scrollToForm} 
              className="relative hidden md:inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-500 hover:to-purple-600 transition-all duration-300 h-11 rounded-xl px-8 py-4 shadow-2xl backdrop-blur-sm hover:shadow-purple-600/25"
            >
              Quero Revender Agora
            </button>
          </motion.div>
          
          {/* Mobile menu button */}
          <motion.button
            className="md:hidden relative group p-2 rounded-xl bg-purple-900/10 backdrop-blur-sm border border-purple-900/20 hover:bg-purple-900/20 hover:border-purple-900/30 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-600/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative text-purple-900">
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden border-t border-purple-900/20 bg-gradient-to-r from-yellow-400 to-yellow-500 backdrop-blur-md overflow-hidden"
          >
            <motion.nav 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="container py-6 flex flex-col space-y-4"
            >
              <motion.a 
                href="#como-funciona" 
                className="relative group px-4 py-3 rounded-xl text-sm font-medium text-purple-900/90 hover:text-purple-900 transition-all duração-300"
                whileHover={{ x: 10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-600/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-purple-900/10 backdrop-blur-sm border border-purple-900/20 rounded-xl px-4 py-3 -m-2 group-hover:bg-purple-900/20 group-hover:border-purple-900/30 transition-all duration-300">
                  Como Funciona
                </div>
              </motion.a>
              <motion.a 
                href="#vantagens" 
                className="relative group px-4 py-3 rounded-xl text-sm font-medium text-purple-900/90 hover:text-purple-900 transition-all duração-300"
                whileHover={{ x: 10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-600/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-purple-900/10 backdrop-blur-sm border border-purple-900/20 rounded-xl px-4 py-3 -m-2 group-hover:bg-purple-900/20 group-hover:border-purple-900/30 transition-all duration-300">
                  Vantagens
                </div>
              </motion.a>
              <motion.a 
                href="#cadastro" 
                className="relative group px-4 py-3 rounded-xl text-sm font-medium text-purple-900/90 hover:text-purple-900 transition-all duração-300"
                whileHover={{ x: 10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-600/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-purple-900/10 backdrop-blur-sm border border-purple-900/20 rounded-xl px-4 py-3 -m-2 group-hover:bg-purple-900/20 group-hover:border-purple-900/30 transition-all duration-300">
                  Cadastro
                </div>
              </motion.a>
              <motion.a 
                href="#contato" 
                className="relative group px-4 py-3 rounded-xl text-sm font-medium text-purple-900/90 hover:text-purple-900 transition-all duração-300"
                whileHover={{ x: 10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-600/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-purple-900/10 backdrop-blur-sm border border-purple-900/20 rounded-xl px-4 py-3 -m-2 group-hover:bg-purple-900/20 group-hover:border-purple-900/30 transition-all duration-300">
                  Contato
                </div>
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group mt-4"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                <button 
                  onClick={scrollToForm} 
                  className="relative w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-500 hover:to-purple-600 transition-all duration-300 font-bold py-4 px-6 rounded-xl shadow-2xl backdrop-blur-sm hover:shadow-purple-600/25"
                >
                  Quero Revender Agora
                </button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;