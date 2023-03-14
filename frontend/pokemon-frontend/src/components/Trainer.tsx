import React, {useEffect, useState} from 'react';
import '../style/style.css';
import AddPokemonForm from "./AddPokemonForm";
import Pokemon from "./Pokemon";

interface TrainerProps {
    id: string
    name: string
    pokemon: []
}

interface PokemonType {
    id: string
    name: string
    types: string
    imageRef: string
}

const Trainer = (props : TrainerProps) => {
    const [pokemon, setPokemon] = useState<PokemonType[]>([])

    useEffect(() => {
        let pokemon: PokemonType[] = [];
        fetch("http://localhost:8080/" + props.id)
            .then((response) => response.json())
            .then((data) => {
                data.pokemon.forEach((element: any) => {
                    pokemon.push({
                        id: element.id,
                        name: element.name,
                        types: element.types,
                        imageRef: element.imageRef
                    })
                })
                setPokemon(pokemon)
            })
    }, [])

    return (
        <div className="trainer-div">
            <img src="https://p.kindpng.com/picc/s/220-2204010_pokemon-trainer-red-sprite-hd-png-download.png" className="trainer-div--img"/>
            <h3 className="trainer-div--name">{ props.name }</h3>
                {pokemon.map((element, index) => (
                    <Pokemon key={index} name={element.name} id={element.id} types={element.types} imageRef={element.imageRef}/>
                ))}
            <AddPokemonForm id={props.id}/>
        </div>
    );
}

export default Trainer;
