import '../globals.css';
import DividerSmall from './dividersmall';

const Event = ({direction, image, title, hook, text}) => {
  if (direction == 'left')
    return (
      <section className="flex flex-col lg:flex-row justify-around">
        <img className="object-cover height-rsection w-full lg:w-1/3 xl:w-full lg:mr-4 lg:rounded-r-lg" src={image} /> 
        <DividerSmall color={"white"} media={"large"} />
        <div className="height-rsection w-full lg:w-2/3 xl:w-full background-section lg:ml-4 lg:rounded-l-lg">
          <h2 className='text-white font-extrabold text-4xl p-8'>{title}</h2>
          <p className='text-white text-xl px-8 pb-2'><span className='font-extrabold'>Summary</span> : {hook}</p>
          <p className='text-white text-xl px-8'><span className='font-extrabold'>In depth</span> : {text}</p>
        </div>
      </section>
    );
  else if (direction == 'right')
    return (
      <section className="flex flex-col lg:flex-row justify-around">
        <div className="height-rsection w-full lg:w-2/3 xl:w-full background-section lg:mr-4 lg:rounded-r-lg">
          <h2 className='text-white font-extrabold text-4xl p-8'>{title}</h2>
          <p className='text-white text-xl px-8 pb-2'><span className='font-extrabold'>Summary</span> : {hook}</p>
          <p className='text-white text-xl px-8'><span className='font-extrabold'>In depth</span> : {text}</p>
        </div>
        <DividerSmall color={"white"} media={"large"} />
        <img className="object-cover height-rsection w-full lg:w-1/3 xl:w-full lg:ml-4 lg:rounded-l-lg" src={image} /> 
      </section>
    );
};

export default Event;