import Book from "./component/Book";
import './App.css'


const App = function () {

  const firstBook ={
    image: 'https://wallpapercave.com/wp/wp6668685.jpg',
    title: 'Rich Dad Poor Dad',
    price: '₹199',
  }

  const secondBook = {
    image: 'https://c7.alamy.com/comp/3/2e0bd0698ea94ad086f87cdbe137b5b4/gn8awy.jpg',
    title:'The Alchemist' ,
    price: '₹220',
  }

  const thirdBook = {
    image: 'https://wallpapercave.com/wp/wp6668685.jpg',
    title: 'Rich Dad Poor Dad',
    price: '₹199',
  }

  const fourthBook = {
    image: 'https://c7.alamy.com/comp/3/2e0bd0698ea94ad086f87cdbe137b5b4/gn8awy.jpg',
    title:'The Alchemist' ,
    price: '₹220',
  }

  return (
    <section>
      <h1 className="bookstore-title">Bookstore.org</h1>
      <section className="bookstore">

        <Book 
        image={firstBook.image}
        title={firstBook.title}
        price={firstBook.price}/>

        <Book 
        image={secondBook.image}
        title={secondBook.title}
        price={secondBook.price}/>

        {/* <Book 
        image={thirdBook.image}
        title={thirdBook.title}
        price={thirdBook.price}/>

        <Book 
        image={fourthBook.image}
        title={fourthBook.title}
        price={fourthBook.price}/> */}

      </section>
    </section>
  )
}
export default App;