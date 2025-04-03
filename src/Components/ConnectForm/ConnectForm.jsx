import React, { useRef, useState } from "react";
import './ConnectForm.css';

function ConnectForm() {

    const [inputs, setInputs] = useState({});
    const [textArea, setTextArea] = useState('')
    const emailInput = useRef();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleEmail = (event) => {
        const emailValue = event.target?.value || ""; 
        setInputs(values => ({ ...values, email: emailValue }));
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            event.target.setCustomValidity("Please enter a valid email address.");
        } else {
            event.target.setCustomValidity("");
        }
        event.target.reportValidity();
    };
    

    const handleTextAreaChange = (event) => {
        setTextArea(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`${inputs.name} your message has been sent successfully.`);
        setInputs({});
        setTextArea('');
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
                        <input className="infos" required type="text" name="email" value={inputs.email || ''} ref={emailInput} onChange={handleEmail} />
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
                        <textarea value={textArea} required onChange={handleTextAreaChange} />
                    </label>
                    <input className="submit" type="submit" />
                </form>
            </div>
        </section>
    )
}

export default ConnectForm;