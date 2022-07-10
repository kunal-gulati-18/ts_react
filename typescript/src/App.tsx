import React, { useId, useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const id = useId();

  const handleAddToDo = () => {
    if(!todo) return alert("please add a todo")
      setTodoList([
        ...todoList,
        {
          id: Date.now(),
          is_complete: false,
          todo
        }
      ])

      setTodo("");
  }

  const onDeleteTodo = (id: number) => {
    setTodoList(
      [
        ...todoList.filter(item => item.id != id)
      ]
    )
  }

  const onEditTodo = (id: number, text: string) => {
    setTodoList(
      [
        ...todoList.map(item => {
          if(item.id === id) {
            return {
              ...item,
              todo: text
            }
          }
          return item
        })
      ]
    )
  }

  const onToggleTodo = (id: number) => {
    setTodoList(
      [
        ...todoList.map(item => {
          if(item.id === id) {
            return {
              ...item,
              is_complete: !item.is_complete
            }
          }
          return item
        })
      ]
    )
  }

  const onChange = (value: string) => {
    setTodo(value);
  }

  return (
    <div className="App">
      <span className="heading">
        Taskify
      </span>
      <InputField onChange = {onChange} addTodo = {handleAddToDo} todo = {todo}/>
      <TodoList data={todoList} onDelete = {onDeleteTodo} onEdit = {onEditTodo} onComplete = {onToggleTodo}/>
    </div>
  );
}

export default App;
