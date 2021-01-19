import React,{useState} from 'react';

import Hello from './sayHello';

import Tweet from"./Tweet";

function App(){

  // const[isRed, setRed]= useState(false);
  // const[count,setcount]= useState(0);

  // const increment = () =>{
  //   setcount(count+1);
  //   setRed(!isRed);

    const[users, setUsers] = useState([
      {name:"varma", message:"Hi!"},
      {name:"Sang", message:"Hello!"},
      {name:"Nag", message:"There!"}
    ]

    );

  

  return(
    <div className="app">
   
      {/* <Tweet name="Dev Ed" message="hi" />
      <Tweet name="John Snow" message="there?" />
      <Tweet name="Traversy Media" message="100K" />
      <Tweet name="Mosh" message="Media"/> */}

      {/* <h1 className={isRed ? "red": "" }>Change my color:</h1>

      <button onClick={increment}>Increment</button>
      <h1>{count}</h1> */}

      { users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))

      }
     
    </div>
  );
}

export default App;
