import React, { useRef } from 'react';

const UncontrolledForm = (props)=>{

    const textInput = useRef();

    const controlledAction = ()=>{
        alert(`taken from Ref - ${textInput.current.value}`);
    };

    return (
        <form>
            <label>
                Name:
                <input ref={textInput} />
            </label>
            <button type='button' onClick={controlledAction}>Submit</button>
        </form>
    );
}

export default UncontrolledForm;