import "./AkbarCard.css";

function AkbarCard(props) {
  return (
    <div className="price-card">
      <h3>{props.title}</h3>
      <p className="desc">{props.desc}</p>

      <h2 className="price">
        ${props.price}
        <span>/month *</span>
      </h2>

      <button className="btn">BUY NOW</button>

      <ul>
        {props.features.map((item, index) => (
          <li key={index}>✔ {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default AkbarCard;
