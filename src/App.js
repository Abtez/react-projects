import './index.css';
import Main from './components/Main';
import { Routes, Route} from 'react-router-dom';
import ProjectList from './components/ProjectList';
import Project1 from './projects/project1/Project1';
import Project2 from './projects/project2/Project2';

function App() {
  return (
    <div className="App">
        <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/projects' element={<ProjectList />} />
        <Route exact path='/projects/info-site' element={<Project1 />} />
        <Route exact path='/projects/business-cards' element={<Project2 />} />
        </Routes>        
    </div>
  );
}

export default App;
