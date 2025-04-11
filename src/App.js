import logo from './logo.svg';
import './App.css';
import {Home,Slice} from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sample from './Sample';
import Hooks from './Hooks';
import Hooks2 from './Hooks2';

function App() {
  return (
    <div className="App">
      <Hooks2/>
      <Hooks/>
      <Sample/>
      <Home/>
      <Slice/>
      <Header/>
      <Footer/>
     

      
      <h1>Bhargav Katta</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
