import Slideshow from './components/slideshow';
import Divider from './components/divider';
import Event from './components/event';

const images = [
  '/TeamMeeting.jpg',
  '/WorkingRobot.jpg',
  '/JohnJay.jpg',
];

const jsxContent = (
  <div className="absolute flex flex-col top-20 left-20">
    <h1 className='text-center text-white font-extrabold text-7xl py-2 px-8 rounded border-4 border-white background-section mb-2'>Sharkbots</h1>
    <h2 className='text-center text-white font-extrabold text-4xl py-2 px-8 rounded border-4 border-white background-section mb-2 mr-32'>14903</h2>
  </div>
);

const Home = () => {
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
      <Event direction="right" image="/JohnJay.jpg" title="Collaboration in the game, almost clinched the fame ..." hook="Aspiring through alliances, we reached the finals on December 2nd." text="On December 2nd, we eagerly entered the inaugural regional qualifier. As the day unfolded, we forged valuable connections and alliances that propelled us to the finals, where we proudly assumed the role of the 1st alliance captain. Despite our best efforts, success didn't grace us with a spot in the State Qualifiers this time. Undeterred, we stand resilient and fully prepared to surmount challenges and secure our place in the next pursuit." />
      <Divider color={"white"} />
      <Event direction="left" image="/Team.jpg" title="Community drives us forward ..." hook="Last weekend, we connected with our FASNY non-stem community through an Open House event." text="In early December, we participated in an Open House event at our school, FASNY, engaging with prospective parents, teachers, and faculty. At our booth with our partner FLL team, we introduced our FTC team and showcased our latest robot, emphasizing our engineering mindset. We had insightful discussions, sharing our team's daily endeavors and achievements with parents and are looking forward to more such events in the future!" />
      <Divider color={"white"} />
    </article>
  );
};

export default Home;