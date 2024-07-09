export const Gender = ({gender, onGenderChange}) => {

    function handleGenderChange(value: string) {
        onGenderChange(value);
    }

    return (
        <div className="choose-gender">
            <div className="segmented-control">
                <input id="calc-gender-male" type="radio" name="gender" value="male" checked={gender === "male"}
                       onChange={(e) => handleGenderChange(e.target.value)}/>
                <label htmlFor="calc-gender-male">Male</label>
            </div>

            <div className="segmented-control">
                <input id="calc-gender-female" type="radio" name="gender" value="female" checked={gender === "female"}
                       onChange={(e) => handleGenderChange(e.target.value)}/>
                <label htmlFor="calc-gender-female">Female</label>
            </div>
        </div>
    );
};