import React from "react";

export const RangeParams = ({age, height, weight, walking, cardio, onParamChange}: {
    age: number, height: number, weight: number, walking: number, cardio: number,
    onParamChange: (paramName: string, value: number) => void
}) => {

    function handleUpdateParameters(id: string, value: number) {
        const paramName = id.split('calc-')[1];
        onParamChange(paramName, value);
    }

    return (
        <React.Fragment>
            <label htmlFor="calc-age" id="calc-age_value">Age: {age}</label>
            <input id="calc-age" type="range" value={age} min={13} max={100}
                   onChange={(e) => handleUpdateParameters(e.currentTarget.id, +e.target.value)}/>

            <label htmlFor="calc-height" id="calc-height_value">Height: {height} cm</label>
            <input id="calc-height" type="range" value={height} min={80} max={250}
                   onChange={(e) => handleUpdateParameters(e.currentTarget.id, +e.target.value)}/>

            <label htmlFor="calc-weight" id="calc-weight_value">Weight: {weight} kg</label>
            <input id="calc-weight" type="range" value={weight} min={40} max={200}
                   onChange={(e) => handleUpdateParameters(e.currentTarget.id, +e.target.value)}/>

            <label htmlFor="calc-walking" id="calc-walking_value">Walking: {walking} hours per week</label>
            <input id="calc-walking" type="range" value={walking} min={0} max={50}
                   onChange={(e) => handleUpdateParameters(e.currentTarget.id, +e.target.value)}/>

            <label htmlFor="calc-cardio" id="calc-cardio_value">Cardio: {cardio} hour per week</label>
            <input id="calc-cardio" type="range" value={cardio} min={0} max={50}
                   onChange={(e) => handleUpdateParameters(e.currentTarget.id, +e.target.value)}/>
        </React.Fragment>
    );
};