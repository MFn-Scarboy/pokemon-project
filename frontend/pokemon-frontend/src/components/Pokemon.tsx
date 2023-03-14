import React from 'react';
import '../style/style.css';

interface PokemonProps {
    id: string
    name: string
    types: string
    imageRef: string
}

function Pokemon(props : PokemonProps) {

    function handleRelease() {
    //     try {
    //         await axios.delete()
    //     }
    }

    return (
        <div className="pokemon-div">
            <img src={ props.imageRef } className="pokemon-div--img"/>
            <h2 className="pokemon-div--name">{ props.name }</h2>
            <h2 className="pokemon-div--description">Type(s): { props.types }</h2>
            <button onClick={handleRelease}>release</button>
        </div>
    );
}

export default Pokemon;
