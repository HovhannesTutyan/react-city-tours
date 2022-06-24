import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Frontend from './pages/Frontend';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/backend' element={<HomePage />} />
                <Route path='/frontend' element={<Frontend />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
