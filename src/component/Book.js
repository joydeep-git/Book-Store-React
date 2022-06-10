import React from "react";

const Book = ({image, title, price }) => {

    const clickHandler = function(title){
        alert(`${title} has been added to cart`)
    }

    return (
        <article className="book">

            <div className="book-image">
                <img src={image} alt={title} />
            </div>
            <h2 className="book-title">{title.toUpperCase()}</h2>
            <h4 className="book-price">{price}</h4>
            <button className="button" 
            onClick={ () => clickHandler(title)}>Buy Now</button>

        </article>
    );
};

export default Book;