import React, { useState } from 'react';
import './styles.css';

interface Props {
    addTodo: Function,
    onChange: Function,
    todo: string
}
const InputField: React.FC<Props> = ({ addTodo, onChange, todo }) => {
  return (
    <div className='input_field__wrapper'>
        <input value={todo} className='input__box' placeholder='Enter task name' onChange={(e) => onChange(e.target.value)}/>
        <button onClick = {() => addTodo()} className='button__go'>Go</button>
    </div>
  )
}

export default InputField;