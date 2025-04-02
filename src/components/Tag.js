import "./Tag.css"
import { FaAngleDown, FaXmark } from "react-icons/fa6"
function Tag({ label, dropdown, colour }) {
  if (!colour) {
    console.log("ehre")
    colour = "#023047"
  }
  return (
    <div
      className={`tag-container ${dropdown ? "orange-bg" : "not-orange-bg"}`}
    >
      <p style={{ color: `${colour}` }}>{label}</p>
      {dropdown ? <FaAngleDown /> : <FaXmark />}
    </div>
  )
}

export default Tag
