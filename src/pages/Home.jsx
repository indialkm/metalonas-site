import './Home.css';
import Hero from '../components/Hero/Hero.jsx';
import CTA from '../components/CTA/CTA.jsx';
import Features from '../components/Features/Features.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Header from '../components/Header/Header.jsx'
import Sobre from '../components/Sobre/Sobre.jsx'
import Servico from '../components/Servicos/Servico.jsx'
import ContactForm from '../components/ContactForm/ContactForm.jsx';

function Home() {

    return (
        <>
            <div className="flex flex-col">
                <Header/>
                <Hero />
                <Sobre/>
                <Features />
                <Servico/>
                <ContactForm/>
                <Footer />
            </div>
        </>
    );

};

export default Home;