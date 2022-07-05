import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./accordion";

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('Accordion changed element fired')
const accordionOnClick = action('click on element')

export const CollapsedMode = () => <Accordion
    titleValue={'Menu'}
    collapsed={true}
    onChange={callback}
    onClick={accordionOnClick}
    items={[
        {title: 'Marat', value: '1'},
        {title: 'Margo', value: '2'},
        {title: 'Sasha', value: '3'},
        {title: 'Dasha', value: '4'},
        {title: 'Valera', value: '5'},
    ]}/>

export const UnCollapsedMode = () =>
    <Accordion
        titleValue={'Menu'}
        collapsed={false}
        onChange={callback}
        onClick={accordionOnClick}

        items={[
            {title: 'Marat', value: '1'},
            {title: 'Margo', value: '2'},
            {title: 'Sasha', value: '3'},
            {title: 'Dasha', value: '4'},
            {title: 'Valera', value: '5'},
        ]}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion
        titleValue={'Menu'}
        collapsed={value}
        onChange={() => setValue(!value)}
        onClick={accordionOnClick}

        items={[
            {title: 'Marat', value: '1'},
            {title: 'Margo', value: '2'},
            {title: 'Sasha', value: '3'},
            {title: 'Dasha', value: '4'},
            {title: 'Valera', value: '5'},
        ]}/>
}
