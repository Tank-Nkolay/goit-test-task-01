import React from 'react';
// import css from './ContactsForm.module.css';
import {
  Container,
  BoxLine,
  ImgCentral,
  HeaderTweet,
  HeaderFollowers,
  BtnFollow,
} from './CardTwit.styled';
import Header from '../../img/picture-header.png';
import FotoUser from '../../img/picture-boy.png';

function CardTwit() {
  return (
    <Container>
      <img src={Header} alt="Header" />
      <ImgCentral src={FotoUser} alt="Header" />
      <BoxLine></BoxLine>
      <HeaderTweet>777 TWETS</HeaderTweet>
      <HeaderFollowers>100,500 FOLLOWERS</HeaderFollowers>
      <BtnFollow>FOLLOW</BtnFollow>
    </Container>
  );
}

export default CardTwit;
