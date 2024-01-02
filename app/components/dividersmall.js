const DividerSmall = ({ color, media }) => {
  if (media == "none") {
  if (color == "white") {return <section className="h-4 bg-white"></section>}
  if (color == "blue") {return <section className="h-4 background-section"></section>}
  } else if (media == "large") {
    if (color == "white") {return <section className="h-4 bg-white lg:hidden"></section>}
    if (color == "blue") {return <section className="h-4 background-section lg:hidden"></section>}
  }
}

export default DividerSmall;