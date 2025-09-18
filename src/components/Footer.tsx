import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
const Footer = () => {
  return <footer id="contato" className="bg-background border-t">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-3xl font-bold text-primary">Kaskata</div>
              <div className="text-sm text-muted-foreground">Sorvetes</div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Desde 1996 oferecendo produtos de qualidade e oportunidades 
              de negócio para mais de 2.000 comerciantes em todo o país.
            </p>
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">K</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#como-funciona" className="text-muted-foreground hover:text-primary transition-colors">
                Como Funciona
              </a>
              <a href="#vantagens" className="text-muted-foreground hover:text-primary transition-colors">
                Vantagens
              </a>
              <a href="#cadastro" className="text-muted-foreground hover:text-primary transition-colors">
                Cadastro
              </a>
              <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
                Contato
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">(11) 3333-3333</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">contato@kaskata.com.br</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Atendimento</h3>
            <div className="space-y-2 text-muted-foreground">
              <div>
                <div className="font-medium">Segunda a Sexta</div>
                <div>8h às 18h</div>
              </div>
              <div>
                <div className="font-medium">Sábado</div>
                <div>8h às 12h</div>
              </div>
              <div>
                <div className="font-medium">Domingo</div>
                <div>Fechado</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2024 Kaskata Sorvetes. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      
    </footer>;
};
export default Footer;