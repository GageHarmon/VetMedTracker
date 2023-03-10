import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const card = (
    <React.Fragment>
        <Grid style={{ display: "flex", flexDirection: "row", backgroundColor: "#000" }}>
            <CardContent style={{ backgroundColor: "#90fd92", display: "flex", flexDirection: "column", padding: "40px 10px 40px 10px" }}>
                <Typography variant="h5" component="div">
                    Stemcell Injections
                </Typography>
                <Typography variant="body2" style={{ display: "inline-block", marginTop: "20px" }}>Stem-cell therapy is the use of stem cells to treat or prevent a disease or condition. As of 2016, the only established therapy using stem cells is hematopoietic stem cell transplantation. This usually takes the form of a bone-marrow transplantation, but the cells can also be derived from umbilical cord blood.
                </Typography>
                <br />
                <br />
                <CardActions>
                    <Button size="small" href="https://en.wikipedia.org/wiki/Stem-cell_therapy">Learn More</Button>
                </CardActions>
            </CardContent>
            <CardContent style={{ backgroundColor: "#90fd92", display: "flex", flexDirection: "column", padding: "40px 10px 40px 10px" }}>
                <Typography variant="h5" component="div">
                    Hemagglutination
                </Typography>
                <Typography variant="body2" style={{ display: "inline-block", marginTop: "20px" }}>Hemagglutination, or haemagglutination, is a specific form of agglutination that involves red blood cells. It has two common uses in the laboratory: blood typing and the quantification of virus dilutions in a haemagglutination assay.
                </Typography>
                <br />
                <br />
                <CardActions>
                    <Button size="small" href="https://en.wikipedia.org/wiki/Hemagglutination">Learn More</Button>
                </CardActions>
            </CardContent>
            <CardContent style={{ backgroundColor: "#90fd92", display: "flex", flexDirection: "column", padding: "40px 10px 40px 10px" }}>
                <Typography variant="h5" component="div">
                    Bone Marrow Aspirate Concentrate
                </Typography>
                <Typography variant="body2" style={{ display: "inline-block", marginTop: "20px" }}>Bone marrow aspirate can be processed in the clinic to arrive at a concentrated solution of stem cells and growth factors. BMAC can then be used immediately in damaged joints and soft tissues.
                </Typography>
                <br />
                <br />
                <CardActions>
                    <Button size="small" href="https://en.wikipedia.org/wiki/Bone_marrow_examination">Learn More</Button>
                </CardActions>
            </CardContent>
            <CardContent style={{ backgroundColor: "#90fd92", display: "flex", flexDirection: "column", padding: "40px 10px 40px 10px" }}>
                <Typography variant="h5" component="div">
                    Platelet-rich plasma
                </Typography>
                <Typography variant="body2" style={{ display: "inline-block", marginTop: "20px" }}>Platelet-rich plasma (PRP), also known as autologous conditioned plasma, is a concentrate of platelet-rich plasma protein derived from whole blood, centrifuged to remove red blood cells.
                </Typography>
                <br />
                <br />
                <CardActions>
                    <Button size="small" href="https://en.wikipedia.org/wiki/Platelet-rich_plasma">Learn More</Button>
                </CardActions>
            </CardContent>
            <CardContent style={{ backgroundColor: "#90fd92", display: "flex", flexDirection: "column", padding: "40px 10px 40px 10px" }}>
                <Typography variant="h5" component="div">
                    Acepromazine
                </Typography>
                <Typography variant="body2" style={{ display: "inline-block", marginTop: "20px" }}>Acepromazine, acetopromazine, or acetylpromazine is a phenothiazine derivative antipsychotic drug. It was used in humans during the 1950s as an antipsychotic, but is now almost exclusively used on animals as a sedative and antiemetic.
                </Typography>
                <br />
                <br />
                <CardActions>
                    <Button size="small" href="https://en.wikipedia.org/wiki/Acepromazine">Learn More</Button>
                </CardActions>
            </CardContent>
        </Grid>
    </React.Fragment>
);

function DoseDescCard() {
    return (
        <Box sx={{ width: "auto", margin: "5% 20px auto 20px" }} >
            < Card variant="outlined" > {card} </Card>
        </ Box >
    );
}
export default DoseDescCard