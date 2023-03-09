function DogCardDose({ dog, dose, onDelete }) {
    return (

        <div className="DogContainer">
            <h4>{dog.name}</h4>
            <img src={dog.image} alt={dog.name} />
            <p>{dog.breed}</p>
            {dose && ( // Add a check to see if dose is truthy before accessing its properties
                <div className="dose-list">
                    <li>PRP: {dose.prp}</li>
                    <li>ACP: {dose.acp}</li>
                    <li>BMAC: {dose.bmac}</li>
                    <li>HA: {dose.ha}</li>
                    <li>Stem Cells: {dose.stemcells}</li>
                </div>
            )}
            <div>
                <button onClick={() => onDelete(dog)}>Delete</button>
            </div>
        </div>

    );
}

export default DogCardDose;


// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";


// export default function DogCardDose(dog, dose) {
//     return (
//         <Card sx={{ maxWidth: 345 }}>
//             <CardMedia component="img" sx={{ height: 140 }} src={dog.image} alt={dog.name} />
//             <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                     {dog.name}
//                 </Typography>
//                 <Typography gutterBottom variant="h5" component="div">
//                     {dog.breed}
//                 </Typography>
//                 <Typography variant="list" color="text.secondary">

//                     {dose && ( // Add a check to see if dose is truthy before accessing its properties
//                         <div className="dose-list">
//                             <li>PRP: {dose.prp}</li>
//                             <li>ACP: {dose.acp}</li>
//                             <li>BMAC: {dose.bmac}</li>
//                             <li>HA: {dose.ha}</li>
//                             <li>Stem Cells: {dose.stemcells}</li>
//                         </div>
//                     )}
//                 </Typography>
//             </CardContent>
//             <CardActions>
//                 <Button size="small">Update</Button>
//                 <Button size="small">Delete</Button>
//             </CardActions>
//         </Card>
//     );
// }

