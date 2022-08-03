import React, {useState} from 'react';

export default {
    title: 'UseState'
}

// передача функции как инициализационного значания для useState вызовется один раз и запомнится
function generateData() {
    return 123
}

export const Example1 = () => {
    const [counter, setCounter] = useState(generateData);
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}
