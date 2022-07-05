import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm name="avatar" title="Обновить аватар" btnText="Сохранить" isOpen={isOpen} onClose={onClose}>
      <label htmlFor="avatar" className="popup__label">
        <input
          type="url"
          name="avatar"
          className="popup__input popup__input_type_link"
          required
          placeholder="Ссылка на картинку"
        />
        <span className="popup__input-error"> </span>
      </label>
    </PopupWithForm>
  );
}
