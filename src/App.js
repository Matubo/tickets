import "./App.css";
import LoginComponent from "./docs/elements/loginSection";
import FlightList from "./docs/elements/flightList";
import { useEffect, useState } from "react";

function App() {
  //стайт состояния логирования
  const [loginStatus, setLoginStatus] = useState(false);

  //залогиниться
  function logIn() {
    localStorage.setItem("loginIn", true);
    setLoginStatus(true);
  }
  //разлогиниться
  function logOut() {
    localStorage.setItem("loginIn", false);
    setLoginStatus(false);
  }
  //проверка на то были ли мы залогированы ранее
  useEffect(() => {
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
