import Construction from "../components/construction";
import Divider from "../components/divider";
import DividerSmall from "../components/dividersmall";
import Event from "../components/event";
import TimelineEvent from "../components/timelineevent";

const Centerstage = () => {
  return (
    <article>
      <Divider color={"white"} />
      <section className='background-section py-8 px-4 mx-8 rounded'>
        <h2 className='text-center text-white font-extrabold text-4xl'>2023 - 2024 Centerstage</h2>
        <img src="/Logos/Centerstage.png" className="mx-auto w-1/6" />
        <p className='text-center text-white font-extrabold text-xl pb-2'>We wanted to create a robot that was <span className="text-standout">quick</span>, <span className="text-standout">under 14" tall</span>, <span className="text-standout">reliable</span>, and <span className="text-standout">efficient</span>.</p>
        <p className='text-center text-white text-xl'>Here is what we accomplished so far!</p>
      </section>
      <Divider color={"white"} />
      <section className="flex justify-center">
        <img src="/Robot23-24.png" className="w-1/3" />
      </section>
      <Divider color={"white"} />
      <section className='background-section py-8 px-4 mx-8 rounded'>
        <h2 className='text-center text-white font-extrabold text-4xl pb-8'>Our Journey to Date</h2>
        <p className='text-center text-white font-extrabold text-xl pb-2'>Our goals are to <span className="text-standout">expand our outreach program locally and globally</span>, <span className="text-standout">reach the State Championship</span> and <span className="text-standout">connect with FTC teams</span>.</p>
        <p className='text-center text-white text-xl'>Here's what we've done so far!</p>
      </section>
      <Construction />
      <section className='background-section py-8 px-4 mx-8 rounded'>
        <h2 className='text-center text-white font-extrabold text-4xl'>Our Timeline</h2>
      </section>
      <DividerSmall color={"white"} media={"none"}/>
      <TimelineEvent event="John Jay Qualifier" date="12/02/23" />
      <DividerSmall color={"white"} media={"none"}/>
      <TimelineEvent event="Albany Qualifier" date="01/13/24" />
      <Divider color={"white"} />
    </article>
  );
};

export default Centerstage;