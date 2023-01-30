//Acá vamos importando los componentes que vayamos creando en componentes -> public
import logo from './logo.svg';
import './App.css';
import Footer from './components/public/Footer';
import Navbar from './components/public/Navbar';
import Main from './components/public/Main';

//* Le mando éste componente a index.js
function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
