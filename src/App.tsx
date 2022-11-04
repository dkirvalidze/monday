import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";


function App() {
    const [counter, setCounter] = useState(0);
    const increase = () => {
        if (counter === 5) {
            return
        }
        setCounter(counter => counter + 1);
    };
    const reset = () => {
        setCounter(0)
    }

    const maxDisabledButton = counter === 5;
    const minDisabledButton = counter === 0;

    return (
        <div className="App">
            <Counter counter={counter} increaseCounter={increase} resetCounter={reset}
                     maxDisabled={maxDisabledButton} minDisabled={minDisabledButton}/>
        </div>
    );
}

export default App;
