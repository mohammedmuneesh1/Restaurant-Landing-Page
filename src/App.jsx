import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LandingPage from './Page/LandingPage';
import PageNotFound from './components/PageNotFound';
function App() {
  return (

  <div className='App'>
<Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

