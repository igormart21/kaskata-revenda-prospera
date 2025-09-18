import { Star, Heart, Zap, Users } from "lucide-react";
import kaskataDisplay from "@/assets/kaskata-freezer-display.jpeg";

const ProductVarietySection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Variedade e <span className="text-primary">Qualidade Premium</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Produtos para todos os públicos, desde opções populares até linhas especiais 
            zero lactose e zero açúcar, sempre com a qualidade que seus clientes merecem.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Para Todos os Públicos</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                Desde produtos populares com excelente custo-benefício até opções premium 
                que atendem paladares mais exigentes.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Populares</span>
                <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">Premium</span>
                <span className="bg-kaskata-yellow/20 text-foreground px-3 py-1 rounded-full text-sm font-medium">Especiais</span>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300">
              <div className="flex items-center mb-4">
                <Star className="w-8 h-8 text-kaskata-yellow mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Linha Premium</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                Sorvetes cremosos com maior quantidade de sólidos, oferecendo 
                textura diferenciada e mais sabor para seus clientes.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-destructive mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Opções Especiais</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                Produtos zero lactose e zero açúcar para atender clientes com 
                necessidades específicas, expandindo seu público-alvo.
              </p>
            </div>

            <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground shadow-glow">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">Mix Personalizado</h3>
              </div>
              <p className="text-lg opacity-90">
                Selecionamos os produtos ideais de acordo com o perfil do seu 
                comércio e dos clientes da sua região.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={kaskataDisplay} 
                alt="Display com variedade de produtos Kaskata"
                className="w-full max-w-md rounded-2xl shadow-glow transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -top-4 -left-4 bg-secondary text-secondary-foreground p-3 rounded-full shadow-elegant">
                <Star className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-kaskata-yellow text-foreground p-4 rounded-xl shadow-elegant">
                <div className="text-sm font-bold">+50</div>
                <div className="text-xs">Sabores</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductVarietySection;