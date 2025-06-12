import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './screens/Home';

function App() {
  return (
    <><Header /><Container className="main py-3"><Home /></Container><Footer /></>
  );
}

export default App;
