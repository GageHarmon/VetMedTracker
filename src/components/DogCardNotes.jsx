function DogCardNotes({ dog, onDelete }) {
    return (
        <div className="DogCard">
            <h4>{dog.name}</h4>
            <img src={dog.image} alt={dog.name} />
            <p>{dog.breed}</p>
            <div>
                <div>
                    <li>Description: {dog.description}</li>
                    <li>Notes: {dog.notes}</li>
                </div>
                <button onClick={() => onDelete(dog)}>Delete</button>
            </div>
        </div>
    );
}

export default DogCardNotes;