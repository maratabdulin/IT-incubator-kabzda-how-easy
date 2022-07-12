import React, {useState} from "react";

export default {
    title: 'Memo Demo'
}

const Filter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<any> }) => {
    return <div>
        {props.users.map((u, i) => <div key={i.toString()}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret);


export const Example1 = () => {
    const [counter, setCounter] = useState(10);
    const [users, setUsers] = useState(['Marat', 'Margo', 'Evgeny']);
    const addUser = () => {
        const newUser = [...users, 'Sveta ' + new Date().getTime()]
        setUsers(newUser)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>+</button>
        <Filter count={counter}/>
        <Users users={users}/>
    </>
}
