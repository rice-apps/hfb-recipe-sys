import React from 'react';
import { RecipeCard } from '../components/RecipeCard';
import { useParams } from 'react-router-dom';

export default function Recipe(props: any) {
    const { id } = useParams<{ id: string }>();

    return (
        <RecipeCard data={props.recipes[id]}></RecipeCard>
    )
}