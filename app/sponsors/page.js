import Divider from '../components/divider';
import Identity from "../components/identity";
import Link from 'next/link';

const Sponsors = () => {
  return (
    <article>
      <Divider color={"white"} />
      <section className='background-section py-8 mx-8 rounded'>
        <h2 className='text-center text-white font-extrabold text-4xl'>Sponsors</h2>
      </section>
      <Divider color={"white"} />
      <section className="flex justify-center items-align mx-8 px-24 sm:px-48 lg:px-96">
        <a className="w-full rounded" target="_blank" href="https://www.gofundme.com/f/sharkbots-attend-2023-first-world-championship?member=25601301&utm_campaign=p_cp+share-sheet&utm_content=undefined&utm_medium=copy_link_all&utm_source=customer&utm_term=undefined"><button className="bg-green-700 text-white font-extrabold hover:scale-105 transition-transform w-full rounded py-4">Donate Now</button></a>
      </section>
      <Divider color={"white"} />
      <section className='background-section py-8 mx-8 rounded'>
        <h2 className='text-center text-white font-extrabold text-4xl'>Thank you to our generous sponsors for their contributions!</h2>
      </section>
      <section className="flex grid grid-cols-4 gap-x-4 gap-y-8 py-8 px-8 mx-8 rounded">
        <Identity name="Scattered Books" job="" photoURL="/Sponsors/ScatteredBooks.png" />
        <Identity name="IGUS" job="" photoURL="/Sponsors/IGUS.png" />
        <Identity name="Green Life" job="" photoURL="/Sponsors/GreenLife.png" />
        <Identity name="VPS" job="" photoURL="/Sponsors/VPS.jpeg" />
      </section>
      <section className='background-section py-8 px-4 mx-8 rounded'>
        <h2 className='text-white font-extrabold text-4xl'>Why support us?</h2>
        <br></br>
        <p className='text-white text-xl'>
          We are a newly established, local robotics team called the SharkBots. For this upcoming year, we are seeking out a potential sponsorship from your business.  
        </p>
        <br></br>
        <p className='text-white text-xl'>
          As a team, we compete in an international robotics competition that is known as the FIRST Tech Challenge or FTC. FTC is a yearly competition that uses STEM elements (Science, Technology, Engineering, and Mathematics) to encourage students to have careers in robotics and science. Each year, thousands of teams of up to 20 students design, build and program a robot to complete various tasks in a competition setting. Students also are educated on other important values in life that include cooperation, teamwork, dedication, and professionalism. More information about FIRST Tech Challenge can be found at https://www.firstinspires.org/robotics/ftc. 
        </p>
        <br></br>
        <p className='text-white text-xl'>
          As part of the program, we participate in outreach to expand FIRST as well as to educate and help students to learn and partake in STEM. This year, we are making a concerted effort to address the issue of equity when it comes to technology and STEM education, particularly in underserved communities. Not only have we worked with local centers such as the Carver Center in Portchester and the Mount Kisco Child Care Center to provide free STEM education and equipment, but we have also taken our efforts internationally to do the same by helping schools in Africa, specifically in Burkina Faso and Tunisia. We urge you to consider a donation to our team and assure you that 100% of your donation will go to fund our outreach.
        </p>
        <br></br>
        <p className='text-white text-xl'>
          In return for your sponsorship, we can offer your business significant value of brand visibility in the community through the local, monthly events we partake in. We are happy to advertise your business on our social media, team posters and shirts, and even on our robot. We would be grateful if you are able to sponsor us or donate any amount to our team. The proposed sponsorship would be for the duration of our 2023-2024 season.
        </p>
        <br></br>
        <p className='text-white text-xl'>
          Please do not hesitate to reach out to us with any questions. We welcome the opportunity to speak with you at your earliest convenience for further details. 
        </p>
        <br></br>
        <p className='text-white text-xl'>
          Thank you for your consideration.
        </p>
        <br></br>
        <p className='text-white text-xl'>FTC Team #14903, SharkBots:</p>
        <p className='text-white text-xl'>Jack, Inaara, Rafa, Justin, Maia, Raphael, Vincent, Denis, Clovis, and Tristan</p>
      </section>
      <Divider color={"white"} />
      <section className='background-section py-8 px-4 mx-8 rounded'>
        <h2 className='text-white font-extrabold text-4xl'>Got questions?</h2>
        <br></br>
        <p className='text-white text-xl'>Team - ftc.sharkbots@gmail.com</p>
        <p className='text-white text-xl'>Rafael (Outreach Coordinator) - rleifert100@gmail.com</p>
        <br></br>
        <Link href="/contact"><button className="bg-green-700 text-white font-extrabold hover:scale-105 transition-transform rounded py-4 px-10">Contact Us</button></Link>
      </section>
      <Divider color={"white"} />
    </article>
  );
};

export default Sponsors;