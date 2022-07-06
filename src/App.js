import './App.css';
import Header from './components/Header/Header';
import Cards from './components/ListOfCards/Cards';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header><br></br><br></br>
        <h1>Videogames Store</h1>
        <Routes>
          <Route path='/*' element={<Cards></Cards>}>
          </Route>
          <Route path='*' element={<div>404 Not Found</div>} ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App; 
