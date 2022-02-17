import React from 'react';
import RecipeData from '../../types/RecipeData';
import '../../style/Recipe.css';
import ReactPlayer from 'react-player';

export const Videos = (props: { recipe: RecipeData } ) => {
    // const videoExists = 
    return(
        <div className="videosContainer">
                <h2></h2>
                {/* <ReactPlayer
                    url = {props.recipe.videoLink}
                /> */}
        </div>

    //    <div>
            
    //         {/* {
    //             {{props.recipe.videoLink} != ""
    //                 <div className="videosContainer">
    //                     <h2></h2>
    //                     <ReactPlayer
    //                         url = {props.recipe.videoLink}
    //                     />
    //                 </div>
    //             }
    //         } */}
            
    //     </div>
        )
    }


