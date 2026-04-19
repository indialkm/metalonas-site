import React from 'react';

import HeroBackground from '../../assets/Hero_tenda.jpg';

const Hero = () => {
  const bgPolygon = 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)';
  const whatsappUrl = "https://wa.me/551187572651?text=Olá%20Rui,%20vi%20o%20site%20e%20gostaria%20de%20um%20orçamento.";
  return (
    <section className="relative w-full h-screen font-sans overflow-hidden bg-white" id="home">
      <div 
        className="relative w-full h-full bg-[#15489d] flex items-center justify-center px-10"
        style={{ clipPath: bgPolygon }}
      >
        <div 
          className="absolute inset-0 bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(${HeroBackground})`,
            backgroundPosition: 'center', 
            backgroundSize: 'cover',
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white max-w-4xl">
          <p className="text-xs tracking-[0.2em] uppercase opacity-80 mb-6 font-semibold">
           Metalonas - Aluguel de Galpões & Tendas
          </p>
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
           Conheça nossas soluções para <br /> seu evento 
          </h1>
          
          <p className="text-sm md:text-base font-light max-w-2xl mb-12 text-gray-300">
            
          </p>
      
          <button className="bg-[#ff7e45] text-[#1a363a] font-bold py-4 px-10 rounded-full flex items-center gap-3 hover:bg-[#e66d3a] transition-colors group">
           
            <a href={whatsappUrl}>Contato</a>
           
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;