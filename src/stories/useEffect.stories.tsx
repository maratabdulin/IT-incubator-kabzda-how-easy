import React, {useEffect, useState} from 'react';

export default {
    title: 'UseEffect'
}


export const Example2 = () => {

    const [counter, setCounter] = useState(1);

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString();
    });

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString();
    }, []);

    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString();
    },[counter]);


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>
}

export const setTimeoutExample = () => {

    const [counter, setCounter] = useState(1);

    useEffect(() => {

        setInterval(()=>{
            console.log('tick ' + counter)
            setCounter(state => state + 1)
        },1000)

    }, []);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>
}
