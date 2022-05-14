import React, { useEffect } from "react";

import "./contacts.styles.scss";

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="contacts">
      <h1>Контакти</h1>
      <ul>
        <li>
          <p>
            Телефон: <a href="tel:+380956011620">+380956011620</a>
          </p>
        </li>
        <li>Адреса: вул. Головна 894</li>
        <li>
          Email: <a href="mailto:bctigers@gmail.com">bctigers@gmail.com</a>
        </li>
        <li>
          Telegram Канал: <a href="t.me/bctigers">t.me/bctigers</a>
        </li>
        <li>
          Instagram Сторінка:{" "}
          <a href="https://www.instagram.com/bctigers/">
            https://www.instagram.com/bctigers/
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
