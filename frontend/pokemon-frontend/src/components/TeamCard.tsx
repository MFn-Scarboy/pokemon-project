import React, {useEffect, useState} from 'react';
import '../style/style.css';
import Trainer from "./Trainer";

interface TrainerType {
    id: string;
    name: string;
    pokemon: []
}

function TeamCard() {
    const [trainers, setTrainers] = useState<TrainerType[]>([])

    useEffect(() => {
        let trainers: TrainerType[] = [];
        fetch("http://localhost:8080/")
            .then((response) => response.json())
            .then((data) => {
                data.forEach((element: any) => {
                    trainers.push({
                        id: element.id,
                        name: element.name,
                        pokemon: element.pokemon
                    })
                })
                setTrainers(trainers)
            })
    }, [])

    return (
        <div className="teamCard-div">
            {trainers.map((element, index) => (
                <Trainer key={index} name={element.name} id={element.id} pokemon={element.pokemon}/>
            ))}
            <ul className="teamCard-div-ul">

            </ul>
        </div>
    );
}

export default TeamCard;
