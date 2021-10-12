import './App.css';
import Happy from './components/Happy';
import useToggleState from './components/hooks/useToggleState';
import useFormState from './components/hooks/useFormState';
import Count from './components/Count';
import Movie from './components/Movie';

const App = () => {
  
  // User Defined Hooks
  const [isHappy, toggleIsHappy] = useToggleState(true);
  const [isHeartBroken, toggleIsHeartBroken] = useToggleState(false);
  const [username, setUsername, resetUsername] = useFormState();
  const [email, setEmail, resetEmail] = useFormState();
  


  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log('Form Submitted');
    resetUsername();
    resetEmail();
  }
  
  return (
    <div className="App">
      <h1>Hello from React App</h1>
      <h2 onClick={toggleIsHappy}>{ !isHappy ? "😥" : "😄"}</h2>
      <h2 onClick={toggleIsHeartBroken}>{ isHeartBroken?"💔":"❤️" }</h2>
      <Happy />
      

      <form onSubmit={formSubmitHandler}>
        <h2>Your username is : {username}</h2>
        <input
          type="text"
          onChange={setUsername}
          value={username}
        />
        <h2>Your Email is : {email}</h2>
         <input
          type="text"
          onChange={setEmail}
          value={email}
        />
        <button type="submit">Submit</button>
      </form>

      <Count />
      
      <Movie/>

    </div>
  );
}

export default App;
