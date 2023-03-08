import React, { useState } from "react";

function NewNotesForm({ onSubmit }) {
    const [dogDescription, setDogDescription] = useState("");
    const [dogNotes, setDogNotes] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        const notesData = {
            dogDescription,
            dogNotes,
        };
        onSubmit(notesData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    id="dogDescription"
                    value={dogDescription}
                    onChange={(event) => setDogDescription(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="notes">Notes:</label>
                <input
                    type="text"
                    id="notes"
                    value={dogNotes}
                    onChange={(event) => setDogNotes(event.target.value)}
                />
            </div>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default NewNotesForm;