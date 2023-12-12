import Slideshow from './components/slideshow';
import Divider from './components/divider';

const images = [
  '/TeamMeeting.jpg',
  '/WorkingRobot.jpg',
];

const jsxContent = (
  <div className="absolute flex flex-col">
    <h1 className='text-center text-white font-extrabold text-7xl py-2 px-8 rounded bg-white bg-opacity-50 mb-2'>Sharkbots</h1>
    <h2 className='text-center text-white font-extrabold text-4xl py-2 px-8 rounded bg-white bg-opacity-50 mb-2 mx-24'>14903</h2>
  </div>
);

const Home = () => {
  return (
    <article>
      <Divider color={"white"} />
      <Slideshow images={images} jsxContent={jsxContent} />
      <Divider color={"white"} />
      <section className='bg-blue-900 bg-opacity-90 py-8 mx-8'>
        <h2 className='text-center text-white font-extrabold text-4xl pb-8'>Our Mission : A Byte Into The Future!</h2>
        <p className='text-center text-white font-extrabold text-xl pb-2'>Empowering  students in STEM through collaboration, construction &  creativity.</p>
        <p className='text-center text-white text-xl'>We are passionate about science and technology, and our mission is to share this passion, connect with others, and ultimately learn and grow from one another.</p>
      </section>
      <Divider color={"white"} />
      <section className='flex justify-around'>
        <img className='object-cover h-96 w-full mr-4 rounded-r-lg' src='/Team.jpg'></img>
        <div className='h-96 w-full bg-blue-900 bg-opacity-90 ml-4 rounded-l-lg'>
          <h2 className='text-white font-extrabold text-4xl p-8'>Teamwork makes the dreamwork ...</h2>
          <p className='text-white text-xl px-8 pb-2'>We are Team Number 14903, the SharkBots based in Mamaroneck, NY.</p>
          <p className='text-white text-xl px-8'>We are a <span className='font-extrabold'>motivated, diverse and skilled group</span> of 10 high school students from all over Westchester County, who came together after the merging of two FIRST teams. Though our team number has been around for several seasons, many of our members are relatively new to FTC and in many ways we are a rookie team. <span className='font-extrabold'>We are embracing new opportunities to build and establish our team from the ground up and to be competitive and sustainable for many years to come.</span></p>
        </div>
      </section>
      <Divider color={"white"} />
      <section className='bg-blue-900 bg-opacity-90 py-8 mx-8'>
        <h2 className='text-center text-white font-extrabold text-4xl pb-8'>Recent Events : Debugging the Past, Coding the Future!</h2>
        <p className='text-center text-white font-extrabold text-xl pb-2'>Here's everything we've been up to since the new season game dropped.</p>
        <p className='text-center text-white text-xl'>Since September, we've met up every week to build our current robot and recently participated in the first qualifiers for our region and were the 1st Alliance Captain.</p>
      </section>
      <Divider color={"white"} />
    </article>
  );
};

export default Home;