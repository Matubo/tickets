import { useRef, useState } from "react";
import React from "react";
import "../styles/loginSection.css";

//регулярные выражения для логина и пароля
const loginRegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Za]{8,}$/;

function LoginComponent(props) {
  //рефы для получения текущих значений login/password
  const loginRef = useRef(null);
  const passwordRef = useRef(null);
  //стейт статуса правильности login/password
  const [loginStatus, setLoginStatus] = useState(true);
  const [passwordStatus, setPasswordStatus] = useState(true);
  //проверка соответствия login/password regExp
  function dataValidation() {
    let emailCheckResult = loginRegExp.test(loginRef.current.value);
    let passwordCheckResult = passwordRegExp.test(passwordRef.current.value);
    if (emailCheckResult && passwordCheckResult) {
      props.callbackFunction();
    }
    if (!emailCheckResult) {
      setLoginStatus(false);
    }
    if (!passwordCheckResult) {
      setPasswordStatus(false);
    }
  }

  return (
    <div className="loginComponent">
      <div className="loginComponentBlur">
        <div className="loginBox">
          <h3 className="loginHeading">Simple Flight Check</h3>

          <UsernameFormfield
            loginRef={loginRef}
            loginStatus={loginStatus}
          ></UsernameFormfield>

          <PasswordFormfield
            passwordStatus={passwordStatus}
            passwordRef={passwordRef}
          ></PasswordFormfield>

          <button className="loginButton" onClick={dataValidation}>
            Войти
          </button>
        </div>
      </div>
    </div>
  );
}

//возврат поля ввода login в зависимости от результатов проверки
function UsernameFormfield(props) {
  return props.loginStatus ? (
    <React.Fragment>
      <p className="usernameHeading">Логин:</p>
      <input type="text" ref={props.loginRef} className="usernameInput"></input>
      <p className="usernameError"></p>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <p className="usernameHeading loginErrorHeading">Логин:</p>
      <input
        type="text"
        ref={props.loginRef}
        className="usernameInput loginErrorInput"
      ></input>
      <p className="usernameError">Логин не соответствует требованиям</p>
    </React.Fragment>
  );
}

//возврат поля ввода password в зависимости от результатов проверки
function PasswordFormfield(props) {
  return props.passwordStatus ? (
    <React.Fragment>
      <p className="passwordHeading">Пароль:</p>
      <input
        type="password"
        ref={props.passwordRef}
        className="passwordInput"
      ></input>
      <p className="passwordError"></p>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <p className="passwordHeading loginErrorHeading">Пароль:</p>
      <input
        type="password"
        ref={props.passwordRef}
        className="passwordInput loginErrorInput"
      ></input>
      <p className="passwordError">Пароль не соответствует требованиям</p>
    </React.Fragment>
  );
}

export default LoginComponent;
