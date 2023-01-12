import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item nav-link">
              {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
              <NavLink to='/' exact>Home</NavLink>
            </li>
            <li class="nav-item nav-link">
              <NavLink to='/skills'>Skills</NavLink>
            </li>
            <li class="nav-item nav-link">
              <NavLink to='/projects' >Projects</NavLink>
            </li>
            <li class="nav-item nav-link">
              <NavLink to='/contact' >Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar