import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

export function Home() {
  const adminUser = {
    email: "admin@user.com",
    password: "admin123"
  }

  const [user, setUser] = useState({ name: "", email: "" }); //default user setting
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Incorrect, try something else.");
      setError("Incorrect, try something else.");
    }
  }

  const Logout = () => {
    setUser({ name: "", email: "" }); //Logout returns to default user setting (empty)
  }

  return (
    <div className="App">
      {(user.email != "") ? (
        //if the user email is NOT showing nothing, display welcome message
        <>
          <div className="welcome">
            <h2>Welcome, <span>{user.name}! <p>Let's turn your idea into a plan of action.</p> </span></h2>
            <button onClick={Logout}>Logout</button>
            <Link to="plan"><button>Start new plan</button></Link>
            <button>Previous plans</button>
            <Link to="/"><button>Home</button></Link>
          </div>
        </>

      ) : (
        <LoginForm Login={Login} error={error} />
          )}
          </div>
  );
}
