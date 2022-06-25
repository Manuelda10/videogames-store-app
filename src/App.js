import './App.css';
import Header from './components/Header/Header';
import Cards from './components/ListOfCards/Cards';

function App() {
  return (
    <div className="App">
      <Header></Header><br></br><br></br>
      <h1>Videogames Store</h1>
      <Cards></Cards>
    </div>
  );
}

export default App; 
