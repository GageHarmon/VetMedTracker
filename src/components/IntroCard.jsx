import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function IntroCard() {
    return (
        <Card style={{ display: "flex", width: "80vh", height: "75vh", backgroundColor: "#90fd92", borderRadius: "1.5vh", margin: "2vh auto auto auto" }}>
            <CardActionArea>
                <CardMedia component="img" style={{ margin: "auto", height: "45vh" }}
                    image="./images/Bindi+SullyMountain.jpg" alt="Bindi and Sully" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: "bold", marginTop: "3vh" }}>
                        New to the app?
                    </Typography>
                    <Typography variant="body2" style={{ fontSize: "2vh", margin: "3vh 1vh -2vh 1vh" }}>
                        Welcome to the best Veterinary medicine & data tracker to be
                        invented since 1600 A.D. Please follow the navigation buttons above
                        to access the Dosage Page for medicinal administration or the Notes
                        Page to update any info needed on our fluffy friends!
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
export default IntroCard;