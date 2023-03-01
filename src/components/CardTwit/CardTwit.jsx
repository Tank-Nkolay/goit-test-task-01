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
import Logo from '../../img/logo.png';
import Header from '../../img/picture-header.png';
import FotoUser from '../../img/picture-boy.png';

function CardTwit() {
  const [stateBtn, setStateBtn] = useState(false);
  const [quantityFollowers, setQuantityFollowers] = useState(100500);
  //   const [newQuantityFollowers, setNewQuantityFollowers] = useState(100500);

  // ===========

  console.log(quantityFollowers);
  console.log(stateBtn);

  useEffect(() => {
    const status = Boolean(localStorage.getItem('subscription'));
    setStateBtn(status);
    console.log(`use count ${status}`);
  }, []);

  useEffect(() => {
    if (quantityFollowers !== 0) {
      const count = Number(localStorage.getItem('quantityFollowers'));
      setQuantityFollowers(count);
      console.log(`use count ${count}`);
    }
  }, [quantityFollowers]);

  function changeStatus() {
    if (stateBtn === false) {
      setStateBtn(true);
      localStorage.setItem('subscription', true);
      const changeFollowers = quantityFollowers + 1;
      localStorage.setItem('quantityFollowers', changeFollowers);
      setQuantityFollowers(changeFollowers);
    }
    if (stateBtn === true) {
      setStateBtn(false);
      localStorage.setItem('subscription', false);
      const changeFollowers = quantityFollowers - 1;
      localStorage.setItem('quantityFollowers', changeFollowers);
      setQuantityFollowers(changeFollowers);
    }
  }

  //   function numberWithCommas(quantityFollowers) {
  //     const x = quantityFollowers.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  //     console.log(x);
  //     return x;
  //   }

  //   numberWithCommas(quantityFollowers);

  //   console.log(newQuantityFollowers);

  return (
    <Container>
      <ImgLogo src={Logo} alt="Logo" />
      <img src={Header} alt="Header" />
      <ImgCentral src={FotoUser} alt="Foto user" />
      <BoxLine></BoxLine>
      <HeaderTweet>777 TWETS</HeaderTweet>
      <HeaderFollowers>{quantityFollowers} FOLLOWERS</HeaderFollowers>
      {!stateBtn && <BtnFollow onClick={changeStatus}>FOLLOW</BtnFollow>}
      {stateBtn && (
        <BtnFollowing onClick={changeStatus}>FOLLOWING</BtnFollowing>
      )}
    </Container>
  );
}

export default CardTwit;
