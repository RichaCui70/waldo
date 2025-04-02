import "./Tag.css"
import { FaAngleDown, FaXmark } from "react-icons/fa6"
function Tag({ label, dropdown }) {
  return (
    <div
      className={`tag-container ${dropdown ? "orange-bg" : "not-orange-bg"}`}
    >
      <p>{label}</p>
      {dropdown ? <FaAngleDown /> : <FaXmark />}
    </div>
  )
}

export default Tag
