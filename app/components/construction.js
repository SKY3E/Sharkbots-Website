import Divider from '../components/divider';

// Show a page or section is under construction
const Construction = () => {
  return (
    <section>
      <Divider color={"white"} />
      <div className='bg-gradient-to-r from-gray-800 via-blue-900 to-gray-800 py-8 mx-8 rounded'>
        <h2 className='text-center text-white font-extrabold text-4xl'>🚧 Under Construction ... 🚧</h2>
      </div>
      <Divider color={"white"} />
    </section>
  );
};

export default Construction;