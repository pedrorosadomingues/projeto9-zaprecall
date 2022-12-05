import FlashCard from "./FlashCard";

export default function FlashCardContainer({ cards , setCards }) {
   console.log(cards[0])
    return (
        <div>
            {cards.map((c, index) => <FlashCard 
            key={index} 
            text={c.text} 
            text2={c.question}
            text3={c.answer}
            card={c}
            cards={cards}
            setCards={setCards}
            ></FlashCard>)
            }
        </div>
    );
}