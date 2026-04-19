import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Logo from '../../assets/logo_white.svg';

const Footer = () => {
  // Link dinâmico para o WhatsApp
  const whatsappUrl = "https://wa.me/551187572651?text=Olá%20Rui,%20vi%20o%20site%20e%20gostaria%20de%20um%20orçamento.";

  return (
    <footer className="bg-[#042c66] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* COLUNA 1: SOBRE / LOGO */}
        <div className="flex flex-col gap-6">
          <img
            src={Logo}
            alt="Logisco Tendas Logo"
            className="h-15 w-auto object-contain cursor-pointer"
          />
          <p className="text-sm text-gray-400 leading-relaxed">
            Especialistas em soluções de cobertura, locação de galpões e estruturas para eventos.
            Segurança e agilidade que o seu projeto merece.
          </p>
          <div className="flex gap-4">
            {/* Ícones de redes sociais (Placeholders) */}
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff7e45] transition-colors cursor-pointer">f</div>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff7e45] transition-colors cursor-pointer">in</div>
          </div>
        </div>

        {/* COLUNA 2: LINKS RÁPIDOS */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-l-4 border-[#ff7e45] pl-3 uppercase text-sm tracking-wider">
            Links Úteis
          </h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <a href="#home" className="hover:text-orange-500 transition-colors flex items-center gap-2">
                <span className="text-orange-500/50">›</span> Início
              </a>
            </li>
            <li>
              <a href="#sobre" className="hover:text-orange-500 transition-colors flex items-center gap-2">
                <span className="text-orange-500/50">›</span> Sobre a Metalonas
              </a>
            </li>
            <li>
              <a href="#modelos" className="hover:text-orange-500 transition-colors flex items-center gap-2">
                <span className="text-orange-500/50">›</span> Galeria de Tendas
              </a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-orange-500 transition-colors flex items-center gap-2">
                <span className="text-orange-500/50">›</span> Nossos Serviços
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-orange-500 transition-colors flex items-center gap-2">
                <span className="text-orange-500/50">›</span> Solicitar Orçamento
              </a>
            </li>
          </ul>
        </div>

        {/* COLUNA 3: CONTATO DIRETO */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-l-4 border-[#ff7e45] pl-3 uppercase text-sm">Fale Conosco</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <EnvelopeIcon className="w-5 h-5 text-[#ff7e45]" />
              <a href="mailto:metalonas@outlook.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                metalonas@outlook.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPinIcon className="w-5 h-5 text-[#ff7e45]" />
              <span className="text-sm text-gray-400">Guarulhos, São Paulo</span>
            </div>
            <div className="flex items-center gap-3">
              <PhoneIcon className="w-5 h-5 text-[#ff7e45]" />
              <span className="text-sm text-gray-400">+55 11 8757-2651</span>
            </div>
          </div>
        </div>

        {/* COLUNA 4: WHATSAPP DO RUI */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold mb-2 border-l-4 border-[#ff7e45] pl-3 uppercase text-sm">Atendimento Rápido</h3>
          <p className="text-xs text-gray-400">Fale diretamente com o Rui Alkimim pelo WhatsApp:</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white py-3 px-6 rounded-lg font-bold flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-lg shadow-green-900/20"
          >
            <span>WhatsApp do Rui</span>
          </a>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Metalonas . Todos os direitos reservados.
        </p>
        <p className="text-xs text-gray-500 uppercase tracking-widest">

        </p>
      </div>
    </footer>
  );
};

export default Footer;