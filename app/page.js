import Slideshow from './components/slideshow';
import Divider from './components/divider';

const images = [
  '/TeamMeeting.jpg',
  '/WorkingRobot.jpg',
  '/JohnJay.jpg',
];

const jsxContent = (
  <div className="absolute flex flex-col top-32 left-20">
    <h1 className='text-center text-white font-extrabold text-7xl py-2 px-8 rounded border-4 border-white bg-gradient-to-r from-gray-800 via-blue-900 to-gray-800 mb-2'>Sharkbots</h1>
    <h2 className='text-center text-white font-extrabold text-4xl py-2 px-8 rounded border-4 border-white bg-gradient-to-r from-gray-800 via-blue-900 to-gray-800 mb-2 mr-32'>14903</h2>
  </div>
);

const Home = () => {
  return (
    <article>
      <Slideshow images={images} jsxContent={jsxContent} />
      <Divider color={"white"} />
      <section className='background-gradient py-8 px-4 mx-8 rounded'>
        <h2 className='text-center text-white font-extrabold text-4xl pb-8'>Our Mission : A Byte Into The Future!</h2>
        <p className='text-center text-white font-extrabold text-xl pb-2'>Empowering  students in STEM through collaboration, construction &  creativity.</p>
        <p className='text-center text-white text-xl'>We are passionate about science and technology, and our mission is to share this passion, connect with others, and ultimately learn and grow from one another.</p>
      </section>
      <Divider color={"white"} />
      <section className='flex justify-around'>
        <img className='object-cover h-96 w-full mr-4 rounded-r-lg' src='/Team.jpg'></img>
        <div className='h-96 w-full bg-gradient-to-r from-gray-800 via-blue-900 to-gray-800 ml-4 rounded-l-lg'>
          <h2 className='text-white font-extrabold text-4xl p-8'>Teamwork makes the dreamwork ...</h2>
          <p className='text-white text-xl px-8 pb-2'>We are Team Number 14903, the SharkBots based in Mamaroneck, NY.</p>
          <p className='text-white text-xl px-8'>We are a <span className='font-extrabold'>motivated, diverse and skilled group</span> of 10 high school students from all over Westchester County, who came together after the merging of two FIRST teams. Though our team number has been around for several seasons, many of our members are relatively new to FTC and in many ways we are a rookie team. <span className='font-extrabold'>We are embracing new opportunities to build and establish our team from the ground up and to be competitive and sustainable for many years to come.</span></p>
        </div>
      </section>
      <Divider color={"white"} />
      <section className='background-gradient py-8 px-4 mx-8 rounded'>
        <h2 className='text-center text-white font-extrabold text-4xl pb-8'>Recent Events : Debugging the Past, Coding the Future!</h2>
        <p className='text-center text-white font-extrabold text-xl pb-2'>Here's everything we've been up to since the new season game dropped.</p>
        <p className='text-center text-white text-xl'>Since September, we've met up every week to build our current robot and recently participated in the first qualifiers for our region and were the 1st Alliance Captain.</p>
      </section>
      <Divider color={"white"} />
      <section className='flex justify-around'>
        <div className='h-96 w-full background-gradient mr-4 rounded-r-lg'>
          <h2 className='text-white font-extrabold text-4xl p-8'>Collaboration in the game, almost clinched the fame ...</h2>
          <p className='text-white text-xl px-8 pb-2'>Aspiring through alliances, we reached the finals on December 2nd.</p>
          <p className='text-white text-xl px-8'>On December 2nd, we eagerly entered the <span className='font-extrabold'>inaugural regional qualifier</span>. As the day unfolded, we forged valuable connections and alliances that propelled us to the finals, where <span className='font-extrabold'>we proudly assumed the role of the 1st alliance captain</span>. Despite our best efforts, success didn't grace us with a spot in the State Qualifiers this time. <span className='font-extrabold'>Undeterred, we stand resilient and fully prepared to surmount challenges and secure our place in the next pursuit.</span></p>
        </div>
        <img className='object-cover h-96 w-full ml-4 rounded-l-lg' src='/JohnJay.jpg'></img>
      </section>
      <Divider color={"white"} />
      <section className='flex justify-around'>
        <img className='object-cover h-96 w-full mr-4 rounded-r-lg' src='/Team.jpg'></img>
        <div className='h-96 w-full background-gradient ml-4 rounded-l-lg'>
          <h2 className='text-white font-extrabold text-4xl p-8'>Community drives us forward ...</h2>
          <p className='text-white text-xl px-8 pb-2'>Last weekend, we connected with our FASNY non-stem community through an Open House event.</p>
          <p className='text-white text-xl px-8'>In early December, we participated in an <span className='font-extrabold'>Open House event</span> at our school, FASNY, engaging with prospective parents, teachers, and faculty. At our booth with our partner FLL team, <span className='font-extrabold'>we introduced our FTC team and showcased our latest robot</span>, emphasizing our engineering mindset. We had insightful discussions, sharing our team's daily endeavors and achievements with parents and are <span className='font-extrabold'>looking forward to more such events in the future!</span></p>
        </div>
      </section>
      <Divider color={"white"} />
    </article>
  );
};

export default Home;