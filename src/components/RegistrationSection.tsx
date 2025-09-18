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
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comece a <span className="text-primary">Lucrar Hoje</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Preencha o formulário abaixo ou entre em contato diretamente conosco. 
            Em breve um de nossos consultores entrará em contato.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Registration Form */}
          <Card className="shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">Cadastro de Revendedor</CardTitle>
              <CardDescription className="text-lg">
                Preencha seus dados e receba seu freezer consignado
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="text-lg p-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessName">Nome do Comércio</Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    type="text"
                    placeholder="Nome da sua loja/comércio"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="text-lg p-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="document">CNPJ / CPF</Label>
                  <Input
                    id="document"
                    name="document"
                    type="text"
                    placeholder="Digite seu CNPJ ou CPF"
                    value={formData.document}
                    onChange={handleInputChange}
                    className="text-lg p-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Endereço</Label>
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Rua, número, bairro, CEP"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="text-lg p-4"
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
                    className="text-lg p-4"
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
                    className="text-lg p-4"
                  />
                </div>

                <Button type="submit" variant="cta" className="w-full text-xl py-6">
                  Quero Revender com a Kaskata
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Campos obrigatórios (nome, cidade e telefone). Seus dados estão protegidos conosco.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Options */}
          <div className="space-y-8">
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-8 h-8 text-primary mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">WhatsApp</h3>
                    <p className="text-muted-foreground">Atendimento imediato</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Fale diretamente com nossa equipe pelo WhatsApp. 
                  Resposta rápida e atendimento personalizado.
                </p>
                <Button variant="secondary" className="w-full" size="lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chamar no WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Phone className="w-8 h-8 text-primary mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Telefone</h3>
                    <p className="text-muted-foreground">Horário comercial</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Segunda a sexta, das 8h às 18h<br />
                  Sábado, das 8h às 12h
                </p>
                <div className="text-primary font-bold text-lg">
                  (11) 3333-3333
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Mail className="w-8 h-8 text-primary mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">E-mail</h3>
                    <p className="text-muted-foreground">Resposta em até 24h</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Envie suas dúvidas ou solicite informações por e-mail.
                </p>
                <div className="text-primary font-bold">
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