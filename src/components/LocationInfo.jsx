import "./styles/locationInfo.css"
const LocationInfo = ({location}) => {


  return (
    <article className="l-container">
      <div className="d-cont">
        <h1 className="title">{location?.name}</h1>
        <ul className="ul_title">
            <li><span className="span-info">Type: </span><span>{location?.type}</span></li>
            <li><span className="span-info">Dimension: </span><span></span>{location?.dimension}</li>
            <li><span className="span-info">Population: </span><span>{location?.residents.length}</span></li>
        </ul>
      </div>
    </article>
  )
}

export default LocationInfo