export default function Card({ card, onCardClick }) {
    function handleCardClick() {
        onCardClick(card)
    }
  return (
    <li class="card" id={card._id}>
      <button type="button" class="card__urn"></button>
      <img src={card.link} alt={card.name} class="card__img" onClick={handleCardClick}></img>
      <div class="card__footer">
        <h2 class="card__title">{card.name}</h2>
        <div class="card__like">
          <button type="button" class="card__button"></button>
          <span class="card__counter"> 0 </span>
        </div>
      </div>
    </li>
  );
}
