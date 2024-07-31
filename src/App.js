import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Top from './Top';
import Middle from './Middle';
import Footer from './Footer';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Blog from './Blog'
import Freebies from './Freebies';
import Contact from './Contact';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>

          <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/design-blog' Component={Blog}></Route>
          <Route path='/freebies' Component={Freebies}></Route>
          <Route path='/contact' Component={Contact}></Route>

         </Routes>
         <Footer></Footer>

      </BrowserRouter>
         
    </div>
  );
}

export default App;
