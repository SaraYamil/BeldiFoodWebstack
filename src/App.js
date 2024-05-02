import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Index from './pages/index';
import Contact from './pages/contact';
import Menu from './pages/menu';
import Update from './pages/update';
import Header from './pages/header';
import Footer from './pages/footer';
import Story from './pages/story';
import Booking from './pages/booking';





function App() {
  return (
    

        <Router>
          <Header/>
          
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/story" element={<Story />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/update" element={<Update />} />
        <Route exact path="/contact" element={<Contact />} />
       <Route exact path="/booking" element={<Booking />} />
      
       
      </Routes> 
      <Footer/>     
    </Router>

 
  );
}

export default App;
