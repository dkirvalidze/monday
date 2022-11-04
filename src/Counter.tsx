import React from 'react';
import './App.css';

type CounterType = {
    counter: number;
    increaseCounter: () => void;
    resetCounter: () => void;
    maxDisabled: boolean;
    minDisabled: boolean;
}

export function Counter(props: CounterType) {
    return (
        <div className={"Counter"}>
            <div className={"Counter-screen"}>{props.counter}
            </div>
            <div className={"Button-area"}>
                <button disabled={props.maxDisabled}  className={props.maxDisabled?"button-red": "button"} onClick={props.increaseCounter}>Increase
                </button>
                <button disabled={props.minDisabled} className={"button"} onClick={props.resetCounter}>Reset</button>
            </div>
        </div>
    );
}