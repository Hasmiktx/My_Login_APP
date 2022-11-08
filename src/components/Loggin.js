import React, { useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useSelector, useDispatch } from "react-redux";
import {
  selectLogin,
  selectCurrentUser,
  setLoginTrue,
  setCurrentUser,
} from "../features/login/loginSlice";
import { auth } from "../firebase-config";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Loggin() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassw, setloginPassw] = useState("");

  const isLoggin = useSelector(selectLogin);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       console.log(user);
  //       dispatch(setCurrentUser(user.email));
  //       dispatch(setLoginTrue());
  //     } else {
  //       dispatch(setCurrentUser(null));
  //     }
  //   });
  // }, []);
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassw
      );
      dispatch(setLoginTrue());

      console.log(user.user.email);
      setLoginEmail("");
      setloginPassw("");
    } catch (err) {
      console.log(err.massage);
    }
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassw
      );
      dispatch(setLoginTrue());
      setLoginEmail("");
      setloginPassw("");
    } catch (err) {
      console.log(err.massage);
    }
  };

  return (
    <div>
      <Box sx={{ width: "60%", mx: "auto ", p: 16, m: 10 }}>
        <Stack spacing={4}>
          <Item>
            <Typography variant="h5">Login</Typography>

            <TextField
              id="outlined-basic"
              label="email"
              variant="outlined"
              value={loginEmail}
              onChange={(e) => {
                setLoginEmail(e.target.value);
              }}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={loginPassw}
              onChange={(e) => {
                setloginPassw(e.target.value);
              }}
            />

            <Button variant="contained" size="large" onClick={login}>
              LOG IN
            </Button>
          </Item>
          {!isLoggin && (
            <Item>
              <Typography variant="h5" align="center">
                Register
              </Typography>

              <Button variant="contained" size="large" onClick={register}>
                SIGN UP
              </Button>
            </Item>
          )}
        </Stack>
      </Box>
    </div>
  );
}
