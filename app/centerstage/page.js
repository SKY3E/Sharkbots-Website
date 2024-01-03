import Construction from "../components/construction";
import Announcement from "../components/announcement";
import Divider from "../components/divider";
import SmallDivider from "../components/smalldivider";
import Event from "../components/event";
import TimelineEvent from "../components/timelineevent";

const Centerstage = () => {
  return (
    <article>
      <Announcement text="Upcoming FLL Tournament - January 2024" description="We are hosting an FLL tournament at FASNY (Mamaroneck NY) on January 21 2024!" />
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
      <Divider color={"white"} />
      <Event direction="left" image="/Robot23-24.png" title="Our Current Robot" hook="In just three months, our efficient, consistent and compact robot was built." text="In three months, we crafted an efficient machine with a rapid intake funnel, 3D-printed funnel, and a two-pixel outtake claw capable of rotation for precise placement. The 6000rpm drone launcher enables quick scoring, and skyhooks on each side facilitate hanging with minimal impact on other components. Pleased with its current state, we are planning future enhancements." />
      <Divider color={"white"} />
      <section className='background-section py-8 px-4 mx-8 rounded'>
        <h2 className='text-center text-white font-extrabold text-4xl'>Our Timeline</h2>
      </section>
      <SmallDivider color={"white"} />
      <TimelineEvent event="John Jay Qualifier" date="12/02/23" />
      <SmallDivider color={"white"} />
      <TimelineEvent event="Albany Qualifier" date="01/13/24" />
      <Divider color={"white"} />
    </article>
  );
};

export default Centerstage;