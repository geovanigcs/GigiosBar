import { socials } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../../constants/translations";


const Contact = () => {
const { language } = useLanguage();
const t = translations[language];

const openingHours = [
  { day: t.contact.days.monThu, time: "11:00am – 12am" },
  { day: t.contact.days.fri, time: "11:00am – 2am" },
  { day: t.contact.days.sat, time: "9:00am – 2am" },
  { day: t.contact.days.sun, time: "9:00am – 1am" },
];
useGSAP(() => {
    const titleSplit = SplitText.create('#contact h2', {type: 'word'})
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#contact',
            start: 'top center',
        }, ease: 'power1.inOut',
    })
    timeline
    .from(titleSplit.words, {
        opacity: 0, yPercent: 100, stagger: 0.03,
    })
    .from('#contact h3, #contact p', {
        opacity: 0, yPercent: 100, stagger: 0.1,
    })
    .to('#f-right-leaf', {y: '-50', duration: 1,ease: 'power1.inOut'})
    .to('#f-left-leaf', {y: '-50', duration: 1,ease: 'power1.inOut'}, '<')
})

  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
      />
      <div className="content">
        <h2>{t.contact.title}</h2>
        <div className="">
          <h3 clas>{t.contact.visitBar}</h3>
          <a 
            href="https://geovanidev.online/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-yellow transition-colors"
          >
            {t.contact.address}
          </a>
        </div>
        <div className="">
          <h3>{t.contact.contactUs}</h3>
          <p>{t.contact.phone}</p>
          <p>{t.contact.email}</p>
        </div>
        <div>
          <h3>{t.contact.openEveryDay}</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day}: {time.time}
            </p>
          ))}
        </div>
        <div className="">
            <h3>{t.contact.socials}</h3>
            <div className="flex-center gap-5">
                {socials.map((social) => (
                    <a href={social.url} key={social.name} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                        <img src={social.icon} alt={social.name} />
                    </a>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
