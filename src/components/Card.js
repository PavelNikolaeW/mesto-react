export default function Card({ card, onCardClick }) {
    function handleCardClick() {
        onCardClick(card)
    }
  return (
    <li className="card">
      <button type="button" className="card__urn"></button>
      <img src={card.link} alt={card.name} className="card__img" onClick={handleCardClick}></img>
      <div className="card__footer">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like">
          <button type="button" className="card__button"></button>
          <span className="card__counter"> 0 </span>
        </div>
      </div>
    </li>
  );
}
