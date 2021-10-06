import React from 'react';
import './Card.css';


class Card extends React.Component{


    render() {
        

        return (
            <figure>
                <img src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="card" />
                <figcaption>
                    <h3>Shoes</h3>
                    <h2>Price : $100</h2>
                    <button>Buy Now</button>
                </figcaption>
            </figure>
        )

    }
}


export default Card;