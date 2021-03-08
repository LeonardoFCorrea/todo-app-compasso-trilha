import React, {useState} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
    const[todoS, setTodoS] = useState([]);

    const adicionarTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodoS = [todo, ...todoS];

        setTodoS(newTodoS);
    };

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodoS(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removerTodo = id => {
        const removerArray = [...todoS].filter(todo => todo.id !== id)
        
        setTodoS(removerArray);
    };

    const completeTodo = id => {
        let updatedTodoS = todoS.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodoS(updatedTodoS);
    }

    return (
        <div>
            <h1>To-Do List</h1>
            <TodoForm onSubmit={adicionarTodo}/>
            <Todo 
                todoS={todoS}
                completeTodo={completeTodo}
                removerTodo={removerTodo}
                updateTodo={updateTodo}
                setTodoS={setTodoS}
            />
        </div>
    )
}

export default TodoList
