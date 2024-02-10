'use client'
import Divider from "../components/divider";
import SmallDivider from "../components/smalldivider";
import Event from "../components/event";
import TimelineEvent from "../components/timelineevent";
import ScreenSizeChecker from '../hooks/screensizechecker';

const Centerstage = () => {
  const isBelowLgThreshold = ScreenSizeChecker({ threshold: 1024 });

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
        <img src="/Robot23-24.png" className="w-2/3 lg:w-1/3" />
      </section>
      <Divider color={"white"} />
      <section className='background-section py-8 px-4 mx-8 rounded'>
        <h2 className='text-center text-white font-extrabold text-4xl pb-8'>Our Journey to Date</h2>
        <p className='text-center text-white font-extrabold text-xl pb-2'>Our goals are to <span className="text-standout">expand our outreach program locally and globally</span>, <span className="text-standout">reach the State Championship</span> and <span className="text-standout">connect with FTC teams</span>.</p>
        <p className='text-center text-white text-xl'>Here's what we've done so far!</p>
      </section>
      <Divider color={"white"} />
      <Event direction="right" image="/Robot23-24IMG.jpg" title="Our Current Robot" hook="In just three months, our efficient, consistent and compact robot was built." text="In three months, we crafted an efficient machine with a rapid intake funnel, 3D-printed funnel, and a two-pixel outtake claw capable of rotation for precise placement. The 6000rpm drone launcher enables quick scoring, and skyhooks on each side facilitate hanging with minimal impact on other components. Pleased with its current state, we are planning future enhancements." />
      {isBelowLgThreshold ? (
        <div>
          <SmallDivider color={"white"} />
          <Event direction="right" image="/Albany.jpg" title="Our Current Status" hook="Aspiring through alliances, we reached regionals on January 13th." text="On January 13th, we eagerly entered the inaugural regional qualifier. As the day unfolded, we forged valuable connections and alliances that propelled us to the finals, where we proudly won with the help of our allies. Nevertheless, our journey presses onward, fueled by the intensity of the competition. Presently, we're dedicated to refining our robot, striving to enhance its compactness and speed. This endeavor is crucial to maintaining the slight edge we've diligently cultivated thus far." />
        </div>
      ) : (
        <div>
          <Divider color={"white"} />
          <Event direction="left" image="/Albany.jpg" title="Our Current Status" hook="Aspiring through alliances, we reached regionals on January 13th." text="On January 13th, we eagerly entered the inaugural regional qualifier. As the day unfolded, we forged valuable connections and alliances that propelled us to the finals, where we proudly won with the help of our allies. Nevertheless, our journey presses onward, fueled by the intensity of the competition. Presently, we're dedicated to refining our robot, striving to enhance its compactness and speed. This endeavor is crucial to maintaining the slight edge we've diligently cultivated thus far." />
        </div>
      )}
      <Divider color={"white"} />
      <section className='background-section py-8 px-4 mx-8 rounded'>
        <h2 className='text-center text-white font-extrabold text-4xl'>Our Timeline</h2>
      </section>
      <SmallDivider color={"white"} />
      <TimelineEvent event="John Jay Qualifier" date="12/02/23" />
      <SmallDivider color={"white"} />
      <TimelineEvent event="Albany Qualifier" date="01/13/24" />
      <SmallDivider color={"white"} />
      <TimelineEvent event="Fasny FLL Tournament" date="01/20/24" />
      <Divider color={"white"} />
    </article>
  );
};

export default Centerstage;