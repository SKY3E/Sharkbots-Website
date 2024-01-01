const DividerSmall = ({ color }) => {
  if (color == "white") {return <section className="h-4 bg-white"></section>}
  if (color == "blue") {return <section className="h-4 bg-blue-900 bg-opacity-90"></section>}
}

export default DividerSmall;