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
import EditForm from './components/EditForm';
import {useState} from "react";

function App() {

  let [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="App container">
      
      <Routes>
        <Route exact path="/" element={
          <>
            <h1>Product Manager</h1>
            <Form formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}></Form>
            <hr></hr>
            <AllProducts formSubmitted={formSubmitted}></AllProducts>
          </>}>
        </Route>
        <Route exact path="/products/:id" element={<OneProduct/>}></Route>
        <Route exact path="/products/edit/:id" element={<EditForm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
