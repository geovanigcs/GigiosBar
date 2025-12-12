import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../../constants/translations";

const Navbar = () => {
    const { language, toggleLanguage } = useLanguage();
    const t = translations[language];
    
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: "bottom top",
            }
        })
        navTween.fromTo("nav", { backgroundColor: 'transparent' }, {
            backgroundColor: '#00000050',
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: "power1.out",
        })
    })
  return (
    <nav>
        <div className="">
            <a href="#home" className="flex items-center gap-2">
                <img src="/images/logo.png" alt="logo"/>
                <p>Gigio's Bar</p>
            </a>
            <ul>
                <li>
                    <a href="#cocktails">{t.nav.cocktails}</a>
                </li>
                <li>
                    <a href="#about">{t.nav.about}</a>
                </li>
                <li>
                    <a href="#work">{t.nav.work}</a>
                </li>
                <li>
                    <a href="#contact">{t.nav.contact}</a>
                </li>
                <li>
                    <button 
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                        aria-label={language === 'en' ? 'Mudar para Português' : 'Change to English'}
                    >
                        <img 
                            src={language === 'en' ? '/images/br-flag.svg' : '/images/uk-flag.svg'} 
                            alt={language === 'en' ? 'Bandeira do Brasil' : 'UK Flag'}
                            className="w-6 h-4 object-cover rounded"
                        />
                    </button>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;