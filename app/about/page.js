import Construction from "../components/construction";
import Video from "../components/video";
import Divider from '../components/divider';
import Identity from "../components/identity";

const About = () => {
  return (
    <article>
      <Video video="/SharkbotsVideo.mp4" />
      <Divider color={"white"} />
      <section className='background-section py-8 mx-8 rounded'>
        <h2 className='text-center text-white font-extrabold text-4xl'>About Us : Take a peak into our directory!</h2>
      </section>
      <Divider color={"white"} />
      <section className='background-section py-8 px-4 mx-8 rounded'>
        <p className='text-center text-white text-xl'>
          We are Team Number 14903, The SharkBots based in Mamaroneck, NY. We are a motivated, diverse and skilled group of 10 high school students from Westchester County. Though our team number has been around for a number of seasons, in many ways we are a rookie team.
        </p>
        <br></br>
        <p className='text-center text-white text-xl'>
          At the end of the 2021-2022 season, the remaining three members of 14903, Ryan, Thomas and Jack, came to the realization that it was time to expand and grow the team so they could once again be competitive and sustainable. Meanwhile, a rookie FLL team in Mamaroneck, made up of Justin, Ben, Denis, and Vincent, was finishing up an extraordinary FLL season that led them to the Houston World Championship: At the end of their season they had to decide if they were ready to move on to the new challenge of FTC. These two teams met over late summer through a mutual acquaintance and a merging of teams made sense. The FTC experience of Ryan, Thomas and Jack combined with the motivation and skill of Justin, Ben, Vincent and Denis seemed a perfect union. They were thrilled to add  Paolo, Raphael, Maia, Inaara, Charlie, Rafael and Adrien to round out the team. Though we kept our team number due to logistical reasons, we emerged as SharkBots.
        </p>
        <br></br>
        <p className='text-center text-white text-xl'>
          We have been given great support from the French American School in Mamaroneck to develop our young team. They renovated a space on our behalf that is large, bright and equipped with Wifi, whiteboards, tables and other necessities, and is now known as SharkBots HQ. Above all else, they did not limit team members solely to the French American School community. In fact, our 14 members represented four separate high schools in Westchester County.
        </p>
        <br></br>
        <p className='text-center text-white text-xl'>
          Though we were a large team and the more experienced members had emerged as captains of building, programming, CAD and outreach, we are an inclusive team that encourages creativity and reflection from all members. This had led to our newest members taking initiatives on designing and testing all aspects of the robot, building our website and logo, and reaching out to experts to further their knowledge and skill base.
        </p>
        <br></br>
        <p className='text-center text-white text-xl'>
          With the merging of two teams, we had many coaches and mentors in this first year to support us and help organize our large team to which we are grateful. Thanks to them and to the dedication which all of our members showed, we were able to achieve what we thought was impossible, attend the World Championship! This journey helped us grow as a team and taught us many valuable skills which we hope to develop and expand upon in our second year of FTC.
        </p>
        <br></br>
        <p className='text-center text-white text-xl'>
          In this new Centerstage season of FTC we hope to continue learning and growing as a team with our two new members Clovis and Tristan but also to stay competitive in our region while establishing the groundwork for a thriving, sustainable team for many years to come, one with a strong business model and robust outreach. 
        </p>
      </section>
      <Divider color={"white"} />
      <section className='background-section py-8 mx-8 rounded'>
        <h2 className='text-center text-white font-extrabold text-4xl'>Take a look at our team members!</h2>
      </section>
      <Divider color={"white"} />
      <section className="flex justify-between grid grid-cols-4 gap-x-4 gap-y-8 background-section py-8 px-8 mx-8 rounded">
        <Identity name="Jack" job="Head Captain" photoURL="/Team/Jack.jpg" />
        <Identity name="Rafael" job="Outreach Facilitator" photoURL="/Team/Rafael.png" />
        <Identity name="Vincent" job="Building Facilitator" photoURL="/Team/Vincent.jpg" />
        <Identity name="Justin" job="Builder" photoURL="/Team/Justin.jpg" />
        <Identity name="Raphael" job="Builder/Website Manager" photoURL="/Team/RaphaelBessin.jpg" />
        <Identity name="Tristan" job="Builder" photoURL="/Team/Tristan.jpg" />
        <Identity name="Inaara" job="Programmer" photoURL="/Team/Inaara.jpg" />
        <Identity name="Clovis" job="Builder" photoURL="/Team/Clovis.jpg" />
        <Identity name="Denis" job="Programmer" photoURL="/Team/Denis.jpg" />
        <Identity name="Maia" job="Builder" photoURL="/Team/Maia.jpg" />
      </section>
      <Construction />
    </article>
  );
};

export default About;