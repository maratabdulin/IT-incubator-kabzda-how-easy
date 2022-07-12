import React, {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

const UncontrolledRatingSecret = (props: RatingPropsType) => {
    const [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0);

    return (
        <div>
            <Star selected={value > 0} starOn={() => {setValue(1); props.onChange(1)}}/>
            <Star selected={value > 1} starOn={() => {setValue(2); props.onChange(2)}}/>
            <Star selected={value > 2} starOn={() => {setValue(3); props.onChange(3)}}/>
            <Star selected={value > 3} starOn={() => {setValue(4); props.onChange(4)}}/>
            <Star selected={value > 4} starOn={() => {setValue(5); props.onChange(5)}}/>
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

export const UncontrolledRating = React.memo(UncontrolledRatingSecret);
