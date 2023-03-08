import React, { useState } from "react";
import DogCardNotes from "./DogCardNotes";
import NewDogForm from "./NewDogForm"
import NewNotesForm from "./NewNotesForm"

function NotesPage({ dogs, handleDelete, onNewDog }) {
    const [selectedDog, setSelectedDog] = useState("");

    const handleDogClick = (dog) => {
        setSelectedDog(dog);
    };


    // THANK YOU CHAT GPT FOR THE ADDING AND NOT JUST REPLACING
    const handleNotesSubmit = (notesData) => {
        const updatedDog = {
            ...selectedDog,
            description: selectedDog.description ? selectedDog.description + "\n" + notesData.dogDescription : notesData.dogDescription,
            notes: selectedDog.notes ? selectedDog.notes + "\n" + notesData.dogNotes : notesData.dogNotes
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


    return (
        <div className="god-container">
            <br />
            {selectedDog ? (
                <div>
                    <DogCardNotes
                        dog={selectedDog}
                        onDelete={handleDelete}
                    />
                    <NewNotesForm onSubmit={handleNotesSubmit} />
                </div>
            ) : (
                <div className="all-cards">
                    {dogs.map((dog) => (
                        <div key={dog.id} className="single-cards">
                            <div className="DogContainer" onClick={() => handleDogClick(dog)}>
                                <h4>{dog.name}</h4>
                                <img src={dog.image} alt={dog.name} />
                                <p>{dog.breed}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <br />
            <NewDogForm onNewDog={onNewDog} />
        </div>
    );
}

export default NotesPage;




// var React = require('react');
// var ReactDOM = require('react-dom');
// var Carousel = require('react-responsive-carousel').Carousel;

// var DemoCarousel = React.createClass({
//     render() {
//         return (
//             <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
//                 <div>
//                 {selectedDog ? (
//                 <div>
//                     <DogCardNotes
//                         dog={selectedDog}
//                         onDelete={handleDelete}
//                     />
//                     <NewNotesForm onSubmit={handleNotesSubmit} />
//                 </div>
//             ) : (
//                 <div className="cards">
//                     {dogs.map((dog) => (
//                         <div key={dog.id}>
//                             <div className="DogContainer" onClick={() => handleDogClick(dog)}>
//                                 <h4>{dog.name}</h4>
//                                 <img src={dog.image} alt={dog.name} />
//                                 <p>{dog.breed}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//             <br />
//             <NewDogForm onNewDog={onNewDog} />
//                 </div>
//             </Carousel>
//         );
//     }
// });
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page 
// <link rel="stylesheet" href="carousel.css"/>
// Begin DemoSliderControls
