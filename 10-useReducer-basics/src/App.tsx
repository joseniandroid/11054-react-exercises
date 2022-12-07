import './App.css';

import { BankReducerDemo, TriStateReducerDemo } from './components';
import { NavLink, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <h2>useReducer Basics</h2>

      <NavLink to='/bank'>Bank Reducer Demo</NavLink>
      <br />
      <NavLink to='/tristate'>TriState Reducer Demo</NavLink>

      <Routes>
        <Route path='/bank' element={<BankReducerDemo />} />
        <Route path='/tristate' element={<TriStateReducerDemo />} />
      </Routes>
    </>
  );
}

export default App;
