import React, { useState } from "react";
import './ConnectForm.css';

function ConnectForm() {

    // useState to store the values of each input
    const [inputs, setInputs] = useState({});
    const [textArea, setTextArea] = useState('')

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleTextAreaChange = (event) => {
        setTextArea(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`${inputs.name} your message has been sent successfully.`);
    }


    return (
        <section className="connect">
            <div className="formContainer">
                <h1>Do you want a Lamborghini Aventador? Send a message to us </h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Your full name:</span>
                        <input className="infos" required type="text" name="name" value={inputs.name || ''} onChange={handleChange} />
                    </label>
                    <label>
                        <span>Your email:</span>
                        <input className="infos" required type="text" name="email" value={inputs.email || ''} onChange={handleChange} />
                    </label>
                    <label>
                        <span>Country:</span>
                        <input className="infos" required type="text" name="country" value={inputs.country || ''} onChange={handleChange} />
                    </label>
                    <label>
                        <span>City:</span>
                        <input className="infos" required type="text" name="city" value={inputs.city || ''} onChange={handleChange} />
                    </label>
                    <label className="textContainer">
                        <span>Specify why you want a Lamborghini:</span>
                        <textarea value={textArea} onChange={handleTextAreaChange} />
                    </label>
                    <input className="submit" type="submit" />
                </form>
            </div>
        </section>
    )
}

export default ConnectForm;