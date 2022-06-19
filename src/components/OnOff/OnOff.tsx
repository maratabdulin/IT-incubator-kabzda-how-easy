import React, {useState} from 'react';
import s from './onoff.module.css'

type OnOffType = {
    on: boolean
    setOn: (value: boolean) => void
}

const OnOff = (props: OnOffType) => {

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
            <div style={onStyle} onClick={() => props.setOn(true)}>ON</div>
            <div style={offStyle} onClick={() => props.setOn(false)}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;
