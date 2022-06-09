import Book from "./component/Book";
import './App.css'


const App = function(){
  return(
    <section className="bookstore"> 
    <h1 className="bookstore-title">Bookstore.org</h1>
    <Book />
    </section>
  )
}
export default App;