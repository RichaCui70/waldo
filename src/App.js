import {
  FaAngleLeft,
  FaAngleRight,
  FaCloudSun,
  FaRegUser,
  FaBell,
  FaPlus,
} from "react-icons/fa6"
import { Line } from "react-chartjs-2"

import "./App.css"
import Card from "./components/Card"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title-container">
          <h1>Welcome User!</h1>
          <p>Here are your stats for the day :&#41;</p>
        </div>
        <div className="icon-container">
          <div className="icon">
            <FaCloudSun />
          </div>
          <div className="icon">
            <FaBell />
          </div>
          <div className="icon">
            <FaPlus />
          </div>
          <div className="icon">
            <FaRegUser />
          </div>
        </div>
      </header>
      <div className="first-row">
        <div className="nav-arrows">
          <div className="arrow">
            <FaAngleLeft />
          </div>
          <div className="arrow">
            <FaAngleRight />
          </div>
        </div>
        <div className="node-container">
          <Card
            title={"Energy Usage"}
            date={"Last 30 days"}
            metric={"1000"}
            measurement={"kwh"}
          />
          <Card
            title={"Carbon Footprint"}
            date={"Last 24 hours"}
            metric={"103"}
            measurement={"kg"}
          />
          <Card
            title={"Last Bill Payment"}
            date={"Feb 3rd, 2025 - Mar 3rd, 2025"}
            metric={"321"}
            measurement={"$"}
          />
          <Card
            title={"Energy Usage"}
            date={"Mar. 21 week v. Mar. 14 week"}
            metric={"+3.13"}
            measurement={"%"}
          />
        </div>
      </div>
      <div className="second-row">
        <Line
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
              {
                label: "My First Dataset",
                data: [65, 59, 80, 81, 56, 55],
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
              },
            ],
          }}
        />
      </div>
    </div>
  )
}

export default App
