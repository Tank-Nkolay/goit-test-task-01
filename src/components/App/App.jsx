import GlobalStyles from '../GlobalStyles';
// импорт функции разметки
import Section from '../Section/Section';
import CardTwit from '../CardTwit/CardTwit';
import { MainTitle } from './App.styled';

export default function App() {
  return (
    <Section>
      <GlobalStyles />
      <MainTitle></MainTitle>
      <CardTwit />
    </Section>
  );
}
