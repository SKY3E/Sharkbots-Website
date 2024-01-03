// Show seperation between sections - determines its color through argument
const Divider = ({ color }) => {
  if (color == "white") {return <section className="h-8 bg-white"></section>}
  if (color == "blue") {return <section className="h-8 bg-blue-900 bg-opacity-90"></section>}
}

export default Divider;