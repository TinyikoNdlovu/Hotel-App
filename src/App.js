import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Banner from './components/Banner';
import SearchPage from './components/SearchPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
