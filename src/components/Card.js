import "./Card.css"
function Card(title, date, metric) {
  return (
    <div className="container">
      <h2>{title}</h2>
      <br />
      <p>{date}</p>
      <span className="metric">{metric}</span>
    </div>
  )
}

export default Card
