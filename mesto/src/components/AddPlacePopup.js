import PopupWithForm from "./PopupWithForm"

export default function AddPlacePopup({ isOpen, onClose }) {
    return (
        <PopupWithForm isOpen={isOpen} name='add' title='Новое место' btnText='Создать' onClose={onClose}>
            <label for="title" class="popup__label">
                <input
                  type="text"
                  placeholder="Название"
                  name="name"
                  class="popup__input popup__input_type_title"
                  required
                  minlength="2"
                  maxlength="30"
                />
                <span class="popup__input-error"> </span>
              </label>
              <label for="link" class="popup__label">
                <input
                  type="url"
                  name="link"
                  placeholder="Ссылка на картинку"
                  class="popup__input popup__input_type_link"
                  required
                />
                <span class="popup__input-error"> </span>
              </label>
        </PopupWithForm>
    )
}