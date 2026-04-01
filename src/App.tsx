import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Zap, Target, BrainCircuit, Users, BookOpenText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const slides = [
  {
    type: 'hero',
    title: "Educação Física Inclusiva na Prática",
    subtitle: "PROPOSTA DE CURSO / OFICINA | Estratégias para atuação com alunos com TEA e TDAH no contexto escolar",
    footer: "Lécia Silva Santos | CREF 007742-G/BA"
  },
  {
    type: 'profile',
    title: "Quem sou eu?",
    content: ["Profissional de Educação Física", "Especialista em Educação Física Escolar", "Foco em Inclusão e Atendimento Especializado", "Preparando você para a realidade dos estágios"],
    image: "https://i.imgur.com/fglgK6V.png"
  },
  {
    type: 'bento',
    title: "O Desafio Real",
    items: [
      { icon: BrainCircuit, title: "Insegurança", desc: "Lidar com TEA/TDAH" },
      { icon: Zap, title: "Falta de Preparo", desc: "Teoria vs. Prática" },
      { icon: Users, title: "Adaptação", desc: "Dificuldade em ajustar atividades" }
    ],
    image: "https://static.escolakids.uol.com.br/2024/07/professora-dando-aula-de-alongamento-durante-a-disciplina-de-educacao-fisica-para-uma-turma-de-criancas-em-um-ginasio.jpg"
  },
  {
    type: 'content',
    title: "Objetivo da Oficina",
    content: ["Atuação com segurança", "Inclusão prática e eficiente", "Desenvolvimento socioemocional"],
  },
  {
    type: 'image-split',
    title: "Entendendo o TEA",
    content: ["Interação Social", "Sensibilidade Sensorial", "Rotina Previsível", "Hiperatividade", "Foco", "Impulsividade"],
    image: "https://blogeducacaofisica.com.br/wp-content/uploads/2024/11/atividades-fisicas-para-criancas-400x250.webp"
  },
  {
    type: 'content',
    title: "Desafios no Dia a Dia",
    content: ["Aluno não participa", "Crises comportamentais", "Turma desorganizada", "Você já passou por isso?"],
  },
  {
    type: 'image-split',
    title: "Estratégias de Ouro",
    content: ["Comunicação clara", "Regras objetivas", "Rotina previsível", "Reforço positivo", "Simplificação", "Redução de estímulos"],
    image: "https://assets.novaescola.org.br/AbUuuTC6Hk9Np3ShRSHaUEaFteK6hQbFHVnXqq9dRDe2TQ7MhYgk7dKj3x8h/gettyimages-187124659.jpg"
  },
  {
    type: 'content',
    title: "Exemplos Práticos",
    content: ["Jogos cooperativos", "Circuitos adaptados", "Níveis de dificuldade"],
  },
  {
    type: 'content',
    title: "Socioemocional",
    content: ["Inclusão", "Pertencimento", "Confiança", "Resolução de conflitos", "Criação colaborativa"],
  },
  {
    type: 'content',
    title: "Resultados",
    content: ["Segurança na atuação", "Estratégias aplicáveis", "Aulas inclusivas"],
  },
  {
    type: 'hero',
    title: "Inclusão é Prática",
    subtitle: "Obrigada!",
    links: [
      { label: "WhatsApp", url: "https://wa.me/5573991132414" },
      { label: "Currículo Lattes", url: "https://wwws.cnpq.br/cvlattesweb/PKG_MENU.menu?f_cod=8AA7724714EE6B4F7F452724C4FBE201#" }
    ]
  }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 flex flex-col font-sans selection:bg-stone-700 selection:text-white">
      <div className="flex-1 flex items-center justify-center p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full max-w-5xl"
          >
            {slides[currentSlide].type === 'hero' && (
              <div className="text-center space-y-6">
                <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-stone-50">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-2xl text-stone-400 font-light">{slides[currentSlide].subtitle}</p>
                {slides[currentSlide].links && (
                  <div className="flex justify-center gap-6 pt-8">
                    {slides[currentSlide].links.map((link, i) => (
                      <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-stone-50 transition-colors font-mono text-sm border-b border-stone-700 pb-1">
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}

            {slides[currentSlide].type === 'profile' && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <img src={slides[currentSlide].image} className="rounded-2xl shadow-lg border border-stone-800" referrerPolicy="no-referrer" />
                <div className="space-y-6">
                  <h2 className="text-4xl font-semibold text-stone-50">{slides[currentSlide].title}</h2>
                  <ul className="space-y-3 text-lg text-stone-300">
                    {slides[currentSlide].content.map((item, i) => <li key={i} className="flex items-center gap-3"><Zap className="text-stone-600" size={18} /> {item}</li>)}
                  </ul>
                </div>
              </div>
            )}

            {slides[currentSlide].type === 'bento' && (
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                  <h2 className="text-4xl font-semibold text-stone-50">{slides[currentSlide].title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {slides[currentSlide].items.map((item, i) => (
                      <div key={i} className="bg-stone-900 p-6 rounded-xl border border-stone-800 space-y-2">
                        <item.icon className="text-stone-600" size={24} />
                        <h3 className="text-lg font-semibold text-stone-100">{item.title}</h3>
                        <p className="text-stone-400 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <img src={slides[currentSlide].image} className="rounded-2xl shadow-lg border border-stone-800 object-cover h-full" referrerPolicy="no-referrer" />
              </div>
            )}

            {slides[currentSlide].type === 'content' && (
              <div className="space-y-8">
                <h2 className="text-4xl font-semibold text-stone-50">{slides[currentSlide].title}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {slides[currentSlide].content.map((item, i) => (
                    <div key={i} className="bg-stone-900 p-6 rounded-xl border border-stone-800 text-lg text-stone-300 flex items-center gap-4">
                      <BookOpenText className="text-stone-600 shrink-0" size={24} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {slides[currentSlide].type === 'image-split' && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-4xl font-semibold text-stone-50">{slides[currentSlide].title}</h2>
                  <ul className="space-y-3 text-lg text-stone-300">
                    {slides[currentSlide].content.map((item, i) => <li key={i} className="flex items-center gap-3"><Target className="text-stone-600" size={18} /> {item}</li>)}
                  </ul>
                </div>
                <img src={slides[currentSlide].image} className="rounded-2xl shadow-lg border border-stone-800" referrerPolicy="no-referrer" />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="p-6 flex items-center justify-between bg-stone-900/30 border-t border-stone-800">
        <div className="text-stone-600 font-mono text-xs">{currentSlide + 1} / {slides.length}</div>
        <div className="flex gap-2">
          <button onClick={prevSlide} disabled={currentSlide === 0} className="p-2 rounded-full bg-stone-800 hover:bg-stone-700 disabled:opacity-30 transition-all"><ChevronLeft size={20} /></button>
          <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="p-2 rounded-full bg-stone-800 hover:bg-stone-700 disabled:opacity-30 transition-all"><ChevronRight size={20} /></button>
        </div>
        <div className="w-48 h-1 bg-stone-800 rounded-full overflow-hidden">
          <motion.div className="h-full bg-stone-600" animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} />
        </div>
      </div>
    </div>
  );
}
