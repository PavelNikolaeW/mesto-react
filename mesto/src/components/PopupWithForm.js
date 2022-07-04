export default function PopupWithForm({ name, title, btnText, children, isOpen, onClose }) {
  return (
    <div class={'popup ' + (isOpen && 'popup_opened')} id={`popup-${name}`}>
      <div class="popup__card-container">
        <div class="popup__body popup__body-small">
          <h2 class="popup__title"> {title} </h2>
          <form action="#" name={`${name}Form`} class="popup__form" novalidate>
            {children}
            <button type="submit" class="popup__submit">
              {btnText}
            </button>
          </form>
        </div>
        <button type="button" class="popup__close" onClick={onClose}></button>
      </div>
    </div>
  );
}
