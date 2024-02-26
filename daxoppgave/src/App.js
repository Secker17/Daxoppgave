import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}


export default App;