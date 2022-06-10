import React, {useState} from "react";

const UncontrolledRating = () => {
    const [value, setValue] = useState(0);

    const starOn = (value: number) => {
        setValue(value);
    }

    return (
        <div>
            <Star selected={value > 0} starOn={() => starOn(1)}/>
            <Star selected={value > 1} starOn={() => starOn(2)}/>
            <Star selected={value > 2} starOn={() => starOn(3)}/>
            <Star selected={value > 3} starOn={() => starOn(4)}/>
            <Star selected={value > 4} starOn={() => starOn(5)}/>
        </div>
    )
};

type StarPropsType = {
    selected: boolean
    starOn: () => void
}

const Star = (props: StarPropsType) => {
    return props.selected ?
        <span onClick={props.starOn}><b>Star</b> </span> :
        <span onClick={props.starOn}>Star </span>;
}

export default UncontrolledRating

