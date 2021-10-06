import React from 'react';
import Card from './Card';

function App() {
  

  return (
    <div>
      <h1>This is a Heading in JSX</h1>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

function Hello() {
  

  return (
    <section>
      <h1>Hello how are you??</h1>
    </section>
  )
}

const PI = 3.14205;


export default App;

export { Hello,PI };