export default function ImagePopup({card, onClose}) {
    return (
        <div class={"popup popup_card " + (card._id && "popup_opened")}>
        <div class="popup__card-container">
          <figure class="popup__figure">
            <img src={card.link} alt={card.title} class="popup__img" />
            <figcaption class="popup__caption">{card.title}</figcaption>
          </figure>
          <button type="button" class="popup__close" onClick={onClose}>
          </button>
        </div>
      </div>
    )
}