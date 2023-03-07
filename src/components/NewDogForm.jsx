import React, { useState } from "react";

function NewDogForm({ onAddDog }) {
    const [imageFile, setImageFile] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        breed: "",
    });

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleImageChange(event) {
        setImageFile(event.target.files[0]);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", formData.name);
        formData.append("breed", formData.breed);
        formData.append("image", formData.image);

        fetch("http://localhost:3000/dogs", {
            method: "POST",
            body: formData,
        })
            .then((r) => r.json())
            .then(onAddDog);
    }

    return (
        <div className="new-dog-form">
            <h2>New Dog</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Dog name" value={formData.name} onChange={handleChange} />
                <input type="file" name="image" placeholder="Image" value={formData.image} onChange={handleChange} />
                <input type="text" name="breed" placeholder="Breed" value={formData.breed} onChange={handleChange} />
                <button type="submit">Add Dog</button>
            </form>
        </div>
    );
}

export default NewDogForm;