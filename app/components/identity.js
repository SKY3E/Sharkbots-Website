const Identity = ({ name, job, photoURL }) => {
  return (
    <div>
      <img className="rounded-lg" src={photoURL} alt={name} />
      <div className="flex justify-between bg-gray-600 text-white mt-2 px-2 rounded">
        <h4 className="font-bold">{name}</h4>
        <h4 className="font-bold">{job}</h4>
      </div>
    </div>
  );
};

export default Identity;