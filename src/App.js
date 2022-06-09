import Book from "./component/Book";
import './App.css'


const App = function () {
  return (
    <section>
      <h1 className="bookstore-title">Bookstore.org</h1>
      <section className="bookstore">

        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />

      </section>
    </section>
  )
}
export default App;