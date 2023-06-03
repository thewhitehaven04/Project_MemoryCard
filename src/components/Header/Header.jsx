import style from './../../styles/header.css';
import headerImg from './../../resources/images/header_2.png';
import React from 'react';

export default function Header(props) {
  return (
    <header className="header__flex">
      <img alt="Monogatari Series Memory Card" src={headerImg}></img>
      {props.children}
    </header>
  );
}
