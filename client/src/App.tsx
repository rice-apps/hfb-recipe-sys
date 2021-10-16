import React from 'react';
import Main from './pages/Main';
import Recipe from './pages/Recipe';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';

function App() {
  const recipes = [
    {
        "title": "eggs",
        "ingredients": ["Apples"," Pears "],
        "steps": ["Cook", "Clean"],
        "id" : 0
    },
    {
        "title": "not eggs",
        "ingredients": ["Oranges","Peaches"],
        "steps": ["Bake", "Clean"],
        "id": 1
    }
]
  return (   
    <Router>
      <div className="App">
        <Switch>
          <Route path={`/recipes/:id`}>
            <Recipe recipes = {recipes}/>
          </Route>
          <Route path={`/recipes`}>
            <Main recipes = {recipes}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
