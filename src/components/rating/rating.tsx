import React from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5,
};

const Rating = (props: RatingPropsType) => {

    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    )
};

type StarPropsType = {
    selected: boolean
}


const Star = (props: StarPropsType) => {
    if (props.selected) {
        return (<span><b>Star</b> </span>)
    } else {
        return (<span>Star </span>)
    }
}

export default Rating

