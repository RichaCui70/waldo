import "./Icon.css"
function Icon(src, alt) {
  return (
    <div className="container">
      <img src={src} alt={alt} />
    </div>
  )
}

export default Icon
