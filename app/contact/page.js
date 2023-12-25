import Construction from "../components/construction";
import Divider from '../components/divider';
import ContactForm from "../components/contactform";

const Contact = () => {
  return (
    <article>
      <Divider color={"white"} />
      <section className='background-section py-8 mx-8 rounded'>
        <h2 className='text-center text-white font-extrabold text-4xl'>Contact Us</h2>
      </section>
      <Divider color={"white"} />
      <section className='background-section flex justify-between py-8 px-8 mx-8 rounded'>
        <h2 className='text-white font-extrabold text-4xl'>Our Links</h2>
        <div className="flex">
          <a target="_blank" href="https://www.instagram.com/ftc14903/?hl=en"><img className="h-8 w-8 mr-4 rounded rotate-on-hover" src="/Instagram.png" alt="Instagram" /></a>
          <a target="_blank" href="https://www.youtube.com/@14903"><img className="h-8 w-8 mr-4 rounded rotate-on-hover" src="/Youtube.png" alt="Youtube" /></a>
          <a href="mailto:bessin.raphael@gmail.com"><img className="h-8 w-8 rounded rotate-on-hover" src="/Mail.png" alt="Email" /></a>
        </div>
      </section>
      <Divider color={"white"} />
      <ContactForm />
      <Divider color={"white"} />
    </article>
  );
};

export default Contact;