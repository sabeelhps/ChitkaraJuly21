import React,{useState} from 'react'
import styles from './InputForm.module.css';

const InputForm = (props) => {

    const [input, setInput] = useState('');
    const [isValid, setIsValid] = useState(true);


    const inputChangeHandler = (e) => {

        if (input.trim().length > 0) {
            setIsValid(true);
        }

        setInput(e.target.value)
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();

        if (input.trim().length === 0) {
            setIsValid(false);
            return;
        }

        props.addTodo(input);
        setInput("");
    }


    return (
        <form onSubmit={formSubmitHandler} className={styles['todo-input']} >
            <label style={{color: !isValid ? 'red':'white'}} htmlFor="todo">Add Todo</label>
            <input
                type="text"
                id="todo"
                onChange={inputChangeHandler}
                value={input}
                style={{borderColor: !isValid ? 'red':'#ccc'}}
            />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default InputForm
