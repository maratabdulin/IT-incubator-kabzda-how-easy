import React, {useReducer} from 'react';
import {reducer} from "./Reducer";

type UncontrolledAccordionPropsType = {
    titleValue: string,
}

const UncontrolledAccordionSecret = (props: UncontrolledAccordionPropsType) => {
    const [state, dispatch] = useReducer(reducer, { collapsed: false});
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {
                dispatch({type: 'TOGGLE-COLLAPSED'})
            }}/>
            {!state.collapsed && (<AccordionBody/>)}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={() => {props.onClick()}}>-- {props.title} --</h3>
    )
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export const UncontrolledAccordion = React.memo(UncontrolledAccordionSecret);

