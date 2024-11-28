import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HomePage from './pages/HomePage';
import AddBookPage from './pages/AddBookPage';
import EditBookPage from './pages/EditBookPage';
import { Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Navbar bg="secondary" variant="dark" className="mb-4">
          <Container>
            <Navbar.Brand href="/"> <img src="https://www.pinclipart.com/picdir/big/163-1639962_book-png-transparent-free-images-school-books-transparent.png " alt="" style={{width:100}}/> &ensp;&ensp; The Book Store </Navbar.Brand>
          </Container>
        </Navbar>
        
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddBookPage />} />
          <Route path="/edit/:id" element={<EditBookPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;