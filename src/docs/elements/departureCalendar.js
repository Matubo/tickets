import { ReactFragment, useState } from "react";
import arrowImg from "../imgs/arrow.png";
import store from "../store/store";

function DepartureCalendar(props) {
  const [currentDateState, setCurrentDateState] = useState(undefined); //стейт выбранной даты
  function changeData(value) {
    setCurrentDateState(value); //установка стейта новой даты
    store.dispatch({ type: "getNewListOfTickets", date: currentDateState }); //передача действия в сагу для отработки "асинхронного" запроса
  }
  return (
    <ReactFragment>
      <p className="heading">Вылеты</p>
      <img src={arrowImg} className="directionImg"></img>
      <p className="direction">SVO - JFK</p>
      <input
        className="departureCalendar"
        type="date"
        onChange={(evt) => {
          changeData(evt.target.value);
        }}
      ></input>
    </ReactFragment>
  );
}
