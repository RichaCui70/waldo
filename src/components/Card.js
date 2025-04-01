import "./Card.css"
function Card({ title, date, metric, measurement }) {
  return (
    <div className="container">
      <div className="title">
        <h2>{title}</h2>
        <p>{date}</p>
      </div>
      <div>
        <span className="metric">{metric}</span>
        <span className="text" style={{ fontSize: "12px" }}>
          {measurement}
        </span>
      </div>
    </div>
  )
}

export default Card
