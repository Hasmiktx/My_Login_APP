import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Conteiner() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="50%">
        <Box sx={{ bgcolor: "green", height: "60vh" }}>
          <h1> Conteiner</h1>{" "}
        </Box>
      </Container>
    </React.Fragment>
  );
}
