import './App.css';
import Header from './components/Header/Header';
import Cards from './components/ListOfCards/Cards';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import ShoppingCart from './components/ShoppingCart/ShoppingCart';


function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header><br></br><br></br>
        <Routes>
          <Route path='/*' element={<div>
              <br></br>
              <h1>Videogames Store</h1>
              <br></br>
              <Cards></Cards>
            </div>}>
          </Route>
          <Route path='/carrito/*' element={<ShoppingCart></ShoppingCart>} ></Route>
          <Route path='*' element={<div>404 Not Found</div>} ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App; 
