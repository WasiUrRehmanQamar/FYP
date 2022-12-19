import './App.css';
import Board from './Components/Board';
import Collab from './Components/Collab';
import Footer from './Footer/Footer';
import Top from './NavBar/Top';
import { Slideshow } from './Slider/Slider';

function App() {
  return (
    <div className="App">
      <Top />
      <Slideshow />
      <Board />
      <Collab />
      <Footer />
    </div>
  );
}

export default App;
