import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';  // Імпортуємо необхідні компоненти з react-router-dom

import Header from './Components/Header';
import Home from './Pages/Home';
import NewShoes from './Pages/New-shoes';
import WomensShoes from './Pages/Women-shoes';
import MensShoes from './Pages/Mens-shoes';
import ActionShoes from './Pages/Action-shoes';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-shoes" element={<NewShoes />} />
        <Route path="/women-shoes" element={<WomensShoes />} />
        <Route path="/mens-shoes" element={<MensShoes />} />
        <Route path="/action-shoes" element={<ActionShoes />} />
      </Routes>
    </Router>
  );
}

export default App;
