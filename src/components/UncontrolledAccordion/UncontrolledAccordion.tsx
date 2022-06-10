import React, {useState} from 'react';

type UncontrolledAccordionPropsType = {
    titleValue: string,
}

const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {

    const [collapsed, setCollapsed] = useState(true);

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={() => setCollapsed(!collapsed)}>TOGGLE</button>
            {!collapsed && (<AccordionBody/>)}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3>-- {props.title} --</h3>
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

export default UncontrolledAccordion;
