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
                <AppBar color="secondary" style={{ display: "flex", padding: "2vh 0vh 2vh 0vh", borderRadius: "1.5vh", position: "relative" }}>
                    <Toolbar variant="dense" style={{ flex: 1 }} >

                        <PetsIcon color="primary" style={{ margin: "0vh 5vh 0vh 5vh", fontSize: 50, boxShadow: "0.5vh 0.5vh 1.5vh 0.5vh #002200", borderRadius: "50%" }} />

                        <Button href="/" variant="contained" color="primary" style={{ flex: 1, margin: "0vh 10vh 0vh 10vh", boxShadow: "0.5vh 0.5vh 1.5vh 0.5vh #000", color: "black", fontWeight: "bold", borderRadius: "1.5vh" }}>
                            Home
                        </Button>

                        <Button href="/DosePage" variant="contained" style={{ flex: 1, margin: "0vh 10vh 0vh 10vh", boxShadow: "0.5vh 0.5vh 1.5vh 0.5vh #000", color: "black", fontWeight: "bold", borderRadius: "1.5vh" }}>
                            Dosage
                        </Button>

                        <Button href="/NotesPage" variant="contained" style={{ flex: 1, margin: "0vh 10vh 0vh 10vh", boxShadow: "0.5vh 0.5vh 1.5vh 0.5vh #000", color: "black", fontWeight: "bold", borderRadius: "1.5vh" }}>
                            Notes
                        </Button>

                        <Search searchDog={searchDog} onChangeSearch={onChangeSearch} style={{ flex: 1, margin: "0vh 10vh 0vh 20vh" }} />
                    </Toolbar>
                </AppBar >
            </ThemeProvider>
        </Box >
    );
}

