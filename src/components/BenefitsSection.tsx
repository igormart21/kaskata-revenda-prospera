import { Gift, Palette, TrendingUp, Clock, Truck, Award } from "lucide-react";

const benefits = [
  {
    icon: Gift,
    title: "Freezer Gratuito",
    description: "Receba um freezer profissional em consignado, sem custo inicial.",
    highlight: "0% de entrada"
  },
  {
    icon: Palette,
    title: "Mix Sob Medida",
    description: "Produtos selecionados especificamente para o seu público.",
    highlight: "Personalizado"
  },
  {
    icon: TrendingUp,
    title: "Margem Excepcional",
    description: "Até 56% de lucro, muito acima da média do mercado.",
    highlight: "Até 56%"
  },
  {
    icon: Clock,
    title: "Visitas Regulares",
    description: "Vendedores especializados a cada 15 dias para suporte total.",
    highlight: "Quinzenal"
  },
  {
    icon: Truck,
    title: "Logística Própria",
    description: "Entrega rápida e confiável em até 7 dias úteis.",
    highlight: "5-7 dias"
  },
  {
    icon: Award,
    title: "Tradição e Confiança",
    description: "Quase 30 anos de experiência e mais de 2.000 clientes ativos.",
    highlight: "Desde 1996"
  }
];

const BenefitsSection = () => {
  return (
    <section id="vantagens" className="py-20 bg-muted">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Por que escolher a <span className="text-primary">Kaskata</span>?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Conheça todos os benefícios exclusivos que fazem da Kaskata 
            a melhor escolha para o seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index} 
                className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="bg-kaskata-yellow/20 text-foreground px-3 py-1 rounded-full text-sm font-bold">
                    {benefit.highlight}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="luxury-gradient rounded-2xl p-12 text-primary-foreground shadow-glow">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para aumentar seus lucros?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Junte-se aos mais de 2.000 comerciantes que já escolheram a Kaskata.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-kaskata-yellow text-foreground px-8 py-4 rounded-lg font-bold text-lg hover:shadow-elegant transform hover:scale-105 transition-all duration-300">
                Solicitar Freezer Agora
              </button>
              <button className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-foreground hover:text-primary transition-all duration-300">
                Falar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;