import pencil from "../images/profile/pencil.svg";
import plus from "../images/profile/plus.svg";

import Card from "./Card"

export default function Main(props) {

    return (
    <main className="main container">
      <section class="profile">
        <div class="profile__person person">
          <div class="person__avatar-vrapper">
            <img class="person__img" src={props.userInfo.avatar} alt="" />
            <button
              type="button"
              class="person__avatar-btn popup-link"
              id="avatar"
              title="Изменить аватар"
              onClick={props.onEditAvatar}
            ></button>
          </div>
          <div className="person__text">
            <div class="person__group">
              <h1 class="person__name"> {props.userInfo.name} </h1>
              <button
                type="button"
                class="person__button popup-link"
                id="edit"
                title="Редактировать профиль"
                onClick={props.onEditProfile}
              >
                <img src={pencil} alt="карандаш" class="person__button-img" />
              </button>
            </div>
            <p class="person__subtext"> {props.userInfo.about } </p>
          </div>
        </div>
        <button
          type="button"
          class="profile__button popup-link"
          id="add"
          title="Добавить фото"
          onClick={props.onAddPlace}
        >
          <img src={plus} alt="плюс" class="profile__button-img" />
        </button>
      </section>
      <section class="cards">
        <ul class="cards__list">
            {props.cards.map((card) => (
                <Card card={card} onCardClick={props.onCardClick}/>
            ))}
        </ul>
      </section>
    </main>
  );
}
