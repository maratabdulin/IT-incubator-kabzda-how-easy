import React, {useState} from 'react';
import s from './UncontrolledOnoff.module.css'

const UncontrolledOnOff = () => {
    const [on, setOn] = useState<boolean>(false);

    const onStyle = {
        width: '25px',
        height: '25px',
        border: '2px black solid',
        padding: '10px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '25px',
        height: '25px',
        border: '2px black solid',
        padding: '10px',
        backgroundColor: !on ? 'red' : 'white'
    }
    const indicatorStyle = {
        borderRadius: '50%',
        width: '15px',
        height: '15px',
        border: '2px black solid',
        padding: '10px',
        backgroundColor: on ? 'green' : 'red'
    }

    return (
        <div className={s.wrapper}>
            <div style={onStyle} onClick={() => setOn(true)}>ON</div>
            <div style={offStyle} onClick={() => setOn(false)}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default UncontrolledOnOff;
