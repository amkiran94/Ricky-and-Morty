import React from 'react'

function DisplayEpisode(props) {
    const { id, name, air_date, episode } = props.epics
    console.log(props.epics)
    return (
        <div key={id} className="col-md-3 text-light mx-auto ">
            <h6 className="text-center">
                Note: Enter the name properly to display the details
      </h6>
            <h1 className=" mx-auto text-light">Searched Results</h1>
            <div className="card mt-3 mb-2 mx-auto" style={{ width: "20rem" }}>
                <div className="card-body">
                    <h5 className="card-title text-dark">{id}. {name}</h5>
                    <h6 className="card-subtitle mb-3 text-muted">{episode}</h6>
                    <li href="#" className="text-muted">{air_date}</li>
                </div>
            </div>
        </div>
    )
}

export default DisplayEpisode
