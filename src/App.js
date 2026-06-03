import './App.css';
import About from './components/About';
import Fifthcomponent from './components/Fifthcomponent';
import Firstcomponent from './components/Firstcomponent';
import Forthcomponent from './components/Forthcomponent';
import Secondcomponent from './components/Secondcomponent';
import Taskcomponent from './components/Taskcomponent';
import Thirdcomponent from './components/Thirdcomponent';

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
        <Thirdcomponent/>
        <Forthcomponent/>
        <Fifthcomponent/>
      
      </header>
    </div>
  );
}

export default App;
