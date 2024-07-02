import "./Card.css";

function Card(props) {
  const classNames = "card " + props.className;
  return (
    // <div className={`card ${props.className}`}>{props.children}</div>
    <div className={classNames}>{props.children}</div>
  );
}
export default Card;
