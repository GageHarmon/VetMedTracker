import React from "react";
import NavBar from "./NavBar";
import DogCardNotes from "./DogCardNotes";

function NotesPage({ dogs }) {
    return (
        <div>
            <NavBar />
            <br />
            <ul className="cards">
                {dogs.map((dog) => {
                    return (
                        <DogCardNotes
                            key={dog.id}
                            dog={dog}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default NotesPage;