import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Search from "./Search";
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
                <AppBar color="secondary" style={{ display: "flex" }}>
                    <Toolbar variant="dense" style={{ flex: 1, margin: "auto" }} >

                        <Search searchDog={searchDog} onChangeSearch={onChangeSearch} style={{ flex: 1, margin: "0px 50px 0px 50px" }} />

                        <Button href="/" variant="contained" color="primary" style={{ flex: 1, margin: "0px 50px 0px 50px" }}>
                            Home
                        </Button>

                        <Button href="/DosePage" variant="contained" style={{ flex: 1, margin: "0px 50px 0px 50px" }}>
                            Dosage
                        </Button>

                        <Button href="/NotesPage" variant="contained" style={{ flex: 1, margin: "0px 50px 0px 50px" }}>
                            Notes
                        </Button>
                    </Toolbar>
                </AppBar >
            </ThemeProvider>
        </Box >
    );
}




// import React from "react";
// import { NavLink } from "react-router-dom";

// const linkStyles = {
//     display: "inline-block",
//     width: "50px",
//     padding: "12px",
//     margin: "0 6px 6px",
//     background: "blue",
//     textDecoration: "none",
//     color: "white",
// };

// function NavBar() {
//     return (
//         <div>
//             <NavLink
//                 to="/"
//                 exact
//                 style={linkStyles}
//                 activeStyle={{
//                     background: "darkblue",
//                 }}
//             >
//                 Home
//             </NavLink>
//             <NavLink
//                 to="/DosePage"
//                 exact
//                 style={linkStyles}
//                 activeStyle={{
//                     background: "darkblue",
//                 }}
//             >
//                 Dosage
//             </NavLink>
//             <NavLink
//                 to="/InfoPage"
//                 exact
//                 style={linkStyles}
//                 activeStyle={{
//                     background: "darkblue",
//                 }}
//             >
//                 Info
//             </NavLink>
//         </div>
//     );
// }

// export default NavBar;

