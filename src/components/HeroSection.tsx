import { Button } from "@/components/ui/button";
import kaskataFreezers from "@/assets/kaskata-freezers.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
        <div className="text-center lg:text-left space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
            Pronto para aumentar seus 
            <span className="text-kaskata-yellow animate-pulse"> lucros?</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
            Junte-se aos mais de <strong>2.000 comerciantes</strong> que já escolheram a Kaskata.
            Receba um freezer consignado e abasteça seu ponto de venda com produtos de alta aceitação.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="cta" size="lg" className="text-xl px-8 py-4 animate-bounce">
              Solicitar Freezer Agora
            </Button>
            <Button variant="outline-primary" size="lg" className="text-xl px-8 py-4">
              Falar no WhatsApp
            </Button>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start space-x-8 text-primary-foreground/80">
            <div className="text-center">
              <div className="text-2xl font-bold">30</div>
              <div className="text-sm">Anos no mercado</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">2.000+</div>
              <div className="text-sm">Clientes ativos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">56%</div>
              <div className="text-sm">Margem de lucro</div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <img 
              src={kaskataFreezers} 
              alt="Freezers Kaskata com produtos variados"
              className="w-full max-w-lg rounded-2xl shadow-glow transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-4 -right-4 bg-kaskata-yellow text-foreground p-4 rounded-full shadow-elegant">
              <div className="text-lg font-bold">GRÁTIS</div>
              <div className="text-sm">Consignado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;