import { UserPlus, Search, Truck, Users, Package } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Faça seu Cadastro",
    description: "Cadastre-se em nosso site ou entre em contato pelo WhatsApp para iniciar sua parceria.",
    color: "bg-primary"
  },
  {
    icon: Search,
    title: "Análise do Perfil",
    description: "Analisamos o perfil do seu comércio e da região para definir o mix ideal de produtos.",
    color: "bg-secondary"
  },
  {
    icon: Truck,
    title: "Entrega do Freezer",
    description: "Entregamos seu freezer consignado sem nenhum custo inicial para você.",
    color: "bg-kaskata-yellow text-foreground"
  },
  {
    icon: Users,
    title: "Visitas Quinzenais",
    description: "Nossos vendedores visitam a cada 15 dias para pedidos e suporte completo.",
    color: "bg-primary"
  },
  {
    icon: Package,
    title: "Entrega Rápida",
    description: "Nossa logística própria entrega os produtos em até 5 a 7 dias úteis após o pedido.",
    color: "bg-secondary"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Como <span className="text-primary">Funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Um processo simples e eficiente para você começar a lucrar mais 
            com produtos Kaskata no seu comércio.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="flex justify-between items-start relative">
              {/* Timeline line */}
              <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-primary rounded-full"></div>
              
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex flex-col items-center relative z-10 flex-1">
                    <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center shadow-glow mb-4`}>
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="bg-card rounded-2xl p-6 shadow-elegant max-w-xs text-center hover:shadow-glow transition-all duration-300">
                      <div className="text-2xl font-bold text-primary mb-2">{index + 1}</div>
                      <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center shadow-glow flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="bg-card rounded-xl p-6 shadow-elegant flex-1 hover:shadow-glow transition-all duration-300">
                    <div className="text-xl font-bold text-primary mb-2">Passo {index + 1}</div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;