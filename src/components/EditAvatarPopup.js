import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm name="avatar" title="Обновить аватар" btnText="Сохранить" isOpen={isOpen} onClose={onClose}>
      <label for="avatar" class="popup__label">
        <input
          type="url"
          name="avatar"
          class="popup__input popup__input_type_link"
          required
          placeholder="Ссылка на картинку"
        />
        <span class="popup__input-error"> </span>
      </label>
    </PopupWithForm>
  );
}
