import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decNum, incNum } from './actions';
import './index.css'

function App() {
  const mystate = useSelector((state) => state.change);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Increment/Decrement the number by 2, using Redux</h2>
      <div className="app">
        <h1>{mystate}</h1>
        <div className="btns">
          <button onClick={() => dispatch(incNum())}>+</button>
          <button onClick={() => dispatch(decNum())}>-</button>
        </div>
      </div>
    </>
  );
}

export default App;
