import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// Importando todas as imagens do diretório assets
import tenda01 from '../../assets/tenda01.jpeg';
import tenda02 from '../../assets/tenda02.jpeg';
import tenda04 from '../../assets/tenda04.jpeg';
import tenda05 from '../../assets/tenda05.jpeg';
import tenda06 from '../../assets/tenda06.jpeg';
import tenda07 from '../../assets/tenda07.jpeg';
import tenda08 from '../../assets/tenda08.jpeg';
import tenda09 from '../../assets/tenda09.jpeg';
import tenda10 from '../../assets/tenda10.jpeg';
import tenda11 from '../../assets/tenda11.jpeg';

const Features = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mapeando as imagens para os slides
   const slides = [
    { id: 1, img: tenda01, title: "Soluções em Coberturas", desc: "Estruturas de alta resistência projetadas para oferecer segurança e proteção total ao seu espaço." },
    { id: 2, img: tenda02, title: "Qualidade Metalonas", desc: "Fabricação com materiais de primeira linha, garantindo durabilidade e excelente acabamento." },
    { id: 3, img: tenda04, title: "Montagem Profissional", desc: "Equipe técnica especializada e treinada para realizar montagens ágeis e seguras em qualquer terreno." },
    { id: 4, img: tenda05, title: "Projetos Sob Medida", desc: "Desenvolvemos coberturas personalizadas para atender exatamente às dimensões da sua necessidade." },
    { id: 5, img: tenda06, title: "Infraestrutura Completa", desc: "Equipamentos próprios e logística eficiente para atender condomínios, construtoras e eventos." },
    { id: 6, img: tenda07, title: "Segurança Certificada", desc: "Rigor técnico em cada detalhe da estrutura, seguindo todas as normas de segurança vigentes." },
    { id: 7, img: tenda08, title: "Versatilidade e Estilo", desc: "Soluções versáteis que se adaptam a diferentes tipos de eventos e necessidades industriais." },
    { id: 8, img: tenda09, title: "Resistência Garantida", desc: "Lonas de alta densidade e estruturas metálicas tratadas para suportar diversas condições climáticas." },
    { id: 9, img: tenda10, title: "Atendimento Familiar", desc: "O compromisso da empresa em entregar o melhor serviço com a confiança que você merece." },
    { id: 10, img: tenda11, title: "Logística Especializada", desc: "Pronto atendimento e pontualidade na entrega e retirada das estruturas em toda a região." },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="w-full py-12 md:py-24 bg-white overflow-hidden" id="modelos">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <span className="text-orange-500 font-black text-xs uppercase tracking-[0.3em] bg-orange-50 px-4 py-2 rounded-full">
            Nosso Portfólio
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#042c66] mt-6 uppercase italic tracking-tighter">
            Galeria <span className="text-orange-500">Metalonas</span>
          </h2>
        </div>

        <div className="relative group">
          <div className="overflow-hidden rounded-[40px] shadow-2xl bg-[#042c66]">
            <div 
              className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={slide.id} className="min-w-full flex flex-col md:flex-row h-auto md:h-[600px]">
                  
                  {/* FOTO: Ocupa a maior parte e usa object-cover */}
                  <div className="w-full h-[350px] md:h-full md:w-2/3 relative overflow-hidden">
                    <img 
                      src={slide.img} 
                      alt={slide.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                    />
                    {/* Overlay para dar um tchan no mobile */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#042c66]/50 to-transparent md:hidden"></div>
                  </div>

                  {/* TEXTO: Lado direito com fundo escuro profissional */}
                  <div className="w-full md:w-1/3 p-10 md:p-14 flex flex-col justify-center bg-[#042c66] text-white">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-1 bg-orange-500"></div>
                      <span className="text-orange-400 font-bold text-sm tracking-widest">
                        {String(index + 1).padStart(2, '0')} / {slides.length}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-black mb-6 uppercase leading-tight">
                      {slide.title}
                    </h3>
                    
                    <p className="text-blue-100/70 text-base leading-relaxed mb-10 font-light">
                      {slide.desc}
                    </p>
                    
                    <a 
                      href="#contato"
                      className="w-full md:w-max bg-orange-500 text-white font-black py-4 px-10 rounded-xl hover:bg-orange-600 transition-all uppercase text-xs tracking-widest text-center shadow-lg shadow-orange-900/20"
                    >
                      Solicitar Orçamento
                    </a>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* NAVEGAÇÃO CUSTOMIZADA */}
          <div className="hidden md:flex justify-between absolute top-1/2 w-full -translate-y-1/2 px-4 pointer-events-none">
            <button 
              onClick={prevSlide}
              className="pointer-events-auto bg-white p-5 rounded-2xl shadow-2xl text-[#042c66] hover:bg-orange-500 hover:text-white transition-all -ml-10"
            >
              <ChevronLeftIcon className="w-6 h-6 stroke-[3px]" />
            </button>
            <button 
              onClick={nextSlide}
              className="pointer-events-auto bg-white p-5 rounded-2xl shadow-2xl text-[#042c66] hover:bg-orange-500 hover:text-white transition-all -mr-10"
            >
              <ChevronRightIcon className="w-6 h-6 stroke-[3px]" />
            </button>
          </div>

          {/* DOTS MODERNOS */}
          <div className="flex justify-center gap-3 mt-10">
            {slides.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-500 ${currentSlide === idx ? 'w-12 bg-orange-500' : 'w-2 bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;