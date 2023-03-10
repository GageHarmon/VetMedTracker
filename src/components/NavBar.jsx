import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Search from "./Search";
import PetsIcon from '@mui/icons-material/Pets';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            light: "#d3f7c9",
            main: "#3fce32",
            dark: "#1ab927"
        },
        secondary: {
            main: "#90fd92",
        }
    },
});


export default function NavBar({ searchDog, onChangeSearch }) {
    return (
        <Box sx={{ flex: 1 }}>
            <ThemeProvider theme={theme}>
                <AppBar color="secondary" style={{ display: "flex", padding: "20px 0px 20px 0px", borderRadius: "15px", position: "relative" }}>
                    <Toolbar variant="dense" style={{ flex: 1 }} >

                        <PetsIcon color="primary" style={{ margin: "0px 50px 0px 50px", fontSize: 50, boxShadow: "0px 0px 15px 10px", borderRadius: "50%" }} />

                        <Button href="/" variant="contained" color="primary" style={{ flex: 1, margin: "0px 100px 0px 100px", boxShadow: "0px 0px 45px 0px #005800", color: "black", fontWeight: "bold", borderRadius: "15px" }}>
                            Home
                        </Button>

                        <Button href="/DosePage" variant="contained" style={{ flex: 1, margin: "0px 100px 0px 100px", boxShadow: "5px 5px 15px 5px #000", color: "black", fontWeight: "bold", borderRadius: "15px" }}>
                            Dosage
                        </Button>

                        <Button href="/NotesPage" variant="contained" style={{ flex: 1, margin: "0px 100px 0px 100px", boxShadow: "5px 5px 15px 5px #000", color: "black", fontWeight: "bold", borderRadius: "15px" }}>
                            Notes
                        </Button>

                        <Search searchDog={searchDog} onChangeSearch={onChangeSearch} style={{ flex: 1, margin: "0px 100px 0px 20px" }} />
                    </Toolbar>
                </AppBar >
            </ThemeProvider>
        </Box >
    );
}

