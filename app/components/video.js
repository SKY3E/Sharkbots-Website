const Video = ({ video }) => {
  return (
    <section>
      <source src={video} type="video/mp4"/>
    </section>
  );
};

export default Video;