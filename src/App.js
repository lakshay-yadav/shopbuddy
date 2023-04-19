import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Home/> */}
      <Signup/>
    </div>
  );
}
 
export default App;
