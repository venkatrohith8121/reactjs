import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';

function App() {
  return (

    <div>
      <Navbar />
      <Login/>
    </div>
  );
}

export default App;
