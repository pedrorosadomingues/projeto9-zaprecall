import FlashCardContainer from './FlashCardContainer';
import Footer from './Footer';
import styled from 'styled-components';

export default function ZapRecall({ children , cards , setCards }) {
    return (
        <ScreenContainer>
            {children}
            <FlashCardContainer 
            cards={cards}
            setCards={setCards}
            />
            <Footer>
                <span>/4 Concluidos</span>
            </Footer>
        </ScreenContainer>
    );
}

const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
       
    position: relative;
`