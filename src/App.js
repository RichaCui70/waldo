import "./App.css"
import Icon from "./components/Icon"
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
          <Icon src="" alt="nut" />
          <Icon src="" alt="nut" />
          <Icon src="" alt="nut" />
          <Icon src="" alt="nut" />
        </div>
        {/* <Card
          title={"Energy Difference"}
          date={"Mar. 21 week v. Mar. 14 week"}
          metric={"+3.13%"}
        /> */}
      </header>
    </div>
  )
}

export default App
