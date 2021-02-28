function Favorites(props) {
  return (
    <p className="favorites">
      Добавлено в избранное:
      <span className="favoritesCount"> {props.likes} </span>
      рейсов
    </p>
  );
}
export default Favorites;
