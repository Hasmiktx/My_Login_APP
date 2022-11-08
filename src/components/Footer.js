import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Footer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="90%">
        <Box sx={{ bgcolor: "green", height: "20vh" }}>
          <h1> Footer</h1>{" "}
        </Box>
      </Container>
    </React.Fragment>
  );
}
