import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Contact from './pages/Contact';
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import SkillDetails from './pages/SkillDetails';
import Skills from './pages/Skills';

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
