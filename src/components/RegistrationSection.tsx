import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const RegistrationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    document: '',
    address: '',
    city: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    // For now, redirect to WhatsApp
    const message = `Olá! Gostaria de me cadastrar como revendedor Kaskata. 
Meus dados:
Nome: ${formData.name}
Nome do Comércio: ${formData.businessName}
CNPJ/CPF: ${formData.document}
Endereço: ${formData.address}
Cidade: ${formData.city}
Telefone: ${formData.phone}`;
    
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="cadastro" className="relative py-12 sm:py-16 lg:py-24 overflow-hidden px-4 sm:px-6 lg:px-8">
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
            radial-gradient(circle at 40% 30%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 60% 70%, rgba(255, 255, 0, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)
          `
        }}
      ></motion.div>
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 backdrop-blur-[1px] bg-white/[0.01]"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-12 sm:mb-16 lg:mb-20">
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
            Comece a <motion.span 
              className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >Lucrar Hoje</motion.span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto"
          >
            Preencha o formulário abaixo ou entre em contato diretamente conosco. 
            Em breve um de nossos consultores entrará em contato.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Form glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-yellow-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
            
            {/* Glassmorphism form */}
            <Card className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl shadow-2xl hover:bg-white/10 transition-all duration-300">
              <CardHeader className="text-center px-4 sm:px-6 py-6 sm:py-8">
                <CardTitle className="text-2xl font-black text-white bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Cadastro de Revendedor
                </CardTitle>
                <CardDescription className="text-lg text-white/80">
                  Preencha seus dados e receba seu freezer em comodato
              </CardDescription>
            </CardHeader>
              <CardContent className="px-4 sm:px-6 pb-6 sm:pb-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-white font-medium">Nome Completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Digite seu nome completo"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                      className="text-lg p-4 bg-white/10 border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:border-yellow-400/50 rounded-xl backdrop-blur-sm"
                  />
                </div>

                  <div className="space-y-3">
                    <Label htmlFor="businessName" className="text-white font-medium">Nome do Comércio *</Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    type="text"
                    placeholder="Nome da sua loja/comércio"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    required
                      className="text-lg p-4 bg-white/10 border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:border-yellow-400/50 rounded-xl backdrop-blur-sm"
                  />
                </div>

                  <div className="space-y-3">
                    <Label htmlFor="document" className="text-white font-medium">CNPJ / CPF *</Label>
                  <Input
                    id="document"
                    name="document"
                    type="text"
                    placeholder="Digite seu CNPJ ou CPF"
                    value={formData.document}
                    onChange={handleInputChange}
                    required
                      className="text-lg p-4 bg-white/10 border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:border-yellow-400/50 rounded-xl backdrop-blur-sm"
                  />
                </div>

                  <div className="space-y-3">
                    <Label htmlFor="address" className="text-white font-medium">Endereço *</Label>
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Rua, número, bairro, CEP"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                      className="text-lg p-4 bg-white/10 border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:border-yellow-400/50 rounded-xl backdrop-blur-sm"
                  />
                </div>

                  <div className="space-y-3">
                    <Label htmlFor="city" className="text-white font-medium">Cidade *</Label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Sua cidade"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                      className="text-lg p-4 bg-white/10 border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:border-yellow-400/50 rounded-xl backdrop-blur-sm"
                  />
                </div>

                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-white font-medium">Telefone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                      className="text-lg p-4 bg-white/10 border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:border-yellow-400/50 rounded-xl backdrop-blur-sm"
                  />
                </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button type="submit" className="w-full text-base sm:text-lg lg:text-xl py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-purple-900 font-black rounded-xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300">
                  Quero Revender com a Kaskata
                </Button>
                  </motion.div>

                  <p className="text-sm text-white/60 text-center">
                  * Todos os campos são obrigatórios. Seus dados estão protegidos conosco.
                </p>
              </form>
            </CardContent>
          </Card>
          </motion.div>

          {/* Contact Options */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.03, y: -8 }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
              
              {/* Glassmorphism card */}
              <Card className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl shadow-2xl hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-lg"></div>
                      <MessageCircle className="relative w-10 h-10 text-green-400 mr-4 drop-shadow-lg" />
                    </motion.div>
                  <div>
                      <h3 className="text-2xl font-black text-white bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                        WhatsApp
                      </h3>
                      <p className="text-lg text-white/80">Atendimento imediato</p>
                    </div>
                  </div>
                  <p className="text-lg text-white/80 mb-6 leading-relaxed">
                  Fale diretamente com nossa equipe pelo WhatsApp. 
                  Resposta rápida e atendimento personalizado.
                </p>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button variant="secondary" className="w-full text-base sm:text-lg py-3 sm:py-4 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300">
                      <MessageCircle className="w-5 h-5 mr-2" />
                  Chamar no WhatsApp
                </Button>
                  </motion.div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-6 right-6 w-3 h-3 bg-green-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </CardContent>
            </Card>
            </motion.div>

            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.03, y: -8 }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
              
              {/* Glassmorphism card */}
              <Card className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl shadow-2xl hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-lg"></div>
                      <Phone className="relative w-10 h-10 text-blue-400 mr-4 drop-shadow-lg" />
                    </motion.div>
                  <div>
                      <h3 className="text-2xl font-black text-white bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                        Telefone
                      </h3>
                      <p className="text-lg text-white/80">Horário comercial</p>
                    </div>
                  </div>
                  <p className="text-lg text-white/80 mb-4 leading-relaxed">
                  Segunda a sexta, das 8h às 18h<br />
                  Sábado, das 8h às 12h
                </p>
                  <div className="text-2xl font-black bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                    (42) 3635-1088
                </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-6 right-6 w-3 h-3 bg-blue-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </CardContent>
            </Card>
            </motion.div>

            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.03, y: -8 }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
              
              {/* Glassmorphism card */}
              <Card className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl shadow-2xl hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-lg"></div>
                      <Mail className="relative w-10 h-10 text-purple-400 mr-4 drop-shadow-lg" />
                    </motion.div>
                  <div>
                      <h3 className="text-2xl font-black text-white bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                        E-mail
                      </h3>
                      <p className="text-lg text-white/80">Resposta em até 24h</p>
                    </div>
                  </div>
                  <p className="text-lg text-white/80 mb-4 leading-relaxed">
                  Envie suas dúvidas ou solicite informações por e-mail.
                </p>
                  <div className="text-xl font-bold text-white/90 break-all">
                    sorvetes.kaskata@gmail.com
                </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-6 right-6 w-3 h-3 bg-purple-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </CardContent>
            </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;