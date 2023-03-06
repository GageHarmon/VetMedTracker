import React from "react";
import NavBar from "./NavBar";
import DogCardDose from "./DogCardDose";


function DosePage({ dogs, dose }) {
    return (
        <div>
            <NavBar />
            <ul className="cards">
                {dogs.map((dog) => {
                    // Find the corresponding set of dosage data for the current dog
                    const dogDose = dose.find((doseData) => doseData.id === dog.id);

                    return (
                        <DogCardDose
                            key={dog.id}
                            dog={dog}
                            dose={dogDose} // Pass the corresponding set of dosage data to the DogCard component
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default DosePage;

