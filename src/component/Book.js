import React from "react";

const Book = () => {
    const image =
        "https://images-us.bookshop.org/ingram/9781612680194.jpg?height=250&v=v2";
    const title = "Rich Dad Poor Dad";
    const price = "₹199";

    return (
        <article className="book">

            <div className="book-image">
                <img src={image} alt={title} />
            </div>
            <h2 className="book-title">{title.toUpperCase()}</h2>
            <h4 className="book-price">{price}</h4>
            <button className="button">add to cart</button>

        </article>
    );
    
};

export default Book;
