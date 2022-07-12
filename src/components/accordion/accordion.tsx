import React from 'react';

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    /**
     * collapsed is property of accordion
     */
    collapsed: boolean
    onChange: () => void
    items: Array<ItemType>
    onClick: (item: any)=>void
}

const AccordionSecret = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onChange={props.onChange}
                collapsed={props.collapsed}
            />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
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
        <h3 onClick={(e)=>props.onChange()}>-- {props.title} --</h3>
    )
}

type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (item: any)=>void
}

const AccordionBody = (props: AccordionBodyPropsType) => {
    return (
        <ul>
            {props.items.map((el, index)=><li key={index} onClick={()=>{props.onClick(el.value)}}>{el.title}</li>)}
        </ul>
    )
}

export const Accordion = React.memo(AccordionSecret);
