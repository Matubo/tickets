import planeImg from "../imgs/plane.png";
import ticketArrow from "../imgs/ticketArrow.png";
import ticketArrow2 from "../imgs/ticketArrow2.png";
import liked from "../imgs/liked.png";
import notLiked from "../imgs/notLiked.png";
import store from "../store/store";

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

function Ticket(props) {
  return (
    <div className="ticket">
      <div className="planeImgBox">
        <img className="planeImgImg" src={planeImg}></img>
      </div>
      {/* Место отбытия */}
      <p className="ticketDeparture">{props.ticketData.arrival}</p>
      <img className="ticketArrow" src={ticketArrow}></img>
      {/* Место прибытия */}
      <p className="ticketArrival">{props.ticketData.destination}</p>
      {/* Дата отбытия */}
      <div className="ticketDepartureDate">
        {props.date[2]} {monthMap[props.date[1]]}, {props.date[0]}
        {/* Время отбытия */}
        <img src={ticketArrow2} className="ticketDepartureArrow"></img>
        <div className="ticketDepartureTime">
          <div>{props.ticketData.time}</div>
        </div>
      </div>
      {/* Время отбытия */}
      <p className="airline">{props.ticketData.airline}</p>
      {/* Цена */}
      <p className="price">
        Price:{" "}
        <span className="priceSum">
          {Intl.NumberFormat("ru-RU").format(props.ticketData.price)}
        </span>
      </p>
      {/* Выбор между лайкнутым(нелайкнутым) представлением, вызов соответствующего диспатча */}
      {props.ticketData.liked ? (
        <img
          className="liked"
          src={liked}
          onClick={() => {
            props.ticketData.liked = false;
            store.dispatch({ type: "removeLike" });
          }}
        ></img>
      ) : (
        <img
          className="notLiked"
          src={notLiked}
          onClick={() => {
            props.ticketData.liked = true;
            store.dispatch({ type: "addLike" });
          }}
        ></img>
      )}
    </div>
  );
}

export default Ticket;
