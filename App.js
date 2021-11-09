
import React, { useState } from 'react';

function App() {


  const [valor,setvalor] = useState(0);


  function funcImpaPar(){
    setvalor(valor+1);
  }
  return (
    <>
     <div>Quantidade de click Por usuário <b>0</b></div>
     <button onClick={funcImpaPar}>click</button>
    </>
  );
  
}

export default App;
