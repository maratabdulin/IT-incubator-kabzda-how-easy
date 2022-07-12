import React, {useState} from 'react';
import s from './UncontrolledOnoff.module.css'

type PropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}

const UncontrolledOnOffSecret = (props: PropsType) => {
    const [on, setOn] = useState<boolean>(props.defaultOn ? props.defaultOn : false);

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

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div className={s.wrapper}>
            <div style={onStyle}
                 onClick={onClicked}
            >ON
            </div>
            <div style={offStyle}
                 onClick={offClicked}>OFF
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export const UncontrolledOnOff = React.memo(UncontrolledOnOffSecret);

export default UncontrolledOnOff;
