import Divider from '../components/divider';

const Credits = () => {
  return (
    <article>
      <Divider color={"white"} />
      <section className='background-section py-8 mx-8 rounded'>
        <h2 className='text-center text-white font-extrabold text-4xl'>Credits</h2>
      </section>
      <Divider color={"white"} />
      <section className='background-section py-8 px-4 mx-8 rounded text-white'>
        <h2 className='text-white font-extrabold text-4xl'>Icon Scout</h2>
        <br></br>
        <div className='flex items-center gap-x-1 text-xl mb-2'><img className="h-8 w-8 mr-4 rounded rotate-on-hover" src="/Logos/Youtube.png" alt="Youtube" /><a href="https://iconscout.com/icons/internet" class="text-underline font-size-sm" target="_blank">Youtube</a> by <a href="https://iconscout.com/contributors/iconscout" class="text-underline font-size-sm">IconScout Store</a></div>
        <div className='flex items-center gap-x-1 text-xl'><img className="h-8 w-8 mr-4 rounded rotate-on-hover" src="/Logos/Instagram.png" alt="Instagram" /><a href="https://iconscout.com/icons/chatting" class="text-underline font-size-sm" target="_blank">Instagram</a> by <a href="https://iconscout.com/contributors/iconscout" class="text-underline font-size-sm" target="_blank">IconScout Store</a></div>
      </section>
      <Divider color={"white"} />
      <section className='background-section py-8 px-4 mx-8 rounded text-white'>
        <h2 className='text-white font-extrabold text-4xl'>Contributors</h2>
        <br></br>
        <p className='text-xl'>Raphael Bessin for Sharkbots 14903</p>
      </section>
      <Divider color={"white"} />
    </article>
  );
};

export default Credits;