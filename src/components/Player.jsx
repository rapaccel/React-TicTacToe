import React from 'react'
import { useState } from "react"

export default function Player({ initialName,onChangeName, symbol,isActive }) {

    const [playerName, setPlayerName] = useState(initialName);
    function handleInput(event) {
        setPlayerName(event.target.value);
    }


    const [isEditing, setIsEditing] = useState(false);
    function handleChange() {
        setIsEditing((editing) => !editing);
        if ((editing)=>!editing) {
            onChangeName(symbol,playerName);
        }
       
    }
    let editPlayerName = <span className="player-name">{playerName}</span>
    if (isEditing) {
        editPlayerName = <input type="text" required value={playerName} onChange={handleInput} />
    }
    return (
        <li className={isActive ? 'active' :undefined}>
            <span className='player'>
                {editPlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleChange}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}
