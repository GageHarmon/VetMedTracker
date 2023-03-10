import React, { useState } from "react";
import DoseCard from "./DoseCard";
import DoseForm from "./DoseForm";
import DoseDescCard from "./DoseDescCard"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function DosePage({ dogs, dose, handleDelete }) {

    // +++ selected dog state to display the dog card clicked +++

    const [selectedDog, setSelectedDog] = useState(null);

    const handleDogClick = (dog) => {
        setSelectedDog(dog);
    };

    // +++ patches Dose info based on the id of the selected dog +++
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
        <div className="page-container">
            <DoseDescCard />
            {/* BELOW chooses whether the displayed is the selected dog OR all of the dogs */}
            {selectedDog ? (
                <div className="DogContainer2">
                    <div >
                        <DoseCard key={selectedDog.id} dog={selectedDog} onDelete={handleDelete} dose={dose.find((doseData) => doseData.id === selectedDog.id)} />
                        <button onClick={() => setSelectedDog("")}>Show all dogs</button> {/* +++ SETS THE SELECTED DOG TO NULL SO IT RENDERS THE WHOLE LIST ++++ */}
                    </div>
                    <DoseForm onSubmit={handleDoseSubmit} />
                </div>

            ) : ( //+++ Built both separately but ChatGPT helped solve how to display one vs the other based on selected dog +++

                <Carousel showArrows={true} showThumbs={false} className="all-cards">
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
            )}
        </div>
    );
}

export default DosePage;