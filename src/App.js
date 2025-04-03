import React, { useEffect, useState } from "react"
import {
  FaAngleLeft,
  FaAngleRight,
  FaCloudSun,
  FaRegUser,
  FaBell,
  FaPlus,
} from "react-icons/fa6"
import { Line } from "react-chartjs-2"
import { CategoryScale } from "chart.js"
import Chart from "chart.js/auto"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Divider from "@mui/material/Divider"

import "./App.css"
import Card from "./components/Card"
import Tag from "./components/Tag"
// import data from "./data/data.json"

Chart.register(CategoryScale)
Chart.defaults.font.family = "'Figtree', sans-serif"
Chart.defaults.font.weight = "bold"
Chart.defaults.font.color = "#023047"

const dummyDeviceNames = [
  "Kitchen Fridge",
  "Basement Fridge",
  "Andrew's Lights",
  "Living Room Lights",
  "Kithcen Lights",
  "Washing Machine",
  "Dryer",
  "Dishwasher",
  "Desktop Computer",
]
const MAXDEVICES = dummyDeviceNames.length
const dummyLineColours = [
  {
    lineColour: "#219ebc",
    dotColour: "#ffb703",
  },
  {
    lineColour: "#fb8500",
    dotColour: "#ffb703",
  },
]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
const MAXMONTHS = months.length
const randThreshold = 322

function App() {
  const [deviceData, setDeviceData] = useState([])
  const [dummyNodes, setDummyNodes] = useState([])

  useEffect(() => {
    const randInt = Math.floor(Math.random() * randThreshold)
    fetch(
      "https://f40wll2857.execute-api.us-east-1.amazonaws.com/EnergyDashboardAPI"
    )
      .then((response) => response.json())
      .then((data) => {
        setDeviceData(data)
        setDummyNodes([
          {
            name: "Energy Usage",
            range: "Last 30 days",
            metric:
              data[Math.floor(Math.random() * randThreshold)].payload
                .power_usage_watts,
            measurement: "kwh",
          },
          {
            name: "Carbon Footprint",
            range: "Last 24 hours",
            metric:
              data[Math.floor(Math.random() * randThreshold)].payload
                .power_usage_watts,
            measurement: "kg",
          },
          {
            name: "Last Bill Payment",
            range: "Feb. 3rd, 2025 - Mar. 3rd, 2025",
            metric:
              data[Math.floor(Math.random() * randThreshold)].payload
                .power_usage_watts,
            measurement: "$",
          },
          {
            name: "Energy Usage Comparison",
            range: "Week of Mar. 21 v. Week of Mar. 14",
            metric: `+${(
              (data[randInt].payload.power_usage_watts +
                data[randInt + Math.floor(Math.random() * randThreshold)]
                  .payload.power_usage_watts) /
              data[randInt].payload.power_usage_watts
            ).toFixed(2)}`,
            measurement: "%",
          },
        ])
      })
      .catch((error) => console.error("Fetch Error:", error))
  }, [])

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
          {dummyNodes.map((node) => {
            return (
              <Card
                title={node.name}
                date={node.range}
                metric={node.metric}
                measurement={node.measurement}
              />
            )
          })}
        </div>
      </div>
      <div className="second-row">
        <div className="chart-container">
          <h2 style={{ paddingLeft: "16px" }}>
            Energy Consumption in last 6 months
          </h2>
          <div className="mini-tags-container">
            <Tag label={"Last 6 Months"} />
            {[dummyDeviceNames[0], dummyDeviceNames[0 + MAXMONTHS]].map(
              (device, i) => {
                return (
                  <Tag label={device} colour={dummyLineColours[i].lineColour} />
                )
              }
            )}
            <Divider orientation="vertical" flexItem />
            <Tag label={"Graph"} dropdown />
            <Tag label={"Device"} dropdown />
            <Tag label={"Range"} dropdown />
          </div>
          <div style={{ position: "relative", height: "40vh", width: "100%" }}>
            <Line
              data={{
                labels: months,
                datasets: [
                  dummyDeviceNames[0],
                  dummyDeviceNames[0 + MAXMONTHS],
                ].map((deviceName, i) => {
                  return {
                    label: deviceName,
                    data: deviceData
                      .slice(0 + i * MAXMONTHS, 0 + i * MAXMONTHS + MAXMONTHS)
                      .map((data) => {
                        return data.payload.power_usage_watts
                      }),
                    backgroundColor: dummyLineColours[i].dotColour,
                    borderColor: dummyLineColours[i].lineColour,
                    borderWidth: 2,
                  }
                }),
              }}
              options={{
                maintainAspectRatio: false,
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: "Last 6 Months to Date",
                      color: "#023047",
                    },
                  },
                  y: {
                    title: {
                      display: true,
                      text: "Energy Consumption in KwH",
                      color: "#023047",
                    },
                  },
                },
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </div>
        </div>
        <div className="table-container">
          <h2 style={{ paddingLeft: "16px" }}>All Devices</h2>
          <div className="tags-container">
            <div className="mini-tags-container">
              <Tag label={"Room"} dropdown />
              <Tag label={"Month"} dropdown />
            </div>
            <div className="mini-tags-container">
              <Tag label={"All Rooms"} />
              <Tag label={"January"} />
            </div>
          </div>
          <TableContainer>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ borderBottom: "1px solid #000000" }}
                    align="center"
                  >
                    Device
                  </TableCell>
                  <TableCell
                    sx={{ borderBottom: "1px solid #000000" }}
                    align="center"
                  >
                    Output&nbsp;(kwh)
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {deviceData.slice(0, MAXDEVICES).map((device, i) => (
                  <TableRow
                    key={dummyDeviceNames[i]}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      "&:nth-of-type(odd)": {
                        backgroundColor: "#EEEEEE",
                      },
                    }}
                  >
                    <TableCell component="th" align="center" scope="row">
                      {dummyDeviceNames[i]}
                    </TableCell>
                    <TableCell align="center">
                      {device.payload.power_usage_watts}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  )
}

export default App
