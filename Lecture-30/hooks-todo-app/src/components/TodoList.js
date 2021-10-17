import React from 'react'
import Todo from './Todo'
import styles from './TodoList.module.css';

const TodoList = ({todos,deleteTodo,toggleTodo}) => {
    return (
        <ul className={styles['todo-list']}>
            {
                todos.map((todo,idx) => {
                    return <Todo
                        id={todo.id}
                        task={todo.task}
                        completed={todo.completed}
                        key={idx}
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                    />
                })
            }
        </ul>
    )
}

export default TodoList
