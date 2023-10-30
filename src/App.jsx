import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Afrique from "./components/Afrique";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function App() {
  const [meals, setMeals] = useState([]);

  const getMeals = async () => {
    const reponse = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52919"
    );
    console.log(reponse);
    setMeals(reponse.data.meals);
    console.log(meals);
  };
  return (
    <button onClick={getMeals}>clock</button>

    /*<div>
    test afrique
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Afrique" element={<Afrique />} />

          <NavBar />
          <title>LE MONDE DANS VOTRE ASSIETTE</title>
          <Banner />
        </Routes>
      </BrowserRouter>
    </div>*/
  );
}

export default App;
