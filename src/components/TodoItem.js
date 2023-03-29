import React, { useState } from 'react'

const TodoItem = ({status_,text}) => {
    const [status, setStatus] = useState(status_)

    const toggle = () => {
        setStatus(!status_)
    }

    return (
        <label>
            <input type="checkbox" defaultChecked={status} onclick={toggle} />
            <span />
            <p>{ text }</p>
        </label>
    );
}

export default TodoItem