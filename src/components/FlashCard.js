import styled from "styled-components";

let yellow 

export default function FlashCard({ text, text2, cards, setCards, card , setColors , colors }) {
    function openQuestion() {
        const newCards = [...cards];

        if (card.level > 2) return

        newCards.forEach(element => {
            if (element.id === card.id) {
                card.level += 1; 
            }
        })
        setCards(newCards)
    }

    return (
        <FlashCardContainer color={colors} card={card}>
            <button>
                <p data-test="flashcard-text">{card.level === 0 && text}</p>
                <p data-test="flashcard-text">{card.level === 1 && text2}</p>
                <p data-test="flashcard-text">{card.level === 2 && card.answer}</p>
                <p data-test="flashcard-text">{card.level === 3 && text}</p>
                <ion-icon data-test="play-btn" onClick={() => openQuestion()} name={card.level === 0 ? "play-outline" : "sync-outline"}></ion-icon>
                {card.level === 2 && (
                <ButtonsAnswerContainer>
                <button>Responder</button>
                <button>Responder</button> 
                <button>Responder</button>  
                </ButtonsAnswerContainer>)}
                
            </button>
        </FlashCardContainer>
    );
}

const FlashCardContainer = styled.div`
   button {
        width: 300px;
        height: ${props => props.card.level > 0 && `131px`}; 
        background-color: ${props => props.card.level === 1 || props.card.level === 2 && props.color.yellow2};
        margin: 12px;
        padding: 15px;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: ${props => props.card.level === 2 && `column`};
        p {
            font-family: 'Recursive' , sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
            color: #333333;
        }
        ion-icon {
            font-size: 30px;
            visibility: ${props => props.card.level === 2 && `hidden`};
        }            
        ion-icon:hover {
            cursor: pointer;
        }
    }
`
const ButtonsAnswerContainer = styled.div`
display: flex;

button {
    width: 85px;
    height: 40px;
    margin: 0 4px;
}
`