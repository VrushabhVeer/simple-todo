import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>REACT TO-DO</h2>
      </header>
      <div className='main'>
        <Todo />
      </div>
    </div>
  );
}

export default App;
