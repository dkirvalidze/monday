import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";


function App() {
    const [counter, setCounter] = useState(0);
    const increase = () => {
        if (counter === 5) {
            return
        }
        setCounter(count => count + 1);
    };
    const reset = () => {
        setCounter(0)
    }

    const disabledButton = counter === 5;

    return (
        <div className="App">
            <Counter counter={counter} increaseCounter={increase} resetCounter={reset}
                     disabled={disabledButton}/>
        </div>
    );
}

export default App;
