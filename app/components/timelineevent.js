// Show a timeline event - event and date determined through arguments
const TimelineEvent = ({event, date}) => {
  return (
    <div className="flex justify-between background-section px-2 mx-8 rounded">
      <h2 className="text-white lg:font-extrabold text-xl lg:text-2xl py-4 px-4 lg:px-16">{event}</h2>
      <h2 className="text-white lg:font-extrabold text-xl lg:text-2xl py-4 px-4 lg:px-16">{date}</h2>
    </div>
  );
};

export default TimelineEvent;