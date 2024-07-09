import React, {useState} from 'react';
import './App.css'
import {Gender} from "./components/Gender.tsx";
import {RangeParams} from "./components/RangeParams.tsx";
import {Result} from "./components/Result.tsx";

function App() {
    const [gender, setGender] = useState('male');
    const [age, setAge] = useState(25);
    const [height, setHeight] = useState(180);
    const [weight, setWeight] = useState(80);
    const [walking, setWalking] = useState(2);
    const [cardio, setCardio] = useState(1);

    function setParams(paramName: string, value: number){
        switch(paramName){
            case "age":
                setAge(value);
                break;
            case "height":
                setHeight(value);
                break;
            case "weight":
                setWeight(value);
                break;
            case "walking":
                setWalking(value);
                break;
            case "cardio":
                setCardio(value);
                break;
            default:
                break;
        }
    }

    function resetParams(){
        setGender('male');
        setAge(25);
        setHeight(180);
        setWeight(80);
        setWalking(2);
        setCardio(1);
     }

    return (
        <React.Fragment>
            <div id="bmr-calculator" className="wrapper">
                <div className="calculator">

                    <Gender gender={gender} onGenderChange={setGender}/>

                    <RangeParams
                        age={age}
                        height={height}
                        weight={weight}
                        walking={walking}
                        cardio={cardio}
                        onParamChange={setParams}/>
                </div>

                <Result gender={gender}
                        age={age}
                        height={height}
                        weight={weight}
                        walking={walking}
                        cardio={cardio}/>

                <button onClick={resetParams} className="button-reset" role="button">🔄 Reset</button>
            </div>
        </React.Fragment>
    )
}

export default App
