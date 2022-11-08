import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Header from "./Header";
import Conteiner from "./Conteiner";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";

import About from "./About";
export default function HomePage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100%">
        <Box sx={{ height: "100vh", p: "5%" }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Header />
            </Grid>
            <Grid item xs={8}>
              <Routes>
                <Route path="/" element={<Conteiner />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </Grid>
            <Grid item xs={8}>
              <Footer />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
