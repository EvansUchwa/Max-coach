import './Assets/styles/default/index.css';
import './Assets/styles/default/form.css';
import './Assets/styles/materialdesignicons.min.css'
import './Assets/styles/app.css';
import './Assets/js/animations';


import { Navbar } from './GlobalComponents/Navigation/Navbar';
// import './Assets/styles/card.css';
import Accueil from "./Routes/Accueil";
import { Footer } from './GlobalComponents/Navigation/Footer';
import Contact from './Routes/Contact';
import Tarifs from './Routes/Tarifs';
import Apropos from './Routes/Apropos';
import Boutique from './Routes/Boutique';

const { BrowserRouter, Route, Routes } = require("react-router-dom");


function App() {

  return <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/A-propos" element={<Apropos />} />
      <Route path="/Tarifs" element={<Tarifs />} />
      <Route path="/Boutique" element={<Boutique />} />
      <Route path="/Contact" element={<Contact />} />

    </Routes>
    <Footer />
  </BrowserRouter>
}

export default App;
