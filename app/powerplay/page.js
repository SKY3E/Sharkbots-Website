import Divider from "../components/divider";
import DividerSmall from "../components/dividersmall";
import Event from "../components/event";
import TimelineEvent from "../components/timelineevent";

const Powerplay = () => {
  return (
    <article>
      <Divider color={"white"} />
      <section className='background-section py-8 px-4 mx-8 rounded'>
        <h2 className='text-center text-white font-extrabold text-4xl'>2022 - 2023 Powerplay</h2>
        <img src="/Logos/Powerplay.png" className="mx-auto w-1/6" />
        <p className='text-center text-white font-extrabold text-xl pb-2'>We wanted to create a robot that was <span className="text-standout">fast</span>, <span className="text-standout">compact</span>, <span className="text-standout">reliable</span>, and <span className="text-standout">balanced</span>.</p>
        <p className='text-center text-white text-xl'>This is what we came up with!</p>
      </section>
      <Divider color={"white"} />
      <section className="flex justify-center">
        <img src="/Robot22-23.png" className="w-1/3" />
      </section>
      <Divider color={"white"} />
      <section className='background-section py-8 px-4 mx-8 rounded'>
        <h2 className='text-center text-white font-extrabold text-4xl pb-8'>Our Outreach Program</h2>
        <p className='text-center text-white font-extrabold text-xl pb-2'>Our hopes were to <span className="text-standout">connect</span>, <span className="text-standout">mentor</span>, <span className="text-standout">promote</span> and <span className="text-standout">learn</span>.</p>
        <p className='text-center text-white text-xl'>Here are our main accomplishments!</p>
      </section>
      <Divider color={"white"} />
      <Event direction="left" image="/Outreach/TunisiaOutreach.png" title="International Outreach" hook="With the help of mentors Liwaaddine Fliss and Ben Ouedraogo, our team globally partnered with a robotics team in Tunisia and a STEM Center in Burkina Faso, promoting STEM equity in Africa." text="Over the year, our FTC team actively forged partnerships with various teams, offering coding classes through our meticulously crafted curriculum. Additionally, we shared our engineering mindset during FTC participation, fostering collaborative learning experiences. In the coming year, we aspire to build upon these remarkable collaborations, nurturing stronger friendships and alliances that will further enhance our collective endeavors." />
      <DividerSmall color={"white"} media={"none"}/>
      <DividerSmall color={"blue"} media={"large"}/>
      <DividerSmall color={"white"} media={"none"}/>
      <Event direction="right" image="/Outreach/CarverCenter.png" title="Carver Center" hook="We've partnered with Carver Center, refurbishing laptops, setting up 3D printers, and running programs for 100+ kids in CAD, 3D Printing, and robotics." text="We worked a multitude of times with the Carver Center to provide better resources for the students to explore STEM subjects. So far, we have refurbished over 15 of their laptops and setup their 3D printers. In addition, we've run after school programs and summer programs with more than 100 kids, teaching CAD and 3D Printing, how to build real size scooters and how to use inferno and EV3 Kits. Next year, our aim is to continue and expand these programs." />
      <DividerSmall color={"white"} media={"none"}/>
      <DividerSmall color={"blue"} media={"large"}/>
      <DividerSmall color={"white"} media={"none"}/>
      <Event direction="left" image="/Outreach/MountKisco.png" title="Mount Kisco" hook="Over the past two years, we've cultivated connections with professionals and local communities, including Mount Kisco, to impart essential STEM skills." text="Last year, 3 members of our team started instructing faculty members at the Mount Kisco Child Care Center and have continued doing so this year. We plan to keep this an ongoing project and keep reaching out to new schools, businesses and parents to promote STEM in the community and present our journey with FIRST." />
      <Divider color={"white"} />
      <section className='background-section py-8 px-4 mx-8 rounded'>
        <h2 className='text-center text-white font-extrabold text-4xl'>Our Timeline</h2>
      </section>
      <DividerSmall color={"white"} media={"none"}/>
      <TimelineEvent event="Peekskill Qualifier" date="01/14/23" />
      <DividerSmall color={"white"} media={"none"}/>
      <TimelineEvent event="Broadalbin-Perth Qualifier" date="01/29/23" />
      <DividerSmall color={"white"} media={"none"}/>
      <TimelineEvent event="Utica Excelsior Championship" date="03/05/23" />
      <DividerSmall color={"white"} media={"none"}/>
      <TimelineEvent event="Houston World Championship" date="04/19-22/23" />
      <Divider color={"white"} />
    </article>
  );
};

export default Powerplay;