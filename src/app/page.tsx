'use client';

import { useState } from 'react';
import { BookOpen, Clock, Users, Star, CheckCircle, Target, Zap, Award, ArrowRight, Menu, X, Play, Calendar, TrendingUp } from 'lucide-react';

export default function RedaFacilPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta-section');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMetodo = () => {
    const metodSection = document.getElementById('metodo');
    if (metodSection) {
      metodSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/a622a52d-eeac-48a1-a240-2d6c48a1d1a6.jpg" 
                alt="RedaFácil Logo" 
                className="h-16 w-auto filter brightness-110 contrast-110 drop-shadow-lg"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-800 hover:text-red-600 font-bold transition-colors text-lg">Início</a>
              <a href="#metodo" className="text-gray-800 hover:text-red-600 font-bold transition-colors text-lg">Método</a>
              <a href="#beneficios" className="text-gray-800 hover:text-red-600 font-bold transition-colors text-lg">Benefícios</a>
              <a href="#depoimentos" className="text-gray-800 hover:text-red-600 font-bold transition-colors text-lg">Depoimentos</a>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/20">
              <div className="flex flex-col space-y-4">
                <a href="#inicio" className="text-gray-800 hover:text-red-600 font-bold text-lg">Início</a>
                <a href="#metodo" className="text-gray-800 hover:text-red-600 font-bold text-lg">Método</a>
                <a href="#beneficios" className="text-gray-800 hover:text-red-600 font-bold text-lg">Benefícios</a>
                <a href="#depoimentos" className="text-gray-800 hover:text-red-600 font-bold text-lg">Depoimentos</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-yellow-400 via-yellow-300 to-orange-400 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Zap className="h-5 w-5 text-red-600 mr-2" />
                <span className="text-red-700 font-semibold">Método Revolucionário</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-red-600">Reda</span>
                <span className="text-purple-700">Fácil</span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
                Domine a Redação do ENEM em Apenas 
                <span className="text-red-600"> 7 Dias!</span>
              </h2>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Para quem não tem tempo de estudar por conta do trabalho ou família. 
                Método comprovado que já ajudou <strong>mais de 10.000 estudantes</strong> 
                a conquistarem notas acima de 900 na redação.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={scrollToMetodo}
                  className="bg-white/80 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300"
                >
                  Ver Como Funciona
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Sem mensalidade</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Garantia de 30 dias</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Suporte 24/7</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-full mb-4">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Resultados Comprovados</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                    <div className="text-3xl font-bold text-red-600 mb-2">10.000+</div>
                    <div className="text-gray-700 font-medium">Alunos Aprovados</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                    <div className="text-3xl font-bold text-purple-600 mb-2">900+</div>
                    <div className="text-gray-700 font-medium">Nota Média</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                    <div className="text-3xl font-bold text-orange-600 mb-2">7</div>
                    <div className="text-gray-700 font-medium">Dias para Dominar</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                    <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                    <div className="text-gray-700 font-medium">Satisfação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Você se identifica com alguma dessas situações?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Falta de Tempo</h3>
              <p className="text-gray-600 leading-relaxed">
                Trabalha ou cuida da família e não consegue dedicar horas estudando redação todos os dias.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Métodos Confusos</h3>
              <p className="text-gray-600 leading-relaxed">
                Já tentou vários cursos e métodos, mas continua com dificuldades para estruturar uma boa redação.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pressão do ENEM</h3>
              <p className="text-gray-600 leading-relaxed">
                Sente ansiedade pensando na redação do ENEM e precisa de um método que realmente funcione.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section id="metodo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              O Método <span className="text-red-600">Reda</span><span className="text-purple-600">Fácil</span> em 7 Dias
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um cronograma simples e eficaz que se adapta à sua rotina corrida
            </p>
          </div>

          <div className="grid lg:grid-cols-7 gap-4">
            {[
              { day: 1, title: "Estrutura Base", desc: "Aprenda a estrutura fundamental da redação ENEM", color: "from-red-500 to-red-600" },
              { day: 2, title: "Introdução Perfeita", desc: "Domine a arte de criar introduções impactantes", color: "from-orange-500 to-orange-600" },
              { day: 3, title: "Desenvolvimento", desc: "Técnicas para argumentar de forma convincente", color: "from-yellow-500 to-yellow-600" },
              { day: 4, title: "Conclusão Nota 1000", desc: "Finalize com propostas de intervenção eficazes", color: "from-green-500 to-green-600" },
              { day: 5, title: "Conectivos e Coesão", desc: "Use conectivos como um expert em redação", color: "from-blue-500 to-blue-600" },
              { day: 6, title: "Prática Intensiva", desc: "Escreva sua primeira redação completa", color: "from-indigo-500 to-indigo-600" },
              { day: 7, title: "Revisão e Correção", desc: "Aprenda a revisar e corrigir seus próprios textos", color: "from-purple-500 to-purple-600" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100">
                <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  <span className="text-white font-bold text-lg">{item.day}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://kiwify.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-block"
            >
              GARANTA SUA VAGA AGORA - OFERTA LIMITADA!
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Por que o RedaFácil é Diferente?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolvido especialmente para quem tem pouco tempo e precisa de resultados rápidos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Apenas 30min/dia",
                desc: "Estude no seu tempo livre, sem comprometer trabalho ou família",
                color: "text-red-600"
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Resultados Rápidos",
                desc: "Veja sua evolução já nos primeiros dias de aplicação do método",
                color: "text-orange-600"
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Material Completo",
                desc: "Apostilas, vídeos, exercícios e correções personalizadas",
                color: "text-purple-600"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Suporte Especializado",
                desc: "Tire dúvidas com professores experientes em redação ENEM",
                color: "text-green-600"
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Método Comprovado",
                desc: "Mais de 10.000 alunos aprovados com notas acima de 900",
                color: "text-blue-600"
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Foco no ENEM",
                desc: "100% direcionado para os critérios de correção do ENEM",
                color: "text-indigo-600"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 ${benefit.color}`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              O que nossos alunos dizem
            </h2>
            <p className="text-xl text-gray-600">
              Histórias reais de quem transformou sua redação em apenas 7 dias
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                role: "Aprovada em Medicina",
                score: "980",
                text: "Trabalho 8h por dia e tenho dois filhos. O RedaFácil me permitiu estudar nos intervalos e consegui 980 na redação!",
                image: "👩‍⚕️"
              },
              {
                name: "João Santos",
                role: "Aprovado em Engenharia",
                score: "940",
                text: "Sempre tive dificuldade com redação. Em 7 dias aprendi mais do que em meses de outros cursos. Método incrível!",
                image: "👨‍🔧"
              },
              {
                name: "Ana Costa",
                role: "Aprovada em Direito",
                score: "960",
                text: "O cronograma de 7 dias é perfeito para quem trabalha. Consegui me organizar e alcançar minha meta na redação.",
                image: "👩‍💼"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-green-600 font-bold text-lg">Nota: {testimonial.score}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="py-20 bg-gradient-to-r from-red-600 via-purple-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Transforme sua Redação em 7 Dias!
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Junte-se a mais de 10.000 estudantes que já conquistaram suas aprovações com o método RedaFácil
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">🎯</div>
                <div className="text-lg font-semibold">Método Comprovado</div>
                <div className="text-sm opacity-90">Resultados em 7 dias</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">⚡</div>
                <div className="text-lg font-semibold">Acesso Imediato</div>
                <div className="text-sm opacity-90">Comece hoje mesmo</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">🛡️</div>
                <div className="text-lg font-semibold">Garantia Total</div>
                <div className="text-sm opacity-90">30 dias para testar</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <a 
              href="https://kiwify.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto"
            >
              <Calendar className="h-6 w-6 mr-3" />
              GARANTA SUA VAGA AGORA - OFERTA LIMITADA!
            </a>
            
            <p className="text-white/80 text-sm">
              ⏰ Oferta por tempo limitado • 🔒 Pagamento 100% seguro • ✅ Sem mensalidade
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/a622a52d-eeac-48a1-a240-2d6c48a1d1a6.jpg" 
                alt="RedaFácil Logo" 
                className="h-12 w-auto mb-4 filter brightness-110 contrast-110"
              />
              <p className="text-gray-400 leading-relaxed">
                Transformando a vida de estudantes através de um método revolucionário de ensino de redação.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Método</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Como Funciona</a></li>
                <li><a href="#" className="hover:text-white transition-colors">7 Dias de Conteúdo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Material Didático</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Suporte</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Depoimentos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Garantia</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RedaFácil. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}