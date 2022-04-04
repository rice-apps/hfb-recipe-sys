import React from 'react'
import RecipeData from '../../../types/RecipeData'
import { BottomHeader } from './BottomHeader'
import { TopHeader } from './TopHeader'

function Header(props: { recipe: RecipeData; scale: number }) {
  return (
    <div className="header_bar">
      <header>
        <TopHeader recipe={props.recipe} />
        {/* Sub information to title on the next row underneath */}
        <BottomHeader recipe={props.recipe} scale={props.scale}  />
      </header>
    </div>
  )
}

export default Header
