import pencil from "../images/profile/pencil.svg";
import plus from "../images/profile/plus.svg";

import React from "react";
import Card from "./Card";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Main({ cards, setCards, onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const currentUser = React.useContext(CurrentUserContext);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => setCards((state) => state.filter((elem) => elem._id !== card._id)))
      .catch((err) => console.log(err));
  }

  return (
    <main className="main container">
      <section className="profile">
        <div className="profile__person person">
          <div className="person__avatar-vrapper">
            <img className="person__img" src={currentUser.avatar} alt="" />
            <button
              type="button"
              className="person__avatar-btn popup-link"
              id="avatar"
              title="Изменить аватар"
              onClick={onEditAvatar}
            ></button>
          </div>
          <div className="person__text">
            <div className="person__group">
              <h1 className="person__name"> {currentUser.name} </h1>
              <button
                type="button"
                className="person__button popup-link"
                id="edit"
                title="Редактировать профиль"
                onClick={onEditProfile}
              >
                <img src={pencil} alt="карандаш" className="person__button-img" />
              </button>
            </div>
            <p className="person__subtext"> {currentUser.about} </p>
          </div>
        </div>
        <button
          type="button"
          className="profile__button popup-link"
          id="add"
          title="Добавить фото"
          onClick={onAddPlace}
        >
          <img src={plus} alt="плюс" className="profile__button-img" />
        </button>
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
