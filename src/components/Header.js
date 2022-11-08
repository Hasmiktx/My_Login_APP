import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectLogin,
  setLoginFalse,
} from "../features/login/loginSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const logOut = async () => {
    dispatch(setLoginFalse());
    await signOut(auth);
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs>
        <Link to="/">
          <Item>Home</Item>
        </Link>
      </Grid>
      <Grid item xs>
        <Item>Menu</Item>
      </Grid>

      <Grid item xs>
        <Link to="/about">
          <Item>About US</Item>
        </Link>
      </Grid>

      <Grid item xs>
        <Button variant="contained" size="large" onClick={logOut}>
          LOGOut
        </Button>
        <Typography>{user}</Typography>
      </Grid>
    </Grid>
  );
}
