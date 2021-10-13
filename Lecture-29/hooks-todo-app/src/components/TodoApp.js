import React,{useState,useEffect} from 'react'
import TodoList from './TodoList'
import InputForm from './InputForm'
import styles from './TodoApp.module.css';
import { v4 as uuid } from 'uuid';


const TodoApp = () => {

    const initalialTodos = JSON.parse(window.localStorage.getItem('todos'||"[]"));
    
    const [todos, setTodos] = useState(initalialTodos);

    useEffect(() => {
        window.localStorage.setItem('todos', JSON.stringify(todos));
    },[todos])

 
    const addTodo = (inputTask) => {
        setTodos((prevState) => {
            return [...prevState, {
                id: uuid(),
                task: inputTask,
                completed: false
            }];
        })
    }

    const deleteTodo = (todoid) => {
        
        setTodos((prevState) => {
            
            return prevState.filter((todo) => todo.id !== todoid);
        })

    }

    const toggleTodo=(todoid) => {
        setTodos((prevState) => {
            return prevState.map((todo) => {
                return todo.id === todoid ? { ...todo, completed: !todo.completed } : todo;
            })
        })
    }



    return (
        <div>
            <section className={styles['todo-form']}>
                <InputForm
                    addTodo={addTodo}
                />
            </section>
            <section className={styles['todo-list']}>
                <TodoList
                    todos={todos}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                />
            </section>
        </div>
    )
}

export default TodoApp
