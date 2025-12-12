import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../../constants/translations";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const videoRef = useRef()
    const isMobile = useMediaQuery({ maxWidth: 767 })
    const { language } = useLanguage();
    const t = translations[language];

   useGSAP(() => {
        const chars = document.querySelectorAll(".title .char");
        const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

        gsap.from(chars, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.6,
            delay: 1,
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        })
        .to('.right-leaf', {y: 200}, 0)
        .to('.left-leaf', {y: -200}, 0)

        const startValue = isMobile ? 'top 50%' : 'center 60%';
        const endValue = isMobile ? '120% top' : 'bottom top';

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
            }
        })
        
        if (videoRef.current) {
            videoRef.current.onloadedmetadata = () => {
                tl.to(videoRef.current, {
                    currentTime: videoRef.current.duration,
                })
            }
        }
      
    }, [])
 
    
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">
          {t.hero.title.split('').map((char, index) => (
            <div key={index} className="char text-gradient" style={{display: 'inline-block'}}>{char}</div>
          ))}
        </h1>

        <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf"/>
        <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf"/>
        <div className="body">
            <div className="content">
                <div className="space-y-5 hidden md:block">
                    <p>{t.hero.tagline1}</p>
                    <p className="subtitle">{t.hero.tagline2} <br /> {t.hero.tagline2b}</p>
                </div>
                <div className="view-cocktails">
                    <p className="subtitle">
                        {t.hero.description}
                    </p>
                    <a href="#cocktails">{t.hero.viewCocktails}</a>
                </div>
            </div>
        </div>
      </section>
      <div className="video absolute inset-0">
        <video ref={videoRef} src="/videos/output.mp4" muted playsInline preload='auto'/>
      </div>
    </>
  );
};

export default Hero;
