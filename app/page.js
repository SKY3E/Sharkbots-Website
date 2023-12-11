import Slideshow from './components/slideshow';

const images = [
  '/IMG_5204.jpg',
  '/IMG_5429.jpg',
];

const Home = () => {
  return (
    <article>
      <Slideshow images={images} />
      <section className='h-20 bg-blue-900 bg-opacity-90'></section>
    </article>
  );
};

export default Home;
