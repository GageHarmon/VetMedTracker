import React, { useState } from "react";

function NotesFormUpdate({ onSubmit }) {
    const [dogDescription, setDogDescription] = useState("");
    const [dogNotes, setDogNotes] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        const notesData = {
            dogDescription,
            dogNotes,
        };
        onSubmit(notesData);
        setDogDescription("");
        setDogNotes("");
    };

    return (
        <form onSubmit={handleSubmit} className="notes-form-update">
            <h1>Update Info!</h1>
            <label htmlFor="description">Description:
                <input type="text" id="dogDescription" value={dogDescription} onChange={(event) => setDogDescription(event.target.value)} />
            </label>
            <br />
            <br />
            <label htmlFor="notes">Notes:
                <input type="text" id="notes" value={dogNotes} onChange={(event) => setDogNotes(event.target.value)} />
            </label>
            <br />
            <br />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default NotesFormUpdate;