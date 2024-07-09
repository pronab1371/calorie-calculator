export const Result = ({gender, age, height, weight, walking, cardio}:
                           {
                               gender: string, age: number, height: number, weight:
                                   number, walking: number, cardio: number
                           }) => {
    const week = 1;

    // The Harris–Benedict equations revised by Mifflin and St Jeor in 1990: 'A new predictive equation for resting energy expenditure in healthy individuals'
    let bmr = (10 * weight + 6.25 * height - 5 * age) + (gender === "male" ? 5 : -161);
    bmr = bmr * 1.2;
    bmr += walking * 60 * (.03 * weight * week / 0.45) / 7;
    bmr += cardio * 60 * (.07 * weight * week / 0.45) / 7;
    bmr = Math.floor(bmr);

    const targetGainWeight = Math.round((bmr + 300) / 100) * 100;
    const targetMaintain = Math.round((bmr) / 100) * 100;
    const targetLoseWeight = Math.round((bmr - 500) / 100) * 100;

    return (
        <div className="results">
            <div id="calc-target-gain">
                To Gain Weight:<br/>
                <span>{targetGainWeight} calories</span>
            </div>
            <div id="calc-target-maintain">
                To Maintain:<br/>
                <span>{targetMaintain} calories</span>
            </div>
            <div id="calc-target-lose">
                To Lose Weight:<br/>
                <span>{targetLoseWeight} calories</span>
            </div>
        </div>
    );
};