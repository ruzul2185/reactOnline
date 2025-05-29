import Home from './Home';

// This is an arrow function component that returns a simple JSX element.
const App = () => {


  // data fetch from backend
  const message = "Properties are passed to Home";
  const head = "header";
  const foot = "footer";

  const print = (msg) => {
    console.log(msg);
  }

  return (
    <div>
      <Home print={print} data={message} />
    </div>
  )
}

export default App;
