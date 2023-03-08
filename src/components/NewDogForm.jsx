import React, { useState } from "react";

function NewDogForm({ onNewDog }) {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [image, setImage] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const newDog = {
            name: name,
            breed: breed,
            image: image,
        };

        // Send the POST request to create a new dog in the database
        fetch("http://localhost:3000/dogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newDog),
        })
            .then((response) => response.json())
            .then((data) => {
                onNewDog(data);
                setName("");
                setBreed("");
                setImage("");
            });
    }

    return (
        <div className="new-dog-form">
            <h2>Add a Doggo!</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Dog name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" name="breed" placeholder="Breed" value={breed} onChange={(e) => setBreed(e.target.value)} />
                <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
                <button type="submit">Add Dog</button>
            </form>
        </div>
    );
}

export default NewDogForm;


// import { useState } from "react";

// function NewDogForm({ onNewDog }) {
//     const [name, setName] = useState("");
//     const [breed, setBreed] = useState("");
//     const [image, setImage] = useState("");

//     function handleSubmit(event) {
//         event.preventDefault();
//         const newDog = {
//             name: name,
//             breed: breed,
//             image: image,
//         };
//         fetch("/dogs", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(newDog),
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 onNewDog(data);
//                 setName("");
//                 setBreed("");
//                 setImage("");
//             });
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Name:
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//             </label>
//             <label>
//                 Breed:
//                 <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
//             </label>
//             <label>
//                 Image:
//                 <input type="file" value={image} onChange={(e) => setImage(e.target.value)} />
//             </label>
//             <button type="submit">Create Dog</button>
//         </form>
//     );
// }

// export default NewDogForm;



// function handleChange(event) {
//     setFormData({
//         ...formData,
//         [event.target.name]: event.target.value,
//     });
// }






