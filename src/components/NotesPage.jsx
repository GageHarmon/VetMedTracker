import React, { useState } from "react";
import DogCardNotes from "./DogCardNotes";
import NewNotesForm from "./NewNotesForm";
import NewDogForm from "./NewDogForm";

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
                        <DogCardNotes dog={selectedDog} onDelete={handleDelete} />
                        <button onClick={() => setSelectedDog("")}>Show all dogs</button>
                    </div>
                    {isNewNotesFormOpen && (
                        <NewNotesForm
                            onSubmit={handleNotesSubmit}
                            onClose={handleNewNotesFormClose}
                        />
                    )}
                </div>
            ) : (
                <div className="all-cards">
                    {dogs.map((dog) => (
                        <div key={dog.id} className="single-cards">
                            <div onClick={() => handleDogClick(dog)}>
                                <h4>{dog.name}</h4>
                                <img src={dog.image} alt={dog.name} />
                                <p>{dog.breed}</p>
                            </div>
                        </div>
                    ))}
                </div>
                ////////added the line below from ChatGPT to make the 1st form disappear when the second is opened////////
            )}
            {!selectedDog && <NewDogForm onNewDog={onNewDog} />}
        </div>
    );
}

export default NotesPage;

// import React, { useState } from "react";
// import DogCardNotes from "./DogCardNotes";
// import NewNotesForm from "./NewNotesForm"
// import NewDogForm from "./NewDogForm"

// function NotesPage({ dogs, handleDelete, onNewDog }) {
//     const [selectedDog, setSelectedDog] = useState("");

//     const handleDogClick = (dog) => {
//         setSelectedDog(dog);
//     };


//     // Built the patch myself but used **ChatGPT** to modify so that it updates the desc and notes, and not just replace.
//     const handleNotesSubmit = (notesData) => {
//         const updatedDog = {
//             ...selectedDog,
//             description: selectedDog.description ? selectedDog.description + "\n" + notesData.dogDescription : notesData.dogDescription,
//             notes: selectedDog.notes ? selectedDog.notes + "\n" + notesData.dogNotes : notesData.dogNotes
//         };
//         fetch(`http://localhost:3000/dogs/${selectedDog.id}`, {
//             method: "PATCH",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(updatedDog),
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 setSelectedDog(data); // update selectedDog state with the new data
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     };


//     return (
//         <div className="page-container">
//             {selectedDog ? (
//                 <div className="DogContainer" >
//                     <div>
//                         <DogCardNotes
//                             dog={selectedDog}
//                             onDelete={handleDelete}
//                         />
//                         <button onClick={() => setSelectedDog("")}>Show all dogs</button>
//                     </div>
//                     <NewNotesForm onSubmit={handleNotesSubmit} />
//                 </div>
//             ) : (
//                 <div className="all-cards">
//                     {dogs.map((dog) => (
//                         <div key={dog.id} className="single-cards">
//                             <div onClick={() => handleDogClick(dog)}>
//                                 <h4>{dog.name}</h4>
//                                 <img src={dog.image} alt={dog.name} />
//                                 <p>{dog.breed}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//             <NewDogForm onNewDog={onNewDog} />
//         </div>
//     );
// }

// export default NotesPage;