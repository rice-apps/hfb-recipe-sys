import React from 'react';
import MainPage from './pages/MainPage';
import RecipePage from './pages/RecipePage';
import MyRecipes from './pages/MyRecipes';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RecipeData from './types/RecipeData';

import 'antd/dist/antd.css';
import 'semantic-ui-css/semantic.min.css'
import './index.css';

function App() {
  const [recipes, setRecipes] = useState<RecipeData[]>([]);

  useEffect(() => {
    fetch("https://hfb-recipe-sys-api.herokuapp.com/recipes").then(
      response => response.json()
    ).then((data => setRecipes(data))
    ).catch(err => {
      console.log("APP TSX FETCH ERROR")
    });
  }, []);


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/:id" element={<RecipePage recipes={recipes} />}>
          </Route>
          <Route path="/" element={<MainPage recipes={recipes} />}>
          </Route>
          <Route path="/MyRecipes" element={<MyRecipes recipes={recipes} />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
