import { openingHours } from "../../constants";
import { socials } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";


const Contact = () => {
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
        <h2>Where to Find Us</h2>
        <div className="">
          <h3>Visit Our Bar</h3>
          <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>
        <div className="">
          <h3>Contact Us</h3>
          <p>+55(61)98154-2702</p>
          <p>geovanigcs.dev@gmail.com</p>
        </div>
        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day}: {time.time}
            </p>
          ))}
        </div>
        <div className="">
            <h3>Socials</h3>
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
