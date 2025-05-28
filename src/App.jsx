import react from 'react';

import Home from './Home';

// This is an arrow function component that returns a simple JSX element.
const App = () => {

  const num = [0,1,43,4,10];

  
  return (
    <div>
      {num.map((i) => {
        return(
          <div>
            {i} <Home />
          </div>
        )
      })}
    </div>
  )
}

export default App;
