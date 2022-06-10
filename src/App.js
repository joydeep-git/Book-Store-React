import Book from "./component/Book";
import './App.css'


const App = function () {

  const firstBook ={
    image: 'images-us.bookshop.org/ingram/9781612680194.jpg?height=250&v=v2';
    title: 'Rich Dad Poor Dad';
    price: '₹199';
  }

  const secondBook = {
    image: 'https://images-us.bookshop.org/ingram/9780062315007.jpg?height=500&v=v2';
    title:'The Alchemist';
    price: '₹220';
  }

  return (
    <section>
      <h1 className="bookstore-title">Bookstore.org</h1>
      <section className="bookstore">

    <div className="book">
        <Book 
        image={firstBook.image}
        title={firstBook.title}
        price={firstBook.price}/>
        <Book 
        image={secondBook.image}
        title={secondBook.title}
        price={secondBook.price}/>
        </div>

      </section>
    </section>
  )
}
export default App;