import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Logo from '../../assets/logo_white.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Função para fechar o menu mobile ao clicar em um link
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="w-full flex flex-col font-sans shadow-lg sticky top-0 z-[100]">

            {/* MAIN NAV */}
            <nav className="flex items-center justify-between bg-[#15489d] h-20 text-white relative z-50">

                {/* Logo */}
                <div className="px-6 flex items-center">
                    <a href="#home">
                        <img
                            src={Logo}
                            alt="Metalonas Logo"
                            className="h-12 w-auto object-contain cursor-pointer"
                        />
                    </a>
                </div>

                {/* Desktop Menu - Substituído por <a> com href */}
                <ul className="hidden lg:flex items-center gap-8 font-semibold uppercase text-sm">
                    <li><a href="#home" className="hover:text-orange-400 transition cursor-pointer">Home</a></li>
                    <li><a href="#sobre" className="hover:text-orange-400 transition cursor-pointer">Sobre</a></li>
                    <li><a href="#modelos" className="hover:text-orange-400 transition cursor-pointer">Galeria</a></li>
                    <li><a href="#servicos" className="hover:text-orange-400 transition cursor-pointer">Serviços</a></li>
                    <li><a href="#contato" className="bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600 transition cursor-pointer">Orçamento</a></li>
                </ul>

                {/* Right Section: Phone + Mobile Toggle */}
                <div className="flex items-center h-full">
                    <div className="hidden xl:flex items-center gap-3 px-6 border-r border-white/10 h-1/2">
                        <PhoneIcon className="w-6 h-6 text-orange-500" />
                        <div className="text-[10px] leading-tight">
                            <p className="opacity-60">Fale com o Rui</p>
                            <p className="font-bold text-sm text-white">11 98757-2651</p>
                        </div>
                    </div>

                    {/* Botão de Menu Mobile */}
                    <button
                        className="lg:hidden p-4 text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU (Overlay) */}
            <div className={`
                lg:hidden absolute w-full bg-[#15489d] transition-all duration-300 ease-in-out z-40 shadow-2xl
                ${isOpen ? 'top-20 opacity-100' : 'top-[-400px] opacity-0'}
            `}>
                <ul className="flex flex-col p-6 gap-6 font-semibold uppercase border-t border-white/10 text-white">
                    <li><a href="#home" onClick={closeMenu} className="hover:text-orange-400 block">Home</a></li>
                    <li><a href="#sobre" onClick={closeMenu} className="hover:text-orange-400 block">Sobre</a></li>
                    <li><a href="#modelos" onClick={closeMenu} className="hover:text-orange-400 block">Galeria</a></li>
                    <li><a href="#servicos" onClick={closeMenu} className="hover:text-orange-400 block">Serviços</a></li>
                    <li><a href="#contato" onClick={closeMenu} className="text-orange-400 block">Orçamento</a></li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;