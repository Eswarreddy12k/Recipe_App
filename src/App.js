import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recipes from './Recipes';


function App() {
  return (
    <>
      <div>
      <div className="header">
        <h1>Recipe App</h1>
    </div>
      <div>        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipes />} />
        </Routes>
      </div>
      
    </div>
      
    </>
  );
}

export default App;
