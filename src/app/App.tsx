import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PageNavigator } from './PageNavigator/PageNavigator';
import { AboutPage } from './Pages/AboutPage/AboutPage';
import { HomePage } from './Pages/HomePage/HomePage';
import { ProjectList } from './Pages/ProjectPage/ProjectList/ProjectList';
import { ProjectPage } from './Pages/ProjectPage/ProjectPage';
import { ProjectView } from './Pages/ProjectPage/ProjectDetails/ProjectDetails';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageNavigator landingPage={<HomePage />} />}>
          <Route path="projects" element={<ProjectPage />}>
            <Route path="list" element={<ProjectList />}></Route>
            <Route path=":projectName" element={<ProjectView />}></Route>
          </Route>
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
