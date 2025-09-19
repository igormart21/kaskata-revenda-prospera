import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { useState } from "react";

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
    <section id="cadastro" className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Comece a <span className="text-primary">Lucrar Hoje</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Preencha o formulário abaixo ou entre em contato diretamente conosco. 
            Em breve um de nossos consultores entrará em contato.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Registration Form */}
          <Card className="shadow-elegant">
            <CardHeader className="text-center px-4 sm:px-6">
              <CardTitle className="text-xl sm:text-2xl text-primary">Cadastro de Revendedor</CardTitle>
              <CardDescription className="text-base sm:text-lg">
                Preencha seus dados e receba seu freezer consignado
              </CardDescription>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Digite seu nome completo"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="text-base sm:text-lg p-3 sm:p-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessName">Nome do Comércio *</Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    type="text"
                    placeholder="Nome da sua loja/comércio"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    required
                    className="text-base sm:text-lg p-3 sm:p-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="document">CNPJ / CPF *</Label>
                  <Input
                    id="document"
                    name="document"
                    type="text"
                    placeholder="Digite seu CNPJ ou CPF"
                    value={formData.document}
                    onChange={handleInputChange}
                    required
                    className="text-base sm:text-lg p-3 sm:p-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Endereço *</Label>
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Rua, número, bairro, CEP"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="text-base sm:text-lg p-3 sm:p-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">Cidade *</Label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Sua cidade"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="text-base sm:text-lg p-3 sm:p-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="text-base sm:text-lg p-3 sm:p-4"
                  />
                </div>

                <Button type="submit" variant="cta" className="w-full text-lg sm:text-xl py-4 sm:py-6">
                  Quero Revender com a Kaskata
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Todos os campos são obrigatórios. Seus dados estão protegidos conosco.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Options */}
          <div className="space-y-6 sm:space-y-8">
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary mr-3 sm:mr-4" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">WhatsApp</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">Atendimento imediato</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                  Fale diretamente com nossa equipe pelo WhatsApp. 
                  Resposta rápida e atendimento personalizado.
                </p>
                <Button variant="secondary" className="w-full text-sm sm:text-base" size="lg">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Chamar no WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-primary mr-3 sm:mr-4" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">Telefone</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">Horário comercial</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                  Segunda a sexta, das 8h às 18h<br />
                  Sábado, das 8h às 12h
                </p>
                <div className="text-primary font-bold text-base sm:text-lg">
                  (11) 3333-3333
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary mr-3 sm:mr-4" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">E-mail</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">Resposta em até 24h</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                  Envie suas dúvidas ou solicite informações por e-mail.
                </p>
                <div className="text-primary font-bold text-sm sm:text-base break-all">
                  contato@kaskata.com.br
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;