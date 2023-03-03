import React, { useState, useEffect } from "react";
import DogList from "./DogList";


function DogPage() {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/dogs')
            .then((r) => r.json())
            .then(setDogs);
    }, []);
    console.log(dogs)

    // function deleteClick(id) {
    //     fetch(`http://localhost:3000/dogs/${id}`, {
    //         method: "DELETE",
    //     })
    //     const newDogs = dogs.filter((dogs) => dogs.id !== id)
    //     setDogs(newDogs)
    // }

    return (
        <main>
            {/* <DogList dogs={setDogs} deleteClick={deleteClick} /> */}
            <DogList dogs={dogs} />
        </main>
    );
}

export default DogPage;

