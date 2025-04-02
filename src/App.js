import React from "react"
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
import Paper from "@mui/material/Paper"

import "./App.css"
import Card from "./components/Card"

Chart.register(CategoryScale)

const dummyRows = [
  { device: "Fridge", output: 23 },
  { device: "Fridge", output: 23 },
  { device: "Fridge", output: 23 },
  { device: "Fridge", output: 23 },
  { device: "Fridge", output: 23 },
  { device: "Fridge", output: 23 },
  { device: "Fridge", output: 23 },
  { device: "Fridge", output: 23 },
  { device: "Fridge", output: 23 },
]
const dummyChartData = [372, 424, 636, 344, 553, 223]
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
        <div className="chart-container">
          <Line
            data={{
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

              datasets: [
                {
                  label: "Users Gained ",
                  data: dummyChartData,
                  backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#f0331a",
                    "#f3ba2f",
                    "#2a71d0",
                    "#2a22d0",
                  ],
                  borderColor: "black",
                  borderWidth: 2,
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Users Gained between 2016-2020",
                },
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>
        <div style={{}}>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
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
                {dummyRows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" align="center" scope="row">
                      {row.device}
                    </TableCell>
                    <TableCell align="center">{row.output}</TableCell>
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
