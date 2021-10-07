

const Hello = () => {


    const todos = ['Go To Gym', 'Learn React', 'Watch Movies', 'Buy Vegetables'];
    
    function getMood() {
        
        const moods = ['Happy', 'Angry😠😠😠😠', 'Paranoid', 'Quit', 'Hungry'];

        return moods[Math.floor(Math.random() * moods.length)];
    }

    const randomNumber = Math.floor(Math.random() * 10);

    const name = 'Kartik'

    let displayItem = null;
    if (randomNumber === 7) {
        displayItem = <img src="https://media2.giphy.com/media/2sXf9PbHcEdE1x059I/giphy.gif?cid=e1bb72ff5b7ca7bf48637959772e6344" alt="win" />;
    } else {
        displayItem = 'Again Not a Lucky Number';
    }

    const todoList = todos.map((todo) => {
        return <li>{ todo }</li>
    }) 


    return <div>
        <h1>Hello from {name.toUpperCase()}</h1>
        <h3>My Mood is { getMood() }</h3>
        <h4>My Random Number is {randomNumber}</h4>
        

        {/* First way of condional rendering */}
        {/* {
            randomNumber === 7 ?
                <img src="https://media2.giphy.com/media/2sXf9PbHcEdE1x059I/giphy.gif?cid=e1bb72ff5b7ca7bf48637959772e6344" alt="win" />
                :'Not a Lucky Number'
        
        } */}

        {/* second way */}
        {/* {displayItem} */}

        {
            randomNumber === 7 &&
                <img src="https://media2.giphy.com/media/2sXf9PbHcEdE1x059I/giphy.gif?cid=e1bb72ff5b7ca7bf48637959772e6344" alt="win" />
    
        }

        <ul>
            {todoList}
        </ul>
        

    </div>

}


export default Hello;