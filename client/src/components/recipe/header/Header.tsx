import React from 'react'
import RecipeData from '../../../types/RecipeData'
import { BottomHeader } from './NavigationHeader'
import { TopHeader } from './RecipeInfoHeader'

function Header(props: { recipe: RecipeData }) {
  return (
    <div className="header_bar" margin-bottom="30px">
      <header>
        <TopHeader recipe={props.recipe} />
        {/* Sub information to title on the next row underneath */}
        <BottomHeader recipe={props.recipe} />
      </header>
    </div>
  )
}

export default Header
