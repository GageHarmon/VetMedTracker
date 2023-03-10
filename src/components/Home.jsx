import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import DosePage from "./DosePage";
import HomePage from "./HomePage";
import NotesPage from "./NotesPage";
import NavBar from "./NavBar"


function Home() {
    const [dogs, setDogs] = useState([]);
    const [dose, setDose] = useState([]);
    const [searchDog, setSearchDog] = useState("");
    const [dogsLength, setDogsLength] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000/dogs')
            .then((r) => r.json())
            .then((data) => {
                setDogs(data);
                setDogsLength(data.length); // update state variable
            });
    }, []);

    useEffect(() => {
        fetch('http://localhost:3000/dose')
            .then((r) => r.json())
            .then(setDose);
    }, []);

    const handleDelete = (dog) => {
        fetch(`http://localhost:3000/dogs/${dog.id}`, {
            method: "DELETE",
        })
            .then(() => {
                setDogs(dogs.filter((d) => d.id !== dog.id));
                setDogsLength(dogsLength - 1); // update state variable
            });
    };

    const dogsToDisplay = dogs.filter((dog) =>
        dog.name.toLowerCase().includes(searchDog.toLowerCase())
    );

    function handleNewDog(newDog) {
        setDogs([...dogs, newDog]);
    }



    return (
        <div>
            <NavBar searchDog={searchDog} onChangeSearch={setSearchDog} />
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/DosePage">
                <DosePage dogs={dogsToDisplay} dose={dose} onNewDog={handleNewDog} handleDelete={handleDelete} key={dogsLength} />
            </Route>
            <Route exact path="/NotesPage">
                <NotesPage dogs={dogsToDisplay} onNewDog={handleNewDog} handleDelete={handleDelete} key={dogsLength} />
            </Route>
        </div>
    );
}

export default Home;