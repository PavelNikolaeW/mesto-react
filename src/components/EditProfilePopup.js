import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm title="Редактировать профиль" name="edit" btnText="Сохранить" isOpen={isOpen} onClose={onClose}>
      <label htmlFor="name" className="popup__label">
        <input
          type="text"
          name="name"
          className="popup__input popup__input_type_name"
          required
          minLength="2"
          maxLength="40"
          placeholder="имя"
        />
        <span className="popup__input-error"> </span>
      </label>
      <label htmlFor="subtext" className="popup__label">
        <input
          type="text"
          name="about"
          className="popup__input popup__input_type_subtext"
          required
          minLength="2"
          maxLength="200"
          placeholder="подпись"
        />
        <span className="popup__input-error"> </span>
      </label>
    </PopupWithForm>
  );
}
