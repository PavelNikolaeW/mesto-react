import PopupWithForm from "./PopupWithForm"

export default function AddPlacePopup({ isOpen, onClose }) {
    return (
        <PopupWithForm isOpen={isOpen} name='add' title='Новое место' btnText='Создать' onClose={onClose}>
            <label htmlFor="title" className="popup__label">
                <input
                  type="text"
                  placeholder="Название"
                  name="name"
                  className="popup__input popup__input_type_title"
                  required
                  minLength="2"
                  maxLength="30"
                />
                <span className="popup__input-error"> </span>
              </label>
              <label htmlFor="link" className="popup__label">
                <input
                  type="url"
                  name="link"
                  placeholder="Ссылка на картинку"
                  className="popup__input popup__input_type_link"
                  required
                />
                <span className="popup__input-error"> </span>
              </label>
        </PopupWithForm>
    )
}