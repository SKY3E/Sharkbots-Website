// Show an identity - name, job, and photoURL determined through arguments
const Identity = ({ name, job, photoURL }) => {
  return (
    <div className=" rotate-on-hover">
      <img className="rounded-lg w-full" src={photoURL} alt={name} />
      <div className="flex justify-between background-section-light text-white mt-2 px-2 rounded">
        <h4 className="font-bold">{name}</h4>
        <h4 className="font-bold hidden lg:block">{job}</h4>
      </div>
    </div>
  );
};

export default Identity;