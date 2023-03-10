function NotesCard({ dog, onDelete }) {
    return (
        <div className="notesCard">
            <h4>{dog.name}</h4>
            <img src={dog.image} alt={dog.name} />
            <p>{dog.breed}</p>
            <div>
                <div className="notes-list">
                    <li>Description: {dog.description}</li>
                    <li>Notes: {dog.notes}</li>
                </div>
                <button onClick={() => onDelete(dog)}>Delete</button>
            </div>
        </div>
    );
}

export default NotesCard;