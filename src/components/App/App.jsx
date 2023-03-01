// import { useState } from 'react';

// глобальные стили
import GlobalStyles from '../GlobalStyles';
// импорт функции разметки
import Section from '../Section/Section';
import CardTwit from '../CardTwit/CardTwit';
import { Markup, MainTitle } from './App.styled';

export default function App() {
  return (
    <Section>
      <GlobalStyles />
      <Markup>
        <MainTitle>Phonebook</MainTitle>
        <CardTwit />
      </Markup>
    </Section>
  );
}
