import ZapRecall from './components/ZapRecall';
import logo from './assets/logo.svg';
import styled from 'styled-components';
import { useState } from 'react';
import CARDS from './utilities/cards';

export default function App() {
  const [cards, setCards] = useState(CARDS);
  
  return (
    <div>
      <ZapRecall
        cards={cards}
        setCards={setCards}
      >
        <LogoContainer>
          <img src={logo} alt="logo" />
          <h1>ZapRecall</h1>
        </LogoContainer>
      </ZapRecall>

    </div>
  );
}

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
    h1 {
      font-family: 'Righteous' , sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      line-height: 45px;
      color: #FFFFFF;
      margin-left: 20px;
      }
    img {
      width: 52px;
    }
    `