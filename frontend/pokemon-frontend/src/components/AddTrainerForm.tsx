import React, {FormEvent, useState} from 'react';
import '../style/style.css';
import axios from "axios";

interface AddTrainerFormValues {
    name: string;
    pokemon: [];
}

interface AddTrainerProps {
    trainerAdded: Function
}

function AddTrainerForm(props : AddTrainerProps) {

    const ref = React.useRef<HTMLInputElement>(null)
    React.useEffect(() => {
        if (ref.current) {
            ref.current.focus()
        }
    }, [])

    const [formValues, setFormValues] = useState<AddTrainerFormValues>({
        name: '',
        pokemon: []
    })


    const handleAddTrainerFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()


        // const imageRef = formValues.imageRef;

        try {
            const name = ref.current?.value;
            await axios.post<AddTrainerFormValues>('http://localhost:8080/', {
                name: name,
                pokemon: []
            })
            props.trainerAdded(true)
        } catch (error) {
            console.log(error)
        }
    }

    const handleName = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormValues(prevState => ({
            ...prevState,
            name: event.target.value
        }));
        console.log(formValues.name)
    };

    // const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     const imageRef = Array.from(event.target.selectedOptions, imageRef => imageRef.value)
    //     setFormValues(prevState => ({
    //         ...prevState,
    //         imageRef
    //     }))
    // }

    return(
        <div className="addTrainerForm-div">
            <form onSubmit={handleAddTrainerFormSubmit} className="addTrainerForm-div--form">
                <label className="addTrainerForm-div--label">Add a Trainer</label>
                <input ref={ref} type="text" placeholder="insert name" className="addTrainerForm-div--input"/>
                {/*<select multiple value={formValues.imageRef} onChange={handleOptionChange} className="addTrainerForm-div--select">*/}
                {/*    <option value='image1' className="addTrainerForm-div--option">image1</option>*/}
                {/*    <option value='image2' className="addTrainerForm-div--option">image2</option>*/}
                {/*    <option value='image3' className="addTrainerForm-div--option">image3</option>*/}
                {/*</select>*/}
                <button type="submit" className="addTrainerForm-div--button">submit</button>
            </form>
        </div>
    );
}

export default AddTrainerForm;
