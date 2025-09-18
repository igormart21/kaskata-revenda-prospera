import { TrendingUp, DollarSign, BarChart3 } from "lucide-react";

const ProfitSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Margem de Lucro que <span className="text-primary">Faz a Diferença</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Além da rentabilidade excepcional, trabalhamos com preço tabelado e justo, 
            garantindo previsibilidade e competitividade para o seu negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-primary p-8 rounded-2xl text-primary-foreground shadow-glow">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">Kaskata - Linha Batidão</h3>
              </div>
              <div className="text-5xl font-bold mb-2">ATÉ 56%</div>
              <div className="text-lg opacity-90">de margem de lucro</div>
            </div>

            <div className="bg-card border rounded-2xl p-8 shadow-elegant">
              <div className="flex items-center mb-4">
                <BarChart3 className="w-8 h-8 mr-3 text-muted-foreground" />
                <h3 className="text-2xl font-bold text-foreground">Concorrência</h3>
              </div>
              <div className="text-4xl font-bold mb-2 text-muted-foreground">~30%</div>
              <div className="text-lg text-muted-foreground">margem média do mercado</div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-kaskata-yellow/10 border-l-4 border-kaskata-yellow p-6 rounded-r-xl">
              <div className="flex items-center mb-3">
                <DollarSign className="w-6 h-6 text-kaskata-yellow mr-2" />
                <h4 className="text-xl font-bold text-foreground">80% Mais Rentabilidade</h4>
              </div>
              <p className="text-muted-foreground">
                Enquanto a concorrência oferece cerca de 30% de margem, 
                a Kaskata entrega até <strong>80% a mais</strong> de rentabilidade 
                para o seu negócio.
              </p>
            </div>

            <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-xl">
              <h4 className="text-xl font-bold text-foreground mb-3">Preço Tabelado</h4>
              <p className="text-muted-foreground">
                Trabalhamos com preços fixos e justos, sem surpresas. 
                Você sempre saberá exatamente qual será sua margem de lucro.
              </p>
            </div>

            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl">
              <h4 className="text-xl font-bold text-foreground mb-3">Competitividade Garantida</h4>
              <p className="text-muted-foreground">
                Nossos preços são calculados para garantir que você seja 
                competitivo no mercado e ainda tenha excelente rentabilidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfitSection;