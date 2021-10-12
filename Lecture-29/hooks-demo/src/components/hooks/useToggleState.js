import { useState } from 'react';


// User defined hook to toggle the state
const useToggleState = (intialVal=false) => {
    
    const [state,setState] = useState(intialVal);
    
    const toggle = () => {
        setState(!state);
    }
    
    return [state, toggle];
}

export default useToggleState
