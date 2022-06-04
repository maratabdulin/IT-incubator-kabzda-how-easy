import React from 'react';
import './on-off.css'

type OnOffType = {
    doWork?: boolean
}

const OnOff = (props: OnOffType) => {
    const isPropsNotUndefined = props.doWork !== undefined;
    return (
        <div className='wrapper'>
            <div className={`block ${isPropsNotUndefined && props.doWork && 'green'}`}>ON</div>
            <div className={`block ${isPropsNotUndefined && !props.doWork && 'red'}`}>OFF</div>
            <div className={`block circle ${isPropsNotUndefined ? (props.doWork ? 'green' : 'red') : null}`}></div>
        </div>
    );
};

export default OnOff;
