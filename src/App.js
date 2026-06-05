import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import About from './components/About';
import Fifthcomponent from './components/Fifthcomponent';
import Firstcomponent from './components/Firstcomponent';
import Forthcomponent from './components/Forthcomponent';
import Secondcomponent from './components/Secondcomponent';
import Taskcomponent from './components/Taskcomponent';
import Taskfourcomponent from './components/Taskfourcomponent';
import Thirdcomponent from './components/Thirdcomponent';
import Contactus from './components/Contactus';
import Notfound from './components/Notfound';

function App() {
  return (
    <Router>
       <div className="App">
      <header className="App-header">
       <h1>Welcome to learning Reactjs</h1>
       {/* Bellow are our links connecting to different componets */}
       <nav>
        <Link to='/' className='links' >first</Link>
        <Link to='/second' className='links'>second</Link>
        <Link to='/third' className='links'> third</Link>
        <Link to='/forth' className='links'>forth</Link>
        <Link to='/fifth' className='links'> fifth</Link>
        <Link to='/task' className='links'>task</Link>
        <Link to='/taskfour' className='links'>taskfour</Link>
        <Link to='/About' className='links'>about</Link>
        <Link to='/contactus' className='links'>contactus</Link>
       </nav>

        {/* below we render /show/display or components */}
        <Routes>
          <Route path ='/' element={<Firstcomponent/>} />
          <Route path ='/second'element ={<Secondcomponent/>}/>
          <Route path ='/third' element ={<Thirdcomponent/>}/>
          <Route path ='/forth' element ={<Forthcomponent/>}/>
          <Route path='fifth' element ={<Fifthcomponent/>}/>
          <Route path='task' element ={<Taskcomponent/>}/>
          <Route path='taskfour' element={<Taskfourcomponent/>}/>
          <Route path='about' element ={<About/>}/>
          <Route path='contactus' element={<Contactus/>}/>
          <Route path='*' element ={<Notfound/>}/>
        </Routes>
      
      </header>
    </div>
    </Router>
  );
}

export default App;
