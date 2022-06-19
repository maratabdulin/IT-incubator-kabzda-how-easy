import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}

const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onChange={props.onChange}
                collapsed={props.collapsed}
            />
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    onChange: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={props.onChange}>-- {props.title} --</h3>
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

export default Accordion;
