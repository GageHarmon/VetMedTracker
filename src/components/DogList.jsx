import React from "react";
import DogCard from "./DogCard";

function DogList({ dogs }) {
    const dogList = dogs.map((dog) => (
        <DogCard
            key={dog.id}
            dogs={dog}
            image={dog.image}
            name={dog.name}
            breed={dog.breed}
        />
    ));


    return (
        <ul className="cards"> {dogList}</ul>
    );
}

export default DogList;