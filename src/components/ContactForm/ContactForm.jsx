import React from 'react';

const ContactForm = () => {
  return (
    <section className="w-full py-20 bg-gray-50" id="contato">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* TCC Insight: O 'action' aponta para o seu endpoint único do Formspree */}
        <form 
          action="https://formspree.io/f/mykljdnr" 
          method="POST"
          className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100"
        >
          <h2 className="text-3xl font-black text-[#1a363a] mb-8 uppercase">Solicitar Orçamento</h2>

          <div className="grid grid-cols-1 gap-6">
            {/* Campo de Nome */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Nome Completo</label>
              <input 
                type="text" 
                name="name" // O Formspree usa esse 'name' para identificar o campo no e-mail
                required
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                placeholder="Ex: João Silva"
              />
            </div>

            {/* Campo de E-mail (Obrigatório pelo Formspree) */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Seu E-mail</label>
              <input 
                type="email" 
                name="email" 
                required
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                placeholder="exemplo@email.com"
              />
            </div>

            {/* Campo de Mensagem */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Detalhes do Pedido</label>
              <textarea 
                name="message" 
                rows="5"
                required
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                placeholder="Descreva o tamanho da tenda ou o tipo de evento..."
              ></textarea>
            </div>

            {/* Botão de Envio */}
            <button 
              type="submit"
              className="bg-[#ff7e45] text-white font-black py-5 px-10 rounded-xl uppercase text-sm tracking-widest hover:bg-[#e66d3a] transition-all shadow-lg shadow-orange-200 active:scale-95"
            >
              Enviar Mensagem agora
            </button>
          </div>
        </form>
        
        <p className="text-center text-gray-400 text-xs mt-6">
          Serviço de processamento seguro via Formspree.
        </p>
      </div>
    </section>
  );
};

export default ContactForm;