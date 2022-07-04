import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm title="Редактировать профиль" name="edit" btnText="Сохранить" isOpen={isOpen} onClose={onClose}>
      <label for="name" class="popup__label">
        <input
          type="text"
          name="name"
          class="popup__input popup__input_type_name"
          required
          minlength="2"
          maxlength="40"
          placeholder="имя"
        />
        <span class="popup__input-error"> </span>
      </label>
      <label for="subtext" class="popup__label">
        <input
          type="text"
          name="about"
          class="popup__input popup__input_type_subtext"
          required
          minlength="2"
          maxlength="200"
          placeholder="подпись"
        />
        <span class="popup__input-error"> </span>
      </label>
    </PopupWithForm>
  );
}
