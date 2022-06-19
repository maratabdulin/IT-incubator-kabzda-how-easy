import React, {useState} from "react";
import {RatingValueType} from "../rating/rating";

const UncontrolledRating = () => {
    const [value, setValue] = useState<RatingValueType>(0);

    return (
        <div>
            <Star selected={value > 0} starOn={() => setValue(1)}/>
            <Star selected={value > 1} starOn={() => setValue(2)}/>
            <Star selected={value > 2} starOn={() => setValue(3)}/>
            <Star selected={value > 3} starOn={() => setValue(4)}/>
            <Star selected={value > 4} starOn={() => setValue(5)}/>
        </div>
    )
};

type StarPropsType = {
    selected: boolean
    starOn: () => void
}

const Star = (props: StarPropsType) => {
    return <span onClick={props.starOn}>
        {props.selected ? <b>Star </b> : 'Star '}
    </span>
}

export default UncontrolledRating

