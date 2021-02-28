import exitImg from "../imgs/exit.png";

function ExitButton(props) {
  return (
    <div
      className="exitButton"
      onClick={() => {
        props.callbackLogoutFunction();
      }}
    >
      <p className="exitHeading">Выйти</p>
      <img className="exitImg" src={exitImg}></img>
    </div>
  );
}

export default ExitButton;
