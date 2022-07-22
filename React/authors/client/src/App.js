import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import AllAuthors from './components/AllAuthors';
import NewAuthor from './components/NewAuthor';
import EditAuthor from './components/EditAuthor';

function App() {

  let [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="App container">
      <h1>Favorite authors</h1>

      <Routes>
        <Route exact path="/" element = {
          <>
            <AllAuthors formSubmitted={formSubmitted}></AllAuthors>
          </>
        }>

        </Route>

        <Route exact path ="/new" element={<NewAuthor/>}></Route>
        <Route exact path ="/edit/:id" element={<EditAuthor/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
