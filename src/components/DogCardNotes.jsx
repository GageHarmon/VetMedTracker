function DogCardNotes({ dog }) {
    return (
        <div className="DogContainer">
            <h4>{dog.name}</h4>
            <img src={dog.image} alt={dog.name} />
            <p>{dog.breed}</p>
            {dog && ( // Add a check to see if dose is truthy before accessing its properties
                <ul>
                    <li>Description: {dog.description}</li>
                    <li>Notes: {dog.notes}</li>
                </ul>
            )}
        </div>
    );
}

export default DogCardNotes;