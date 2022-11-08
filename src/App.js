import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import Loggin from "./components/Loggin";

import HomePage from "./components/HomePage";

import {
  selectCurrentUser,
  setCurrentUser,
  setLoginTrue,
} from "./features/login/loginSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        dispatch(setCurrentUser(user.email));
        dispatch(setLoginTrue());
      } else {
        dispatch(setCurrentUser(null));
      }
    });
  }, []);
  return <>{currentUser ? <HomePage /> : <Loggin />}</>;
}

export default App;
