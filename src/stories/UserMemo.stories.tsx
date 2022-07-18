import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(3);
    const [b, setB] = useState<number>(3);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA;
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <div>
            Result for A: {resultA}
        </div>
        <div>
            Result for B: {resultB}
        </div>
    </>
}

const UsersSecret = (props: { users: Array<any> }) => {
    return <div>
        {props.users.map((u, i) => <div key={i.toString()}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
    console.log('helps to react memo')
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Marat', 'Margo', 'Evgeny']);

    const newArray = useMemo(()=>{
        return users.filter(el => el.toLowerCase().indexOf('a') > -1)
    },[users])

    const addUser = () => {
        const newUser = [...users, 'Sveta ' + new Date().getTime()];
        setUsers(newUser);
    }


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={()=> addUser()}>Add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}
