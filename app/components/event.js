import '../globals.css';

const Event = ({direction, image, title, hook, text}) => {
  if (direction == 'left')
    return (
      <section className="flex justify-around">
        <img className="object-cover height-rsection w-full mr-4 rounded-r-lg" src={image} /> 
        <div className="height-rsection w-full background-section ml-4 rounded-l-lg">
          <h2 className='text-white font-extrabold text-4xl p-8'>{title}</h2>
          <p className='text-white text-xl px-8 pb-2'><span className='font-extrabold'>Summary</span> : {hook}</p>
          <p className='text-white text-xl px-8'><span className='font-extrabold'>In depth</span> : {text}</p>
        </div>
      </section>
    );
  else if (direction == 'right')
    return (
      <section className="flex justify-around">
        <div className="height-rsection w-full background-section mr-4 rounded-r-lg">
          <h2 className='text-white font-extrabold text-4xl p-8'>{title}</h2>
          <p className='text-white text-xl px-8 pb-2'><span className='font-extrabold'>Summary</span> : {hook}</p>
          <p className='text-white text-xl px-8'><span className='font-extrabold'>In depth</span> : {text}</p>
        </div>
        <img className="object-cover height-rsection w-full ml-4 rounded-l-lg" src={image} /> 
      </section>
    );
};

export default Event;