import React from 'react';
import { useState, useEffect } from 'react';
// import css from './ContactsForm.module.css';
import {
  Container,
  BoxLine,
  ImgLogo,
  ImgCentral,
  HeaderTweet,
  HeaderFollowers,
  BtnFollow,
  BtnFollowing,
} from './CardTwit.styled';
import Logo from '../../img/logo-vector.svg';
import Header from '../../img/picture-header.png';
import FotoUser from '../../img/picture-boy-vector.svg';

function CardTwit() {
  const [stateBtn, setStateBtn] = useState(0);
  const [quantityFollowers, setQuantityFollowers] = useState(100500);
  const [newQuantityFollowers, setNewQuantityFollowers] = useState();

  useEffect(() => {
    if (localStorage.getItem('subscription')) {
      const status = Number(localStorage.getItem('subscription'));
      setStateBtn(status);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('quantityFollowers')) {
      const count = Number(localStorage.getItem('quantityFollowers'));
      setQuantityFollowers(count);
    }
  }, [quantityFollowers]);

  function changeStatus() {
    if (stateBtn === 0) {
      setStateBtn(1);
      localStorage.setItem('subscription', 1);
      const changeFollowers = quantityFollowers + 1;
      localStorage.setItem('quantityFollowers', changeFollowers);
      setQuantityFollowers(changeFollowers);
    }
    if (stateBtn === 1) {
      setStateBtn(0);
      localStorage.setItem('subscription', 0);
      const changeFollowers = quantityFollowers - 1;
      localStorage.setItem('quantityFollowers', changeFollowers);
      setQuantityFollowers(changeFollowers);
    }
  }

  useEffect(() => {
    const numberWithCommas = new Intl.NumberFormat('en').format(
      quantityFollowers
    );
    setNewQuantityFollowers(numberWithCommas);
  }, [quantityFollowers]);

  return (
    <Container>
      <ImgLogo src={Logo} alt="Logo" />
      <img src={Header} alt="Header" />
      <ImgCentral src={FotoUser} alt="Foto user" />
      <BoxLine></BoxLine>
      <HeaderTweet>777 TWEETS</HeaderTweet>
      <HeaderFollowers>{newQuantityFollowers} FOLLOWERS</HeaderFollowers>
      {stateBtn === 0 && <BtnFollow onClick={changeStatus}>FOLLOW</BtnFollow>}
      {stateBtn === 1 && (
        <BtnFollowing onClick={changeStatus}>FOLLOWING</BtnFollowing>
      )}
    </Container>
  );
}

export default CardTwit;
