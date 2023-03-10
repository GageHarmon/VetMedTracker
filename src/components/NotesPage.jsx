import React, { useState } from "react";
import NotesCard from "./NotesCard";
import NotesFormUpdate from "./NotesFormUpdate";
import NewDogForm from "./NewDogForm";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function NotesPage({ dogs, handleDelete, onNewDog }) {
    const [selectedDog, setSelectedDog] = useState("");
    const [isNewNotesFormOpen, setIsNewNotesFormOpen] = useState(false);

    const handleDogClick = (dog) => {
        setSelectedDog(dog);
        setIsNewNotesFormOpen(true);
    };

    const handleNotesSubmit = (notesData) => {
        const updatedDog = {
            ...selectedDog,
            description: selectedDog.description
                ? selectedDog.description + "\n" + notesData.dogDescription
                : notesData.dogDescription,
            notes: selectedDog.notes
                ? selectedDog.notes + "\n" + notesData.dogNotes
                : notesData.dogNotes,
        };
        fetch(`http://localhost:3000/dogs/${selectedDog.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedDog),
        })
            .then((response) => response.json())
            .then((data) => {
                setSelectedDog(data); // update selectedDog state with the new data
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleNewNotesFormClose = () => {
        setIsNewNotesFormOpen(false);
    };

    return (
        <div className="page-container">
            {selectedDog ? (
                <div className="DogContainer">
                    <div>
                        <NotesCard dog={selectedDog} onDelete={handleDelete} />
                        {/* +++++++ SETS THE SELECTED DOG TO NULL SO IT RENDERS THE WHOLE LIST ++++++++ */}
                        <button onClick={() => setSelectedDog("")}>Show all dogs</button>
                    </div>
                    {isNewNotesFormOpen && (
                        <NotesFormUpdate onSubmit={handleNotesSubmit} onClose={handleNewNotesFormClose} />
                    )}
                </div>
            ) : (
                <Carousel showArrows={true} showThumbs={false} showIndicators={false} className="all-cards">
                    {dogs.map((dog) => (
                        <div key={dog.id} className="single-cards">
                            <div onClick={() => handleDogClick(dog)}>
                                <h4>{dog.name}</h4>
                                <img src={dog.image} alt={dog.name} />
                                <p>{dog.breed}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>
                // +++ added the line below from ChatGPT to make the 1st form disappear when the second is opened +++ //
            )}
            {!selectedDog && <NewDogForm onNewDog={onNewDog} />}
        </div>
    );
}

export default NotesPage;