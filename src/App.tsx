import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/rootReducer';
import { incrementBy } from './store/observer';

function App() {

  const dispatch = useDispatch()
  const { org } = useSelector((state: RootState) => state.issuesDisplay)

  useEffect(()=>{
    // dispatch(displayRepo({ org:'1', repo:'2' }))
    dispatch(incrementBy(1))
  },[dispatch, org])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
