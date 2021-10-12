import {useState,useEffect} from 'react'

const Count = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You Clicked ${count} times`;
        console.log("Inside use Effect")
    });

    

    return (
        <div>
            <h2>You Clicked on the Button { count } times</h2>
            <button onClick={()=>setCount(count+1)}>Click Me</button>
        </div>
    )
}

export default Count
