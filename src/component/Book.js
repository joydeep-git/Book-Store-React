import React from "react";

const Book = () => {

    return (
        <article className="book">

            <div className="book-image">
                <img src={image} alt={title} />
            </div>
            <h2 className="book-title">{title.toUpperCase()}</h2>
            <h4 className="book-price">{price}</h4>
            <button className="button">Buy Now</button>

        </article>
    );
};

export default Book;