import Tooltip from "@mui/material/Tooltip"

import "./Tag.css"
import { FaAngleDown, FaXmark } from "react-icons/fa6"
function Tag({ label, dropdown, colour }) {
  if (!colour) {
    colour = "#023047"
  }
  return (
    <Tooltip title="Usage in development!" placement="top" arrow>
      <div
        className={`tag-container ${dropdown ? "orange-bg" : "not-orange-bg"}`}
      >
        <p style={{ color: `${colour}` }}>{label}</p>
        {dropdown ? <FaAngleDown /> : <FaXmark />}
      </div>
    </Tooltip>
  )
}

export default Tag
