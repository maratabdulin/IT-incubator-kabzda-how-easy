import React, {useState} from "react";

const UncontrolledRating = () => {
    const [value, setValue] = useState(0);

    return (
        <div>
            <Star selected={value > 0}/><button onClick={()=>setValue(1)}>1</button>
            <Star selected={value > 1}/><button onClick={()=>setValue(2)}>1</button>
            <Star selected={value > 2}/><button onClick={()=>setValue(3)}>1</button>
            <Star selected={value > 3}/><button onClick={()=>setValue(4)}>1</button>
            <Star selected={value > 4}/><button onClick={()=>setValue(5)}>1</button>
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

export default UncontrolledRating

