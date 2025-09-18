import { Award, Users, Clock } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Desde <span className="text-primary">1996</span> atendendo com qualidade e confiança
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            São quase 30 anos de história e mais de 2.000 clientes ativos atendidos quinzenalmente. 
            Escolher a Kaskata é contar com tradição, credibilidade e suporte completo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="mx-auto w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
              <Award className="w-10 h-10 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Tradição</h3>
            <p className="text-muted-foreground">
              Quase 30 anos de experiência no mercado de sorvetes, construindo 
              relacionamentos duradouros e confiáveis.
            </p>
          </div>

          <div className="text-center group">
            <div className="mx-auto w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
              <Users className="w-10 h-10 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Confiança</h3>
            <p className="text-muted-foreground">
              Mais de 2.000 clientes ativos que confiam na qualidade dos nossos 
              produtos e no nosso atendimento personalizado.
            </p>
          </div>

          <div className="text-center group">
            <div className="mx-auto w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
              <Clock className="w-10 h-10 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Suporte</h3>
            <p className="text-muted-foreground">
              Visitas quinzenais dos nossos vendedores para pedidos, suporte 
              e orientações que garantem o sucesso do seu negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;