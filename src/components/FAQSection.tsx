import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
const faqs = [{
  question: "Posso ter o freezer Kaskata na minha casa?",
  answer: "Não, nossos freezers são disponibilizados apenas para pontos comerciais ativos. É necessário ter um estabelecimento comercial regular para participar do programa."
}, {
  question: "Qual o prazo de entrega dos produtos?",
  answer: "Nossa logística própria garante a entrega dos produtos em até 7 dias úteis após a confirmação do pedido. Trabalhamos com cronograma fixo para garantir sempre produtos frescos."
}, {
  question: "Quais produtos estarão disponíveis no meu freezer?",
  answer: "O mix de produtos é escolhido de acordo com a disponibilidade do cliente, e de acordo com o público e tipo de comércio. Em um mercado com vários check-outs é mais provável que venderá potes variados, em uma mercearia, farmácia ou loja de conveniência é mais provável que terá uma linha completa com picolés, potinhos, potes no freezer horizontal, e também existem comércios que gostam de vender o sorvete em bola na casquinha ou cascão, ou até mesmo açaí no copo."
}, {
  question: "Quem faz os pedidos dos produtos?",
  answer: "Nossos vendedores especializados visitam seu estabelecimento a cada 15 dias para fazer os pedidos, oferecer suporte e orientações. Você não precisa se preocupar com isso."
}, {
  question: "Preciso pagar algo pelo freezer?",
  answer: "Não! O freezer é fornecido em regime de comodato. Você pagará apenas pelos produtos fornecidos no ato da entrega."
}, {
  question: "Como funciona o pagamento dos produtos?",
  answer: "A forma de pagamento é discutida no momento que é feito o cadastro ou pedido, os pagamentos a prazo ou parcelado serão feitos mediante consulta."
}, {
  question: "Posso escolher os sabores que quero no freezer?",
  answer: "Sim! Junto com nossos vendedores, você pode ajustar o mix de produtos conforme a aceitação dos seus clientes. Estamos sempre abertos a sugestões para otimizar suas vendas."
}, {
  question: "E se o freezer apresentar defeito?",
  answer: "Temos assistência técnica própria e substituição imediata em caso de problemas. Como o freezer é nosso, toda manutenção e reparo são por nossa conta, sem custo para você."
}];
const FAQSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-800/30 via-transparent to-indigo-800/30"></div>
      
      {/* Animated mesh gradient overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at 50% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 30% 80%, rgba(255, 255, 0, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)
          `
        }}
      ></motion.div>
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 backdrop-blur-[1px] bg-white/[0.01]"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight"
            style={{
              textShadow: '0 0 30px rgba(255, 255, 0, 0.3), 0 0 60px rgba(255, 255, 0, 0.1)'
            }}
          >
            Dúvidas <motion.span 
              className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >Frequentes</motion.span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto"
          >
            Esclarecemos as principais dúvidas sobre nossa parceria. 
            Não encontrou sua resposta? Entre em contato conosco!
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* FAQ glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-yellow-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
                
                {/* Glassmorphism FAQ item */}
                <AccordionItem 
                  value={`item-${index}`} 
                  className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl shadow-2xl hover:bg-white/10 transition-all duration-300 px-8"
                >
                  <AccordionTrigger className="text-left text-xl font-black text-white hover:text-yellow-400 py-8 transition-colors duration-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80 text-lg leading-relaxed pb-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              {/* CTA glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-yellow-400/30 rounded-3xl blur-2xl scale-110"></div>
              
              {/* Glassmorphism CTA */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 shadow-2xl">
                <h3 className="text-3xl font-black text-white mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Ainda tem dúvidas?
                </h3>
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  Nossa equipe está pronta para esclarecer qualquer questão!
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-purple-900 px-8 py-4 rounded-xl font-black text-lg shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300">
                    Falar no WhatsApp
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default FAQSection;