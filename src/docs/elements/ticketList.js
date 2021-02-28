import { connect } from "react-redux";
import "../styles/ticket.css";
import Ticket from "./ticket";

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
  let splitedDate = props.date.split("-");
  //создаем массив компонентов и заполняем
  let newTicketComponents = [];
  for (let i = 0; i < props.state.listOfTickets.length; i++) {
    newTicketComponents.push(
      <Ticket
        ticketData={props.state.listOfTickets[i]}
        date={splitedDate}
      ></Ticket>
    );
  }
  return newTicketComponents;
}

function mapForTickets(state) {
  return {
    state: state,
  };
}

export default connect(mapForTickets)(Tickets);
