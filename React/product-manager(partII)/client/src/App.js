import logo from './logo.svg';
import './App.css';
import AllProducts from './components/AllProducts';
import Form from './components/Form';
import OneProduct from './components/OneProduct';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App container">
      
      <Routes>
        <Route exact path="/" element={
          <>
            <h1>Product Manager</h1>
            <Form></Form>
            <hr></hr>
            <AllProducts></AllProducts>
          </>}>
        </Route>
        <Route exact path="/products/:id" element={<OneProduct/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
