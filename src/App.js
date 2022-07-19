import './App.css';
import Header from './components/Header/Header';
import Cards from './components/ListOfCards/Cards';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header><br></br><br></br>
        <Routes>
          <Route path='/*' index element={<div>
              <br></br>
              <h1>Videojuegos</h1>
            <Cards></Cards>
          </div>}>
          </Route>
          <Route path='/carrito/*' element={<ShoppingCart></ShoppingCart>} ></Route>
          <Route path='*' element={<h1>Not page found</h1>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App; 
