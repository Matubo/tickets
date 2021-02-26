import "./App.css";
import LoginComponent from "./docs/elements/loginSection";
import FlightList from "./docs/elements/flightList";
import { useEffect, useState } from "react";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  function logIn() {
    localStorage.setItem("loginIn", true);
    setLoginStatus(true);
  }

  function logOut() {
    localStorage.setItem("loginIn", false);
    setLoginStatus(false);
  }

  useEffect(() => {
    console.log("test ");
    if (localStorage.getItem("loginIn") === "true") {
      setLoginStatus(true);
    }
  }, []);

  return (
    <div className="App">
      <PageChanger
        status={loginStatus}
        logOut={logOut}
        logIn={logIn}
      ></PageChanger>
    </div>
  );
}

function PageChanger(props) {
  const status = props.status;
  if (status) {
    return <FlightList callbackLogoutFunction={props.logOut}></FlightList>;
  } else {
    return (
      <LoginComponent callbackLoginFunction={props.logIn}></LoginComponent>
    );
  }
}

export default App;
