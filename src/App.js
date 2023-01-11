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
          <Route path='/skills' component={Skills} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

