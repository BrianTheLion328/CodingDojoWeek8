import { Router } from '@reach/Router'
import './App.css';
import Form from './Components/Form'
import Planet from './Components/Planet'
import People from './Components/People'
import Home from './Components/Home'

function App() {
  return (
    <div className="App">
      <Form />
      <Router>
        <Home path="/" />
        <Planet path="/planets" />
        <People path="/people" />
      </Router>

    </div>
  );
}

export default App;
