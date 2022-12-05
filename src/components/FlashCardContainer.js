import FlashCard from "./FlashCard";

export default function FlashCardContainer({ cards , setCards , colors , setColors }) {
   console.log(cards[0])
    return (
        <div>
            {cards.map((c, index) => <FlashCard
            data-test="flashcard" 
            key={index} 
            text={c.text} 
            text2={c.question}
            text3={c.answer}
            card={c}
            cards={cards}
            setCards={setCards}
            yellow2={colors.yellow2}
            setColors={setColors}
            />)
            }
        </div>
    );
}