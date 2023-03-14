import React from 'react';
import '../style/style.css';

interface PokemonProps {
    id: string
    name: string
    types: string
    imageRef: string
}

function Pokemon(props : PokemonProps) {
    return (
        <div className="pokemon-div">
            <img src={ props.imageRef } className="pokemon-div--img"/>
            <h3 className="pokemon-div--name">{ props.name }</h3>
            <h3 className="pokemon-div--description">Type(s): { props.types }</h3>
            <button>release</button>
        </div>
    );
}

export default Pokemon;
