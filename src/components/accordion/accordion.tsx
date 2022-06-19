import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed: (status: boolean) => void
}

const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                setCollapsed={props.setCollapsed}
                collapsed={props.collapsed}
            />
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (status: boolean) => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={() => {props.setCollapsed(!props.collapsed)}}>-- {props.title} --</h3>
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
