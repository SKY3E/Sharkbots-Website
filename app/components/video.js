import '../globals.css';

// Show a video - video determined through arguments
const Video = ({ video }) => {
  return (
    <section>
      <video controls className='video'>
        <source src={video} type="video/mp4"/>
      </video>
    </section>
  );
};

export default Video;