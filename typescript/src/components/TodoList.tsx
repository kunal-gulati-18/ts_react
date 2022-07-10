import React, { useState } from 'react'
import { Todo } from '../model'

interface Props {
    data: Todo[],
    onEdit: Function,
    onDelete: Function,
    onComplete: Function,
}

const TodoList: React.FC<Props> = ({ data, onEdit, onDelete, onComplete }) => {
    const [editMode, setIsEditMode] = useState<Todo>();
    const [editedValue, setEditedValue] = useState<string>("");

    const setEditMode = (data: Todo) => {
        setIsEditMode(data);
        setEditedValue(data.todo)
    }

  return (
    <div className='todo__container'>
        {
            data?.map((item: Todo) => (
                item.id !== editMode?.id ?
                <div className='todo__container___item' key = {item.id}>
                    <div className={'label' + (item?.is_complete ? " todo__is_complete" : "")}>
                    {
                        item.todo
                    }
                    </div>
                    <div className='todo__container__action_items'>
                        <div onClick={() => setEditMode(item)}>
                            e
                        </div>
                        <div onClick={() => onDelete(item.id)}>
                            d
                        </div>
                        <div onClick={() => onComplete(item.id)}>
                            c
                        </div>
                    </div>
                </div>
                :
                <div key = {item.id} className='todo_edit__handler'>
                    <input value = {editedValue} onChange = {(e) =>  setEditedValue(e.target.value)} placeholder = "Edit todo" />
                    <div className='todo_edit__handler___item'>
                        <button onClick={() => {setIsEditMode({ id: "", todo: "", is_complete: false }); onEdit(item.id, editedValue) }}>Ok</button>
                        <button onClick={() => { setIsEditMode({ id: "", todo: "", is_complete: false }) }}>Cancel</button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default TodoList