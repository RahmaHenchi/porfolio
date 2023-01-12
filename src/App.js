import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Contact from './Pages/Contact';
import Home from './Pages/Home'
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Route path='/' component={Home} exact />
          <Route path='/Skills' component={Skills} />
          <Route path='/Projects' component={Projects} />
          <Route path='/Contact' component={Contact} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

