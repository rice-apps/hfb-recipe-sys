import React from 'react';
import MainPage from './pages/MainPage';
import RecipePage from './pages/RecipePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RecipeData from './types/RecipeData';

import 'antd/dist/antd.css';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import loadLanguageSavedByGoogle from './util/loadInitialLanguage';

function App() {
  const [recipes, setRecipes] = useState<RecipeData[]>([]);
  const [language, setLanguage] = useState<string>();

  // Load the initial language that google translate will use
  useEffect(() => {
    setLanguage(loadLanguageSavedByGoogle());
  }, [])

  // Fetch the recipes in the selected language
  useEffect(() => {
    // Only load once the language has been decided
    if (!language) return;
    console.log("Loading recipes with language:", language);
    // Get the recipes from the backend
    fetch(`https://hfb-recipe-sys-api.herokuapp.com/recipes/?language=${language}`).then(
      response => response.json()
    ).then((data => setRecipes(data))
    ).catch(err => {
      console.log("APP TSX FETCH ERROR")
    });
  }, [language]);
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={`/:id`}>
            <RecipePage recipes = {recipes} setLanguage = {setLanguage}/>
          </Route>
          <Route path={`/`}>
            <MainPage recipes = {recipes} setLanguage = {setLanguage}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
