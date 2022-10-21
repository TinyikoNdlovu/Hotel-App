import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Banner from './components/Banner';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <SearchPage />
    </div>
  );
}

export default App;
