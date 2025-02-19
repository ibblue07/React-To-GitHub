import React, { useState } from 'react';

export default function FormInput() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (input) => {
        setInputValue(input.target.value);
    }

    return (
        <div>
            <h2>Form Input</h2>
            <p>Your Text: {inputValue}</p>
            <input type="text" 
            value={inputValue} 
            onChange={handleChange} 
            placeholder="Enter text"/>
        </div>
    );
}