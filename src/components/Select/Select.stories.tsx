import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Select from "./Select";


export default {
    title: 'Select',
    component: Select
}
export const WithValue = () => {
    const [value, setValue] = useState('2');

    return <Select
        onChange={setValue}
        items={[
            {title: 'Marat', value: '1'},
            {title: 'Margo', value: '2'},
            {title: 'Sasha', value: '3'},
            {title: 'Dasha', value: '4'},
            {title: 'Valera', value: '5'},
        ]}
        value={value}
    />
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null);

    return <Select
        onChange={setValue}
        items={[
            {title: 'Marat', value: '1'},
            {title: 'Margo', value: '2'},
            {title: 'Sasha', value: '3'},
            {title: 'Dasha', value: '4'},
            {title: 'Valera', value: '5'},
        ]}
        value={value}
    />
}
