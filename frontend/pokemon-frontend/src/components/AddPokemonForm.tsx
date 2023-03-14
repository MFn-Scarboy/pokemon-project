import React, {useRef, useState} from 'react';
import '../style/style.css';
import axios from 'axios'

interface FormValues {
    query: string;
}

interface AddPokemonValues {
    name: string;
    types: string;
    imageRef: string;
}

interface TrainerProps {
    id: string

}

function AddPokemonForm(props : TrainerProps) {

    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    const ref = React.useRef<HTMLInputElement>(null)

    React.useEffect(() => {
        if (ref.current) {
            ref.current.focus()
        }
    }, [])

    const [formValues, setFormValues] = useState<FormValues>({
        query: ''
    });

    const handleAddPokemonFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const value = ref.current?.value;
            if(value == undefined) {
                throw new Error("Enter a pokemon name")
            }
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + value.toLowerCase())

            const pokemonName = response.data.name
            const pokemonImg = response.data.sprites.front_default
            const pokemonTypes = response.data.types

            let pokemonTypeReturn = ''
            for(let i = 0; i < pokemonTypes.length; i++) {
                pokemonTypeReturn = pokemonTypeReturn + pokemonTypes[i].type.name + ' ';
            }

            try {
                await axios.post<AddPokemonValues>('http://localhost:8080/' + props.id + '/pokemon', {
                    id: props.id,
                    name: pokemonName,
                    types: pokemonTypeReturn,
                    imageRef: pokemonImg
                })
            } catch (error) {
                console.log("Could not add Pokemon to team" + error)
            }
        } catch (error) {
            console.log("Enter a valid pokemon name")
        }

        setFormValues({
            query: ''
        })
    }

    // const countRef = useRef(0)
    //
    // const handleClick = () => {
    //     countRef.current++
    //     forceUpdate()
    // }
    //
    // const forceUpdate = () => {
    //     setState({})
    // }

    return (
        <div className="addPokemonForm-div">
            <form onSubmit={handleAddPokemonFormSubmit} className="addPokemonForm-div--form">
                <label className="addPokemonForm-div--label">Add Pokemon</label>
                <input ref={ref} type="text" className="addPokemonForm-div--input" placeholder="pikachu"/>
                <button onClick={handleClick} type="submit" className="addPokemonForm-div--button">Submit</button>
            </form>
        </div>
    );
}

export default AddPokemonForm;
