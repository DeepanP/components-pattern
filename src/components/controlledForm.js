import React, { useState } from 'react';

const ControlledForm = (props)=>{

    const [name,setName] = useState('');

    const nameChange = (e)=>{
        setName(e.target.value);
    }

    const controlledAction = ()=>{
        setName('Sample');
    };

    return (
        <form>
            <label>
                Name:
                <input value={name} onChange={nameChange} />
            </label>
            <button onClick={controlledAction}>Change To Sample</button>
        </form>
    );
}

export default ControlledForm;