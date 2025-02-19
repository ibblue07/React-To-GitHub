import React, { useState } from 'react';

export default function Counter() {
    const [count, setCounter] = useState(0);

    function handleIncrement() {
        setCounter(count + 1);
    }

    function handleDecrement() {
        if (count !== 0) {
            setCounter(count - 1);
        }
    }

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
}