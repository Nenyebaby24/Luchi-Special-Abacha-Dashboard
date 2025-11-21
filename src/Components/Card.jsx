import "../Styles/card.css";


function Card({ title, value }) {
  return (
    <div className="card">
      <p className="card-title">{title}</p>
      <h3 className="card-value">{value}</h3>
    </div>
  );
}

export default Card;
