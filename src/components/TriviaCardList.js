import React from 'react';
import TriviaCard from './TriviaCard'

export default function TriviaCardList({ triviaCards }) {
    return (
        <div className="card-grid">
            {triviaCards.map(triviaCard => {
                return <TriviaCard triviaCard={triviaCard} key={triviaCard.id} />
            })}
        </div>
    );
}

