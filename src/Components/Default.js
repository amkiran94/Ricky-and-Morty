import React from 'react'

function Default() {
    
    return (
        <div className="text-light">
            <header className="mt-3" style={{ fontSize: "60px", textAlign: "center", fontFamily: "cursive" }}>Ricky And Morty</header>
            <p style={{
                fontSize: "25px",
                textAlign: "center", margin: "50px", fontFamily: "serif"
            }}>Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's late-night programming block Adult Swim. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures.</p>
            <div style={{ margin: "20px", float: "right", fontFamily: "serif" }}>
                <h5> Created by </h5>
                <ul>
                    <li>Dan Harmon</li>
                    <li>Justin Roiland</li>
                </ul>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Default
