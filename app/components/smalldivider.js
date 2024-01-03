// Show small seperation between sections - determines its color through argument
const SmallDivider = ({ color }) => {
  if (color == "white") return <section className="h-4 bg-white"></section>
  if (color == "blue") return <section className="h-4 background-section"></section>
}

export default SmallDivider;