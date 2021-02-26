import "../styles/flightList.css";
import arrowImg from "../imgs/arrow.png";
import exitImg from "../imgs/exit.png";
import Tickets from "../elements/ticket";
import PhotoCarousel from "../elements/photoCarousel";
import store from "../store/store";
import { useState } from "react";

function FlightList(props) {
  const [likeState, setLikeState] = useState(0); //стейт для обновления количества сердечек
  const [dateState, setDateState] = useState(undefined); //стейт выбранной даты

  store.subscribe(() => {
    setLikeState(store.getState().liked); //подписка на количество сердечек
  });

  function changeData(value) {
    setDateState(value); //установка стейта новой даты
    store.dispatch({ type: "getNewListOfTickets" }); //передача действия в сагу для отработки "асинхронного" запроса
  }

  return (
    <div className="flightList">
      {/* Кнопка выхода */}
      <div
        className="exitButton"
        onClick={() => {
          props.callbackLogoutFunction();
        }}
      >
        <p className="exitHeading">Выйти</p>
        <img className="exitImg" src={exitImg}></img>
      </div>
      {/* Кнопка выхода */}
      {/* Заголовок/выбор даты */}
      <div className="flightListBody">
        <p className="heading">Вылеты</p>
        <img src={arrowImg} className="directionImg"></img>
        <p className="direction">SVO - JFK</p>
        <input
          type="date"
          className="departureCalendar"
          onChange={(evt) => {
            changeData(evt.target.value);
          }}
        ></input>
        {/* Заголовок/выбор даты */}
        {/* Карусель */}
        <PhotoCarousel></PhotoCarousel>
        {/* Карусель */}
        {/* Строка избранного */}
        <p className="favorites">
          Добавлено в избранное:
          <span className="favoritesCount"> {likeState} </span>
          рейсов
        </p>
        {/* Строка избранного */}
        {/* Список билетов */}
        <div className="ticketList">
          <Tickets store={store} date={dateState}></Tickets>
        </div>
        {/* Список билетов */}
      </div>
    </div>
  );
}

export default FlightList;
