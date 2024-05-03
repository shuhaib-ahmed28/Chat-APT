import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import LogOut from "./LogOut";

const Navigation = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="nav">
      <h1 className="app-name">Chat-APT</h1>
      {user ? <LogOut/> : <SignIn/>}
     
      

    </div>
  );
};

export default Navigation;
