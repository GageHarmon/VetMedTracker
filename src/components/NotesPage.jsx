import React, { useState } from "react";
import NavBar from "./NavBar";
import DogCardNotes from "./DogCardNotes";
import NewDogForm from "./NewDogForm"

function NotesPage({ dogs }) {
    const [selectedDog, setSelectedDog] = useState(null);

    const handleDogClick = (dog) => {
        setSelectedDog(dog);
    };

    return (
        <div>
            <br />
            <NavBar />
            {selectedDog ? (
                <DogCardNotes
                    key={selectedDog.id}
                    dog={selectedDog}
                />
            ) : (
                <div className="cards">
                    {dogs.map((dog) => (
                        <div key={dog.id}>
                            <div className="DogContainer" onClick={() => handleDogClick(dog)}>
                                <h4>{dog.name}</h4>
                                <img src={dog.image} alt={dog.name} />
                                <p>{dog.breed}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <NewDogForm />
        </div>
    );
}

export default NotesPage;