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
            main: "#00a100",
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
                <AppBar color="secondary" style={{ display: "flex", padding: "20px 0px 20px 0px" }}>
                    <Toolbar variant="dense" style={{ flex: 1 }} >

                        <PetsIcon color="primary" style={{ margin: "0px 50px 0px 50px", fontSize: 50, border: "3px solid green", borderRadius: "50%" }} />

                        <Button href="/" variant="contained" color="primary" style={{ flex: 1, margin: "0px 100px 0px 100px", boxShadow: "0px 0px 10px 8px #005800" }}>
                            Home
                        </Button>

                        <Button href="/DosePage" variant="contained" style={{ flex: 1, margin: "0px 100px 0px 100px", boxShadow: "0px 0px 10px 8px #005800" }}>
                            Dosage
                        </Button>

                        <Button href="/NotesPage" variant="contained" style={{ flex: 1, margin: "0px 100px 0px 100px", boxShadow: "0px 0px 10px 8px #005800" }}>
                            Notes
                        </Button>

                        <Search searchDog={searchDog} onChangeSearch={onChangeSearch} style={{ flex: 1, margin: "0px 100px 0px 20px" }} />
                    </Toolbar>
                </AppBar >
            </ThemeProvider>
        </Box >
    );
}

