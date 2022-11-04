import React from 'react';
import './App.css';
type CounterType = {
    initialCounter:number;
    increaseCounter:()=> void;
    resetCounter:()=> void;
}

export function Counter(props:CounterType) {
    return (
        <div className={"Counter"}>
            <div className={"Counter-screen"}>{props.initialCounter}
            </div>
            <div className={"Button-area"}>
                <button disabled={props.initialCounter===5} className={"Increase"} onClick={props.increaseCounter}>Increase</button>
                <button className={"Reset"} onClick={props.resetCounter}>Reset</button>
            </div>
        </div>
    );
}