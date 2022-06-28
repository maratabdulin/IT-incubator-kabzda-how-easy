import React from 'react';
import s from './onoff.module.css'

type OnOffType = {
    on: boolean
    onChange: (value: boolean) => void
}

export const OnOff = (props: OnOffType) => {

    const onStyle = {
        width: '25px',
        height: '25px',
        border: '2px black solid',
        padding: '10px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '25px',
        height: '25px',
        border: '2px black solid',
        padding: '10px',
        backgroundColor: !props.on ? 'red' : 'white'
    }
    const indicatorStyle = {
        borderRadius: '50%',
        width: '15px',
        height: '15px',
        border: '2px black solid',
        padding: '10px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return (
        <div className={s.wrapper}>
            <div style={onStyle}
                 onClick={() => props.onChange(true)}>
                ON
            </div>

            <div style={offStyle}
                 onClick={() => props.onChange(false)}>
                OFF
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
