
const ExhibitDisplay = ({onClick, name, image, exhibit}) => {

    return (
        <div className="card exhibit-card" >
            <div className="info-wrapper flex-col">
                <h3 className="runDateDisplay"> {name}</h3>
                <img className="cardDisplayExhibit" src={image} />
                <button className="exhibit-button" onClick={() => onClick(exhibit)} >View Animals</button>
            </div>

        </div>
    )
}

export default ExhibitDisplay
