import planeImg from "../imgs/plane.png";
import ticketArrow from "../imgs/ticketArrow.png";
import ticketArrow2 from "../imgs/ticketArrow2.png";
import liked from "../imgs/liked.png";
import notLiked from "../imgs/notLiked.png";
import { connect } from "react-redux";
import store from "../store/store";
import "../styles/ticket.css";

//обьект для сопоставления названия месяца
const monthMap = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  10: "October",
  11: "November",
  12: "December",
};

//билеты, принимают на вход текущее состояние store и выбранную дату
function Tickets(props) {
  //если store только инициализирован
  if (!props.date) {
    return <div className="selectDate">Выберите дату</div>;
  }
  //если стор в состоянии запроса
  if (props.state.fetching) {
    return <div className="expect">Ожидайте</div>;
  }
  //если стор оказался пуст
  if (props.state.listOfTickets.length == 0) {
    return <div className="empty">Билетов не найдено</div>;
  }
  //нарезаем дату
  let date = props.date.split("-");
  //создаем массив компонентов и заполняем
  let NewReactComponents = [];
  for (let i = 0; i < props.state.listOfTickets.length; i++) {
    NewReactComponents.push(
      <div key={i} className="ticket">
        <div className="planeImgBox">
          <img className="planeImgImg" src={planeImg}></img>
        </div>
        {/* Место отбытия */}
        <p className="ticketDeparture">
          {props.state.listOfTickets[i].arrival}
        </p>
        <img className="ticketArrow" src={ticketArrow}></img>
        {/* Место прибытия */}
        <p className="ticketArrival">
          {props.state.listOfTickets[i].destination}
        </p>
        {/* Дата отбытия */}
        <div className="ticketDepartureDate">
          {date[2]} {monthMap[date[1]]}, {date[0]}
          {/* Время отбытия */}
          <img src={ticketArrow2} className="ticketDepartureArrow"></img>
          <div className="ticketDepartureTime">
            <div>{props.state.listOfTickets[i].time}</div>
          </div>
        </div>
        {/* Время отбытия */}
        <p className="airline">{props.state.listOfTickets[i].airline}</p>
        {/* Цена */}
        <p className="price">
          Price:{" "}
          <span className="priceSum">
            {Intl.NumberFormat("ru-RU").format(
              props.state.listOfTickets[i].price
            )}
          </span>
        </p>
        {/* Выбор между лайкнутым(нелайкнутым) представлением, вызов соответствующего диспатча */}
        {props.state.listOfTickets[i].liked ? (
          <img
            className="liked"
            src={liked}
            onClick={() => {
              props.state.listOfTickets[i].liked = false;
              store.dispatch({ type: "removeLikedTickets" });
            }}
          ></img>
        ) : (
          <img
            className="notLiked"
            src={notLiked}
            onClick={() => {
              props.state.listOfTickets[i].liked = true;
              store.dispatch({ type: "addLikedTickets" });
            }}
          ></img>
        )}
      </div>
    );
  }
  return NewReactComponents;
}

function mapForTickets(state) {
  return {
    state: state,
  };
}

export default connect(mapForTickets)(Tickets);
