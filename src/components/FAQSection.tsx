import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Posso ter o freezer Kaskata na minha casa?",
    answer: "Não, nossos freezers são disponibilizados apenas para pontos comerciais ativos. É necessário ter um estabelecimento comercial regular para participar do programa."
  },
  {
    question: "Qual o prazo de entrega dos produtos?",
    answer: "Nossa logística própria garante a entrega dos produtos em até 7 dias úteis após a confirmação do pedido. Trabalhamos com cronograma fixo para garantir sempre produtos frescos."
  },
  {
    question: "Quais produtos estarão disponíveis no meu freezer?",
    answer: "O mix de produtos é escolhido conforme o perfil do público do seu comércio e da região. Incluímos desde opções populares até produtos premium, zero lactose e zero açúcar, sempre visando maximizar suas vendas."
  },
  {
    question: "Quem faz os pedidos dos produtos?",
    answer: "Nossos vendedores especializados visitam seu estabelecimento a cada 15 dias para fazer os pedidos, oferecer suporte e orientações. Você não precisa se preocupar com isso."
  },
  {
    question: "Preciso pagar algo pelo freezer?",
    answer: "Não! O freezer é fornecido totalmente gratuito em regime de consignado. Você só paga pelos produtos que vender, garantindo zero risco para seu negócio."
  },
  {
    question: "Como funciona o pagamento dos produtos?",
    answer: "Você paga apenas pelos produtos vendidos. Trabalhamos com preços tabelados e justos, garantindo sempre a margem de lucro acordada. O pagamento é realizado no momento da visita quinzenal."
  },
  {
    question: "Posso escolher os sabores que quero no freezer?",
    answer: "Sim! Junto com nossos vendedores, você pode ajustar o mix de produtos conforme a aceitação dos seus clientes. Estamos sempre abertos a sugestões para otimizar suas vendas."
  },
  {
    question: "E se o freezer apresentar defeito?",
    answer: "Temos assistência técnica própria e substituição imediata em caso de problemas. Como o freezer é nosso, toda manutenção e reparo são por nossa conta, sem custo para você."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Dúvidas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Esclarecemos as principais dúvidas sobre nossa parceria. 
            Não encontrou sua resposta? Entre em contato conosco!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-2xl shadow-elegant px-8 border-0"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground shadow-glow">
              <h3 className="text-2xl font-bold mb-4">
                Ainda tem dúvidas?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Nossa equipe está pronta para esclarecer qualquer questão!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-kaskata-yellow text-foreground px-6 py-3 rounded-lg font-bold hover:shadow-elegant transform hover:scale-105 transition-all duration-300">
                  Falar no WhatsApp
                </button>
                <button className="border-2 border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary-foreground hover:text-primary transition-all duration-300">
                  Ligar Agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;