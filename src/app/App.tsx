import SvgIcon from '@mui/material/SvgIcon';
import {
  BrowserRouter,
  Link,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate
} from 'react-router-dom';
import './App.scss';
import GithubLogo from './assets/media/svg/github-logo.svg';
import LinkedInLogo from './assets/media/svg/linkedin-logo.svg';
import { IconButton, Tooltip } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { StrictMode } from 'react';
import About from './components/about/About';
import ProjectList from './components/projects/ProjectList';
import PageNotFound from './components/shared/page-not-found/PageNotFound';
import { useEffect } from 'react';
import Home from './components/home/Home';

const navBar = (
  <nav>
    <div className="nav-left">
      <div className="nav-left">
        <IconButton className="nav-more">
          <MoreVertIcon className="nav-more-icon"></MoreVertIcon>
        </IconButton>
        <Link className="nav-link" to="/home">
          Home
        </Link>
        <Link className="nav-link" to="/projects">
          Projects
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </div>
    </div>
    <div className="icons">
      <Tooltip title="LinkedIn">
        <a href="https://www.linkedin.com/in/matt-young-691b48189/" target="tab">
          <SvgIcon className="linkedin-icon">{<LinkedInLogo />}</SvgIcon>
        </a>
      </Tooltip>
      <Tooltip title="GitHub">
        <a href="https://github.com/mattgoespro" target="tab">
          <SvgIcon className="github-icon">{<GithubLogo />}</SvgIcon>
        </a>
      </Tooltip>
    </div>
  </nav>
);

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home');
    }
  }, [location.pathname]);

  return (
    <div className="app">
      {navBar}
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="home" element={<Home />} />
            <Route path="projects" element={<ProjectList />}></Route>
            <Route path="about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}