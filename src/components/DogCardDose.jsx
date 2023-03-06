import React from "react";

function DogCardDose({ dog, dose }) {
    return (
        <div className="DogContainer">
            <h4>{dog.name}</h4>
            <img src={dog.image} alt={dog.name} />
            <p>{dog.breed}</p>
            {dose && ( // Add a check to see if dose is truthy before accessing its properties
                <ul>
                    <li>PRP: {dose.prp}</li>
                    <li>ACP: {dose.acp}</li>
                    <li>BMAC: {dose.bmac}</li>
                    <li>HA: {dose.ha}</li>
                    <li>Stem Cells: {dose.stemcells}</li>
                </ul>
            )}
        </div>
    );
}

export default DogCardDose;

