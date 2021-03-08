import React, { useState } from 'react';
import TodoForm from './TodoForm';
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

function Todo({todoS, completeTodo, removerTodo, updateTodo, setTodoS}) {
    const[edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        });
    };

    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return (
        <div>{
        todoS.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        key={index}
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <RiCloseCircleLine
                onClick={() => removerTodo(todo.id)}
                className='delete-icon'
                />
                <TiEdit onClick={() => setEdit({id: todo.id, value: todo.text})}
                className='edit-icon'/>
            </div>

        </div>    
    ))} <button className='todo-button' onClick={() => setTodoS([])}>Limpar Itens</button>
    </div>
    )
    
}

export default Todo;