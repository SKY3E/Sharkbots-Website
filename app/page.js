import Slideshow from './components/slideshow';

const images = [
  '/IMG_5204.jpg',
  '/IMG_5429.jpg',
];

const Home = () => {
  return (
    <div>
      <Slideshow images={images} />
    </div>
  );
};

export default Home;
