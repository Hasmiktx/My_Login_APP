import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

export default function About() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="50%">
        <Box sx={{ bgcolor: "yellow", height: "60vh" }}>
          <Typography variant="subtitle1"> About Us</Typography>{" "}
        </Box>
      </Container>
    </React.Fragment>
  );
}
