export default function Entry(props) {
    return (
        <article className="journal-entry">
            <img className="main-image" src={props.img.src} alt={props.img.alt}/>
            <div className="info-container">
                <img className="marker" src="/images/marker.png" alt="marker" />
                <span className="country">{props.country}</span>
                <a href={props.googleMapsLink}><span>View on GoogleMaps</span></a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
            </div>
        </article>
    )
}

