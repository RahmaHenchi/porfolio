import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Contact from './Pages/Contact';
import Home from './Pages/Home'
import NotFound from './Pages/NotFound';
import Projects from './Pages/Projects';
import SkillDetails from './Pages/SkillDetails';
import Skills from './Pages/Skills';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className='container mt-5'>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/skills/:identifier' component={SkillDetails} />
            <Route path='/skills' component={Skills} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
