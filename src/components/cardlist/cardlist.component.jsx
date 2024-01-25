// cardlist.component.jsx

// Import the Card component
// Create a functional component.
// Add a return statement that will return the Monster CardList HTML.
// After the function, write a statement to export it.
import React from "react";
import Card from '../card/card.component'
import "./cardlist.styles.css";

const CardList = ({ monsters }) => (
    <div className="cardlist">
        {monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
        ))}
    </div>
);

export default CardList;