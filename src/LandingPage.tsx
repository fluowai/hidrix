import React from 'react';
import { 
  Droplets, 
  Factory, 
  Settings, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  Mail,
  Menu,
  X,
  Recycle,
  Filter,
  Activity,
  Wrench,
  AlertTriangle
} from 'lucide-react';
import { motion } from 'motion/react';

// Brand Colors Configuration
// Primary Blue: #00548F 
// Accent Green: #7AC142 
// Dark: #0F263A

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#0F263A]/95 backdrop-blur-sm border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              {/* Logo Icon Representation */}
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00548F] to-[#7AC142] rounded-lg transform rotate-3"></div>
                <Droplets className="absolute inset-0 m-auto h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">HIDRIX</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#solucoes" className="hover:text-[#7AC142] transition-colors px-3 py-2 rounded-md text-sm font-medium">Soluções</a>
              <a href="#diferenciais" className="hover:text-[#7AC142] transition-colors px-3 py-2 rounded-md text-sm font-medium">Diferenciais</a>
              <a href="#cases" className="hover:text-[#7AC142] transition-colors px-3 py-2 rounded-md text-sm font-medium">Resultados</a>
              <a href="/app" className="text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium border border-white/20 hover:bg-white/10">
                Área do Cliente
              </a>
              <a href="#contato" className="bg-[#7AC142] hover:bg-[#6ab035] text-white px-4 py-2 rounded-md text-sm font-bold transition-colors shadow-lg shadow-lime-900/20">
                Falar com Especialista
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0F263A] border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#solucoes" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Soluções</a>
            <a href="#diferenciais" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Diferenciais</a>
            <a href="#cases" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Resultados</a>
            <a href="/app" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium border-t border-white/10 mt-2 pt-2">
              Área do Cliente
            </a>
            <a href="#contato" onClick={() => setIsOpen(false)} className="bg-[#7AC142] text-white block px-3 py-2 rounded-md text-base font-medium mt-4 text-center">
              Falar com Especialista
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative bg-[#0F263A] pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F263A] via-[#0F263A]/90 to-[#00548F]/40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="sm:text-center md:max-w-3xl md:mx-auto lg:col-span-7 lg:text-left"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#7AC142]/30 bg-[#7AC142]/10 text-[#7AC142] text-xs font-bold uppercase tracking-wide mb-6">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              +120 Projetos Realizados
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-tight">
              <span className="block">Reduza Custos e Garanta</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#7AC142] to-emerald-400">
                Conformidade Ambiental
              </span>
            </h1>
            <p className="mt-4 text-base text-slate-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 leading-relaxed">
              Soluções de engenharia hídrica personalizadas para eliminar multas, otimizar o consumo de água e transformar efluentes em eficiência operacional.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-md text-white bg-[#00548F] hover:bg-[#004375] md:text-lg shadow-lg shadow-blue-900/50 transition-all transform hover:-translate-y-1"
                >
                  Solicitar Consultoria Técnica
                </a>
                <a
                  href="https://wa.me/5511999999999" 
                  className="inline-flex items-center justify-center px-8 py-4 border border-slate-500 text-base font-bold rounded-md text-slate-200 hover:bg-white/10 md:text-lg transition-all"
                >
                  Falar com Especialista
                </a>
              </div>
              <p className="mt-4 text-sm text-slate-400 flex items-center gap-2 sm:justify-center lg:justify-start">
                <span className="w-2 h-2 bg-[#7AC142] rounded-full animate-pulse"></span>
                Resposta técnica em até 2 horas.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-5"
          >
            <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-white/10 bg-[#0F263A]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00548F] to-[#7AC142]"></div>
              <img
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                src="https://images.unsplash.com/photo-1565514020176-db7033c67564?auto=format&fit=crop&q=80"
                alt="Estação de Tratamento de Água Industrial"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0F263A] via-[#0F263A]/80 to-transparent p-6 pt-20">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#7AC142] rounded-lg">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Monitoramento 24/7</p>
                    <p className="text-slate-300 text-xs">Controle total da sua operação</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  const problems = [
    {
      icon: <AlertTriangle className="h-10 w-10 text-red-500" />,
      title: "Risco de Multas e Embargos",
      description: "O descarte irregular ou fora dos parâmetros pode gerar passivos milionários e paralisar sua fábrica."
    },
    {
      icon: <Droplets className="h-10 w-10 text-blue-500" />,
      title: "Desperdício de Água",
      description: "Processos sem reuso aumentam drasticamente a conta de água e a dependência de concessionárias."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-orange-500" />,
      title: "Altos Custos Operacionais",
      description: "Sistemas descalibrados consomem excesso de químicos e energia, drenando sua margem de lucro."
    },
    {
      icon: <Settings className="h-10 w-10 text-slate-500" />,
      title: "Sistemas Ineficientes",
      description: "ETAs e ETEs antigas ou mal operadas geram água de baixa qualidade, afetando a produção final."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#00548F] tracking-widest uppercase mb-2">Diagnóstico Industrial</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-[#0F263A] mb-4">
            A Ineficiência Hídrica Está <span className="text-red-600">Drenando Seu Lucro?</span>
          </p>
          <p className="max-w-2xl text-lg text-slate-600 mx-auto">
            Identificamos os 4 maiores gargalos que impedem indústrias de atingir a máxima eficiência e segurança ambiental.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-8 border-t-4 border-transparent hover:border-[#00548F] hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6 bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0F263A] mb-3">{problem.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SolutionsSection = () => {
  const solutions = [
    {
      title: "Tratamento de Efluentes",
      desc: "Sistemas físico-químicos e biológicos avançados para adequação total às normas de descarte (CONAMA).",
      icon: <Recycle className="w-6 h-6" />,
      benefit: "Conformidade 100% Garantida"
    },
    {
      title: "Osmose Reversa",
      desc: "Tecnologia de membranas para desmineralização e obtenção de água ultrapura para caldeiras e processos.",
      icon: <Filter className="w-6 h-6" />,
      benefit: "Água de Alta Pureza"
    },
    {
      title: "Ultrafiltração",
      desc: "Remoção absoluta de sólidos suspensos, bactérias e vírus. Ideal para pré-tratamento e reuso.",
      icon: <Droplets className="w-6 h-6" />,
      benefit: "Máxima Eficiência de Filtração"
    },
    {
      title: "Operação de ETA/ETE",
      desc: "Terceirização completa (O&M). Nossa equipe opera sua estação, garantindo performance e laudos.",
      icon: <Settings className="w-6 h-6" />,
      benefit: "Foco no seu Core Business"
    },
    {
      title: "Aluguel de Equipamentos",
      desc: "Estações móveis e skids de tratamento para demandas emergenciais ou temporárias sem CAPEX.",
      icon: <Factory className="w-6 h-6" />,
      benefit: "Zero Investimento Inicial"
    },
    {
      title: "Assistência Técnica",
      desc: "Manutenção preventiva, corretiva, limpeza de membranas e consultoria em engenharia ambiental.",
      icon: <Wrench className="w-6 h-6" />,
      benefit: "Suporte Especializado 24/7"
    }
  ];

  return (
    <section id="solucoes" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#7AC142] tracking-widest uppercase mb-2">Nossas Soluções</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-[#0F263A]">
            Engenharia Aplicada ao Resultado
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((sol, idx) => (
            <div key={idx} className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-[#00548F] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#00548F]/10 to-transparent rounded-tr-2xl -mr-[1px] -mt-[1px]"></div>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-[#0F263A] rounded-lg text-white group-hover:bg-[#00548F] transition-colors shadow-lg">
                  {sol.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[#0F263A] mb-3">{sol.title}</h3>
              
              <div className="mb-4">
                <span className="inline-block px-2 py-1 bg-[#7AC142]/10 text-[#5a962a] text-xs font-bold uppercase rounded-md">
                  {sol.benefit}
                </span>
              </div>
              
              <p className="text-slate-600 mb-8 text-sm leading-relaxed flex-grow">
                {sol.desc}
              </p>
              
              <a href="#contato" className="mt-auto inline-flex items-center justify-center w-full px-4 py-2 border border-[#00548F] text-[#00548F] font-bold text-sm rounded-md hover:bg-[#00548F] hover:text-white transition-all group-hover:shadow-md">
                Quero essa solução <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Differentiators = () => {
  return (
    <section id="diferenciais" className="py-24 bg-[#0F263A] text-white scroll-mt-24 relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#00548F] rounded-full opacity-20 blur-3xl"></div>
       <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-[#7AC142] rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-6">
              Por que a indústria confia na <span className="text-[#7AC142]">HIDRIX</span>?
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Não entregamos apenas equipamentos. Entregamos performance operacional, redução de custos e segurança jurídica ambiental para o seu negócio.
            </p>
            
            <div className="space-y-6">
              {[
                "Projetos 100% personalizados para sua demanda hídrica",
                "Engenharia especializada com foco em redução de OPEX",
                "Atendimento técnico consultivo e próximo",
                "Tecnologia de ponta para máxima eficiência"
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-[#7AC142]" />
                  </div>
                  <p className="ml-4 text-lg text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-4xl font-bold text-[#7AC142] mb-2">+30%</div>
                <div className="text-sm text-slate-300">Economia média operacional gerada</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-4xl font-bold text-[#7AC142] mb-2">100%</div>
                <div className="text-sm text-slate-300">Conformidade com normas ambientais</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-4xl font-bold text-[#7AC142] mb-2">24/7</div>
                <div className="text-sm text-slate-300">Suporte técnico disponível</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-4xl font-bold text-[#7AC142] mb-2">+120</div>
                <div className="text-sm text-slate-300">Projetos entregues com sucesso</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  return (
    <section id="cases" className="py-24 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-[#0F263A]">Resultados que Falam por Si</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative hover:shadow-md transition-shadow">
            <div className="absolute top-0 left-0 transform -translate-x-2 -translate-y-2">
               <div className="bg-[#00548F] text-white text-xs font-bold px-3 py-1 rounded-br-lg rounded-tl-lg shadow-sm">CASE SUCESSO</div>
            </div>
            <div className="flex text-[#7AC142] mb-4 mt-2">
              {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
            </div>
            <p className="text-slate-600 italic mb-6 text-lg leading-relaxed">
              "A implementação do sistema de reuso da Hidrix reduziu nosso consumo de água potável em 40% já no primeiro mês. O ROI foi surpreendente e o suporte é excelente."
            </p>
            <div className="flex items-center border-t border-slate-100 pt-4">
              <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-[#0F263A] text-lg">
                JD
              </div>
              <div className="ml-4">
                <p className="text-sm font-bold text-[#0F263A]">João Dantas</p>
                <p className="text-sm text-slate-500">Diretor Industrial, Metalúrgica ABC</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative hover:shadow-md transition-shadow">
             <div className="absolute top-0 left-0 transform -translate-x-2 -translate-y-2">
               <div className="bg-[#00548F] text-white text-xs font-bold px-3 py-1 rounded-br-lg rounded-tl-lg shadow-sm">CASE SUCESSO</div>
            </div>
            <div className="flex text-[#7AC142] mb-4 mt-2">
              {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
            </div>
            <p className="text-slate-600 italic mb-6 text-lg leading-relaxed">
              "Estávamos com problemas sérios de descarte de efluentes. A equipe da Hidrix não só resolveu o problema técnico como nos ajudou em toda a regularização ambiental."
            </p>
            <div className="flex items-center border-t border-slate-100 pt-4">
              <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-[#0F263A] text-lg">
                MR
              </div>
              <div className="ml-4">
                <p className="text-sm font-bold text-[#0F263A]">Maria Rodrigues</p>
                <p className="text-sm text-slate-500">Gerente de Meio Ambiente, Indústria Química XYZ</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Logos Placeholder */}
        <div className="mt-20">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-wider mb-8">
            Empresas que confiam na Hidrix
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simulated Logos */}
            <div className="flex items-center gap-2 group cursor-default">
                <div className="w-8 h-8 bg-slate-400 rounded group-hover:bg-[#00548F] transition-colors"></div>
                <span className="text-xl font-bold text-slate-600 group-hover:text-[#0F263A] transition-colors">INDÚSTRIA A</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
                <div className="w-8 h-8 bg-slate-400 rounded-full group-hover:bg-[#7AC142] transition-colors"></div>
                <span className="text-xl font-bold text-slate-600 group-hover:text-[#0F263A] transition-colors">FABRICA B</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
                <div className="w-8 h-8 bg-slate-400 rotate-45 group-hover:bg-[#00548F] transition-colors"></div>
                <span className="text-xl font-bold text-slate-600 group-hover:text-[#0F263A] transition-colors">QUÍMICA C</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
                <div className="w-8 h-8 bg-slate-400 rounded-tr-xl group-hover:bg-[#7AC142] transition-colors"></div>
                <span className="text-xl font-bold text-slate-600 group-hover:text-[#0F263A] transition-colors">TEXTIL D</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const UrgencySection = () => {
  return (
    <section className="bg-gradient-to-r from-[#0F263A] to-[#00548F] py-16 border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block p-3 bg-red-500/20 rounded-full mb-6">
          <AlertTriangle className="w-8 h-8 text-red-400" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Evite prejuízos futuros e garanta a continuidade da sua operação.
        </h2>
        <p className="text-blue-100 mb-8 text-lg">
          Empresas que antecipam adequações ambientais evitam multas milionárias e paradas não programadas. Não espere a fiscalização bater à sua porta.
        </p>
        <a 
          href="#contato"
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-md text-[#0F263A] bg-white hover:bg-slate-100 shadow-xl transition-all transform hover:-translate-y-1"
        >
          Agendar Avaliação Técnica Gratuita
        </a>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="contato" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F263A] rounded-3xl shadow-2xl overflow-hidden border border-slate-800">
          <div className="lg:grid lg:grid-cols-12">
            {/* Info Side */}
            <div className="lg:col-span-5 p-10 lg:p-16 text-white flex flex-col justify-center bg-[#0F263A] relative overflow-hidden">
              {/* Decorative pattern */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#7AC142] rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-[#00548F] rounded-full opacity-20 blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-6">
                  Solicite uma Proposta <span className="text-[#7AC142]">Personalizada</span>
                </h2>
                <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                  Nossos engenheiros analisarão sua demanda e apresentarão a solução com melhor custo-benefício para sua empresa.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center group">
                    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-[#7AC142]/20 transition-colors border border-white/10">
                      <Phone className="h-6 w-6 text-[#7AC142]" />
                    </div>
                    <span className="ml-4 text-lg font-medium">(11) 99999-9999</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-[#7AC142]/20 transition-colors border border-white/10">
                      <Mail className="h-6 w-6 text-[#7AC142]" />
                    </div>
                    <span className="ml-4 text-lg font-medium">contato@hidrix.com.br</span>
                  </div>
                </div>
                
                <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => <span key={i} className="text-[#7AC142] text-xs">★</span>)}
                  </div>
                  <p className="text-sm text-slate-300 italic">
                    "O atendimento da Hidrix foi fundamental para evitarmos uma multa ambiental de alto valor. Recomendo fortemente."
                  </p>
                  <p className="text-xs text-[#7AC142] font-bold mt-3 uppercase tracking-wide">
                    - Diretor de Operações, Setor Alimentício
                  </p>
                </div>
              </div>
            </div>
            
            {/* Form Side */}
            <div className="lg:col-span-7 bg-white p-10 lg:p-16">
              {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#0F263A] mb-4">Solicitação Recebida!</h3>
                  <p className="text-slate-600 max-w-md mx-auto text-lg mb-8">
                    Agradecemos o interesse. Um de nossos engenheiros especialistas entrará em contato em breve para entender melhor sua necessidade.
                  </p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="text-[#00548F] font-bold hover:text-[#004375] underline decoration-2 underline-offset-4"
                  >
                    Enviar nova solicitação
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1">Nome Completo</label>
                      <input required type="text" id="name" className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-[#00548F] focus:ring-[#00548F] sm:text-sm p-3 border bg-slate-50 transition-colors" placeholder="Digite seu nome" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-bold text-slate-700 mb-1">Empresa</label>
                      <input required type="text" id="company" className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-[#00548F] focus:ring-[#00548F] sm:text-sm p-3 border bg-slate-50 transition-colors" placeholder="Nome da empresa" />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-bold text-slate-700 mb-1">Cargo</label>
                      <input required type="text" id="role" className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-[#00548F] focus:ring-[#00548F] sm:text-sm p-3 border bg-slate-50 transition-colors" placeholder="Seu cargo" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-1">E-mail Corporativo</label>
                      <input required type="email" id="email" className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-[#00548F] focus:ring-[#00548F] sm:text-sm p-3 border bg-slate-50 transition-colors" placeholder="voce@empresa.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-1">Telefone / WhatsApp</label>
                      <input required type="tel" id="phone" className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-[#00548F] focus:ring-[#00548F] sm:text-sm p-3 border bg-slate-50 transition-colors" placeholder="(00) 00000-0000" />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="solution" className="block text-sm font-bold text-slate-700 mb-1">Tipo de Solução Desejada</label>
                      <div className="relative">
                        <select id="solution" defaultValue="" className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-[#00548F] focus:ring-[#00548F] sm:text-sm p-3 border bg-slate-50 appearance-none transition-colors">
                          <option value="" disabled>Selecione uma opção</option>
                          <option>Tratamento de Efluentes Industriais</option>
                          <option>Osmose Reversa</option>
                          <option>Ultrafiltração</option>
                          <option>Operação de ETA/ETE</option>
                          <option>Aluguel de Equipamentos</option>
                          <option>Assistência Técnica</option>
                          <option>Outros</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="challenge" className="block text-sm font-bold text-slate-700 mb-1">Desafio Atual</label>
                      <textarea id="challenge" rows={3} className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-[#00548F] focus:ring-[#00548F] sm:text-sm p-3 border bg-slate-50 transition-colors" placeholder="Descreva brevemente sua necessidade ou problema atual..."></textarea>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-xl text-lg font-bold text-white bg-[#00548F] hover:bg-[#004375] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00548F] transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {formStatus === 'submitting' ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </span>
                      ) : 'Receber Proposta Personalizada'}
                    </button>
                    <p className="mt-4 text-xs text-center text-slate-500 flex items-center justify-center">
                      <ShieldCheck className="inline w-4 h-4 mr-1.5 text-green-500" />
                      Seus dados estão 100% seguros. Respeitamos a LGPD.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0F263A] text-slate-300 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00548F] to-[#7AC142] rounded-lg transform rotate-3"></div>
                <Droplets className="absolute inset-0 m-auto h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-2xl text-white">HIDRIX</span>
            </div>
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              Soluções sustentáveis para tratamento de água e efluentes. Tecnologia e engenharia a favor da eficiência do seu negócio.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Soluções</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#7AC142] transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2 text-[#7AC142]"/> Tratamento de Efluentes</a></li>
              <li><a href="#" className="hover:text-[#7AC142] transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2 text-[#7AC142]"/> Osmose Reversa</a></li>
              <li><a href="#" className="hover:text-[#7AC142] transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2 text-[#7AC142]"/> Ultrafiltração</a></li>
              <li><a href="#" className="hover:text-[#7AC142] transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2 text-[#7AC142]"/> Aluguel de Equipamentos</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                 <div className="mt-1 mr-3 text-[#7AC142]"><Factory className="w-4 h-4"/></div>
                 <span>Av. Industrial, 1000 - São Paulo, SP</span>
              </li>
              <li className="flex items-center">
                 <div className="mr-3 text-[#7AC142]"><Mail className="w-4 h-4"/></div>
                 <span>contato@hidrix.com.br</span>
              </li>
              <li className="flex items-center">
                 <div className="mr-3 text-[#7AC142]"><Phone className="w-4 h-4"/></div>
                 <span>(11) 99999-9999</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-slate-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Hidrix Soluções Sustentáveis. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 scroll-smooth">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionsSection />
        <Differentiators />
        <SocialProof />
        <UrgencySection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
