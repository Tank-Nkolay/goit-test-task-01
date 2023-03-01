import React from 'react';
// import css from './ContactsForm.module.css';
import { Container } from './CardTwit.styled';
import Header from '../../img/picture-header.png';

function CardTwit() {
  return (
    <Container>
      <img src={Header} alt="Header" />
    </Container>
  );
}

export default CardTwit;
