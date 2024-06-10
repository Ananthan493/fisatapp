import logo from './logo.svg';
import './App.css';
import AddStud from './components/AddStud';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewall from './components/Viewall';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddStud/>}/>
    <Route path='/viewall' element={<Viewall/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
