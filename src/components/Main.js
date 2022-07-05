import pencil from "../images/profile/pencil.svg";
import plus from "../images/profile/plus.svg";

import Card from "./Card"

export default function Main(props) {

    return (
    <main className="main container">
      <section className="profile">
        <div className="profile__person person">
          <div className="person__avatar-vrapper">
            <img className="person__img" src={props.userInfo.avatar} alt="" />
            <button
              type="button"
              className="person__avatar-btn popup-link"
              id="avatar"
              title="Изменить аватар"
              onClick={props.onEditAvatar}
            ></button>
          </div>
          <div className="person__text">
            <div className="person__group">
              <h1 className="person__name"> {props.userInfo.name} </h1>
              <button
                type="button"
                className="person__button popup-link"
                id="edit"
                title="Редактировать профиль"
                onClick={props.onEditProfile}
              >
                <img src={pencil} alt="карандаш" className="person__button-img" />
              </button>
            </div>
            <p className="person__subtext"> {props.userInfo.about } </p>
          </div>
        </div>
        <button
          type="button"
          className="profile__button popup-link"
          id="add"
          title="Добавить фото"
          onClick={props.onAddPlace}
        >
          <img src={plus} alt="плюс" className="profile__button-img" />
        </button>
      </section>
      <section className="cards">
        <ul className="cards__list">
            {props.cards.map((card) => (
                <Card card={card} key={card._id} onCardClick={props.onCardClick}/>
            ))}
        </ul>
      </section>
    </main>
  );
}
