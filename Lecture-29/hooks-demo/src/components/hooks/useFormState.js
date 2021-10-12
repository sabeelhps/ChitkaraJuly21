import {useState} from 'react'

const useFormState = (initialVal="") => {
    
    const [value, setValue] = useState(initialVal);
    
    const setInput = (e) => {
        setValue(e.target.value);
    }

    const reset = () => {
        setValue("");
    }
    
    
    return [value, setInput, reset];
}

export default useFormState
