//Acá vamos importando los componentes que vayamos creando en componentes -> public
import './App.css';
import Footer from './components/public/Footer';
import Navbar from './components/public/Navbar';
import Main from './components/public/Main';
import Detail from './components/public/Detail';
import UserForm from './components/public/UserForm';
import { Routes ,Route } from 'react-router-dom';


//* Le mando éste componente a index.js
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="/details/:id" element={<Detail/>}/>
        <Route exact path="/user-form" element={<UserForm/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
