import Divider from '../components/divider';

// Show an announcement
const Announcement = ({ text, description }) => {
  return (
    <section>
      <Divider color={"white"} />
      <div className='bg-gradient-to-r from-gray-800 via-blue-900 to-gray-800 py-8 mx-8 rounded'>
        <h2 className='text-center text-white font-extrabold text-4xl'>⚠️ {text} ⚠️</h2>
        {description != null ? (
          <p className='text-center text-white font-extrabold text-xl mt-4'>{description}</p>
        ) : (
          <div></div>
        )
        }
      </div>
      <Divider color={"white"} />
    </section>
  );
};

export default Announcement;