import React from "react";
import "./contact.scss";



const page = () => {
  const onSubmit = (e) =>{
    e.preventDefault()
  }
  return (
    <div className="container--sm">
      <div className="contact-page">
        <figure className="contact-page__image">
          <img src="images/contact.jpg" />
        </figure>
        <div  className="contact-page__form">
          <div className="contact-page__form__input-group">
            <label htmlFor="name">Name: </label>
            <input name="name" placeholder="Name" />
          </div>
          <div className="contact-page__form__input-group">
            <label htmlFor="surname">Surname: </label>
            <input name="surname" placeholder="Surname" />
          </div>
          <div className="contact-page__form__input-group">
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="contact-page__form__input-group">
            <label htmlFor="message">Message: </label>
            <textarea name="message" placeholder="Message" />
          </div>
          <button><span>Send</span></button>
        </div>
      </div>
    </div>
  );
};

export default page;
