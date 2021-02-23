import { useRef, useState } from "react";
import React from "react";
import "../styles/loginSection.css";

const loginRegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*?]{8,}$/;

function LoginComponent(props) {
  const loginRef = useRef(null);
  const passwordRef = useRef(null);
  const [loginStatus, setLoginStatus] = useState(true);
  const [passwordStatus, setPasswordStatus] = useState(true);

  function dataValidation() {
    let testEmail = loginRegExp.test(loginRef.current.value);
    let testPassword = passwordRegExp.test(passwordRef.current.value);
    if (testEmail && testPassword) {
      props.callbackFunction();
    }
    if (!testEmail) {
      setLoginStatus(false);
    }
    if (!testPassword) {
      setPasswordStatus(false);
    }
  }

  return (
    <div className="loginComponent">
      <div className="loginComponentBlur">
        <div className="loginBox">
          <h3 className="loginHeading">Simple Flight Check</h3>

          {loginStatus ? (
            <React.Fragment>
              <p className="usernameHeading">Логин:</p>
              <input
                type="text"
                ref={loginRef}
                className="usernameInput"
              ></input>
              <p className="usernameError"></p>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <p className="usernameHeading loginErrorHeading">Логин:</p>
              <input
                type="text"
                ref={loginRef}
                className="usernameInput loginErrorInput"
              ></input>
              <p className="usernameError">
                Логин не соответствует требованиям
              </p>
            </React.Fragment>
          )}

          {passwordStatus ? (
            <React.Fragment>
              <p className="passwordHeading">Пароль:</p>
              <input
                type="password"
                ref={passwordRef}
                className="passwordInput"
              ></input>
              <p className="passwordError"></p>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <p className="passwordHeading loginErrorHeading">Пароль:</p>
              <input
                type="password"
                ref={passwordRef}
                className="passwordInput loginErrorInput"
              ></input>
              <p className="passwordError">
                Пароль не соответствует требованиям
              </p>
            </React.Fragment>
          )}

          <button className="loginButton" onClick={dataValidation}>
            Войти
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
