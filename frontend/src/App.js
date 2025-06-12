import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './screens/Home';
import ProductPage from "./screens/ProductPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Container className="main py-3">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/product/:id' element={<ProductPage />}></Route>

        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
