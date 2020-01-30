import React, { useState } from 'react';

const App = () => {
  const [board,setBoard] = useState(['0','1','2','3','4','5','6','7','8'])
  return(
    <div>
    {
      board.map((value, index) => {
        return (
          <div key={index} id={index}>{value}</div>
        )
      })
    }
  </div>
  );
} 

export default App;
