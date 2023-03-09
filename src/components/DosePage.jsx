import React, { useState } from "react";
import DogCardDose from "./DogCardDose";
import DoseForm from "./DoseForm";
// import NewDogForm from "./NewDogForm"  pass onNewDog to DosePage

function DosePage({ dogs, dose, handleDelete }) {
    const [selectedDog, setSelectedDog] = useState(null);

    const handleDogClick = (dog) => {
        setSelectedDog(dog);
    };

    const handleDoseSubmit = (doseData) => {
        fetch(`http://localhost:3000/dose/${selectedDog.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(doseData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="god-container">
            <br />
            {selectedDog ? (
                <div >
                    <DogCardDose
                        key={selectedDog.id}
                        dog={selectedDog}
                        onDelete={handleDelete}
                        dose={dose.find((doseData) => doseData.id === selectedDog.id)}
                    />
                    <DoseForm onSubmit={handleDoseSubmit} />
                </div>
            ) : (
                <div className="all-cards">
                    {dogs.map((dog) => (
                        <div key={dog.id} className="single-cards">
                            <li className="DogContainer" onClick={() => handleDogClick(dog)}>
                                <h4>{dog.name}</h4>
                                <img src={dog.image} alt={dog.name} />
                                <p>{dog.breed}</p>

                            </li>
                        </div>
                    ))}
                </div>
            )}
            {/* <NewDogForm onNewDog={onNewDog} /> */}
        </div>
    );
}

export default DosePage;
