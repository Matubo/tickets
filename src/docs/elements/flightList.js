import "../styles/flightList.css";
import arrowImg from "../imgs/arrow.png";
import TicketList from "./ticketList";
import PhotoCarousel from "../elements/photoCarousel";
import ExitButton from "../elements/exitButton";
import Favorites from "../elements/favorites";
import store from "../store/store";
import { useState } from "react";

function FlightList(props) {
  const [likeState, setLikeState] = useState(0); //стейт для обновления количества сердечек
  const [currentDateState, setCurrentDateState] = useState(undefined); //стейт выбранной даты

  store.subscribe(() => {
    setLikeState(store.getState().liked); //подписка на количество сердечек
  });

  function changeData(value) {
    setCurrentDateState(value); //установка стейта новой даты
    store.dispatch({ type: "getNewListOfTickets" }); //передача действия в сагу для отработки "асинхронного" запроса
  }

  return (
    <div className="flightList">
      <ExitButton
        callbackLogoutFunction={props.callbackLogoutFunction}
      ></ExitButton>
      {/* Заголовок/выбор даты */}
      <div className="flightListBody">
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
        {/* Заголовок/выбор даты */}
        <PhotoCarousel></PhotoCarousel>
        <Favorites likes={likeState}></Favorites>
        <div className="ticketList">
          <TicketList store={store} date={currentDateState}></TicketList>
        </div>
      </div>
    </div>
  );
}

export default FlightList;
