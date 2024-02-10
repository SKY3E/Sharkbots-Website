'use client';
import Slideshow from './components/slideshow';
import Divider from './components/divider';
import SmallDivider from './components/smalldivider';
import Event from './components/event';
import ScreenSizeChecker from './hooks/screensizechecker';

const images = [
  '/TeamMeeting.jpg',
  '/WorkingRobot.jpg',
  '/JohnJay.jpg',
];

const jsxContent = (
  <div className="absolute flex flex-col top-20 left-10 sm:left-20">
    <h1 className='text-center text-white font-extrabold text-4xl sm:text-7xl py-2 px-8 rounded border-4 border-white background-section mb-2'>Sharkbots</h1>
    <h2 className='text-center text-white font-extrabold text-2xl sm:text-4xl py-2 px-8 rounded border-4 border-white background-section mb-2 mr-32'>14903</h2>
  </div>
);

const Home = () => {
  const isBelowLgThreshold = ScreenSizeChecker({ threshold: 1024 });

  return (
    <article>
      <Slideshow images={images} jsxContent={jsxContent} />
      <Divider color={"white"} />
      <section className='background-section py-8 px-4 mx-8 rounded'>
        <h2 className='text-center text-white font-extrabold text-4xl pb-8'>Our Mission : A Byte Into The Future!</h2>
        <p className='text-center text-white font-extrabold text-xl pb-2'>Empowering  students in STEM through collaboration, construction &  creativity.</p>
        <p className='text-center text-white text-xl'>We are passionate about science and technology, and our mission is to share this passion, connect with others, and ultimately learn and grow from one another.</p>
      </section>
      <Divider color={"white"} />
      <Event direction="left" image="/Team.jpg" title="Teamwork makes the dreamwork ..." hook="We are Team Number 14903, the SharkBots based in Mamaroneck, NY." text="We are a motivated, diverse and skilled group of 10 high school students from all over Westchester County, who came together after the merging of two FIRST teams. Though our team number has been around for several seasons, many of our members are relatively new to FTC and in many ways we are a rookie team. We are embracing new opportunities to build and establish our team from the ground up and to be competitive and sustainable for many years to come." />
      <Divider color={"white"} />
      <section className='background-section py-8 px-4 mx-8 rounded'>
        <h2 className='text-center text-white font-extrabold text-4xl pb-8'>Recent Events : Debugging the Past, Coding the Future!</h2>
        <p className='text-center text-white font-extrabold text-xl pb-2'>Here's everything we've been up to since the new season game dropped.</p>
        <p className='text-center text-white text-xl'>Since September, we've met up every week to build our current robot and recently participated in the first qualifiers for our region and were the 1st Alliance Captain.</p>
      </section>
      <Divider color={"white"} />
      <Event direction="right" image="/Albany.jpg" title="Collaboration in the game, clinched the fame ..." hook="Aspiring through alliances, we reached regionals on January 13th." text="On January 13th, we eagerly entered the inaugural regional qualifier. As the day unfolded, we forged valuable connections and alliances that propelled us to the finals, where we proudly won with the help of our allies. Nevertheless, our journey presses onward, fueled by the intensity of the competition. Presently, we're dedicated to refining our robot, striving to enhance its compactness and speed. This endeavor is crucial to maintaining the slight edge we've diligently cultivated thus far."/>
      {isBelowLgThreshold ? (
        <div>
          <SmallDivider color={"white"} />
          <Event direction="right" image="/FLLTournament.jpg" title="Community drives us forward ..." hook="On January 20 2024, we hosted our very first FLL tournament in partnership with our school sponsor, FASNY." text="In the first weeks of January, we orchestrated, engaged in, and spearheaded an FLL tournament featuring close to 30 teams. As MCs, referees, queuers, and more, we hosted a remarkable event, catering to all 28 participating teams. Beyond the competition, we offered a glimpse into the world of FTC robotics, showcasing our robot and elucidating the intricacies of our game missions." />
        </div>
      ) : (
        <div>
          <Divider color={"white"} />
          <Event direction="left" image="/FLLTournament.jpg" title="Community drives us forward ..." hook="On January 20 2024, we hosted our very first FLL tournament in partnership with our school sponsor, FASNY." text="In the first weeks of January, we orchestrated, engaged in, and spearheaded an FLL tournament featuring close to 30 teams. As MCs, referees, queuers, and more, we hosted a remarkable event, catering to all 28 participating teams. Beyond the competition, we offered a glimpse into the world of FTC robotics, showcasing our robot and elucidating the intricacies of our game missions." />
        </div>
      )}
      <Divider color={"white"} />
      <Event direction="right" image="/Albany.jpg" title="Determination is key ..." hook="Fighting every step of the way, we won at the Albany Qualifiers." text="On January 13th, we entered the Albany Qualifiers ready to win. Throughout the day, we met other amazing and deeply talented teams, creating strong ties. We fought throughout the day, with ups and lows, but ended up pulling it off! We won the competition as captain of the second alliance, with our amazing teammates, Tardis and Ravena! See you guys at Regionals!" />
      <Divider color={"white"} />
    </article>
  );
};

export default Home;