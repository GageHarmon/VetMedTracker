import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import DosePage from "./DosePage";
import HomePage from "./HomePage";
import NotesPage from "./NotesPage";


function Home() {
    const [dogs, setDogs] = useState([]);
    const [dose, setDose] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/dogs')
            .then((r) => r.json())
            .then(setDogs);
    }, []);

    useEffect(() => {
        fetch('http://localhost:3000/dose')
            .then((r) => r.json())
            .then(setDose);
    }, []);


    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/DosePage">
                    <DosePage dogs={dogs} dose={dose} />
                </Route>
                <Route exact path="/InfoPage">
                    <NotesPage dogs={dogs} />
                </Route>
            </Switch>
        </main>
    );
}

export default Home;

