import './App.css';
import About from './components/About';
import Firstcomponent from './components/Firstcomponent';
import Secondcomponent from './components/Secondcomponent';
import Taskcomponent from './components/Taskcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Welcome to learning Reactjs</h1>

        {/* below we render /show/display or components */}
        <Firstcomponent/>
        <Secondcomponent/>
        <Taskcomponent/>
        <About/>
      
      </header>
    </div>
  );
}

export default App;
