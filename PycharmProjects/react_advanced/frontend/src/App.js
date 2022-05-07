import React from 'react'
import UseStateObject from './useState/useState-object'
import UseStateBasics from './useState/useState_basics'
import UseStateArray from  './useState/useState-array'
import UseStateCounter from './useState/useState-counter'
import UseEffectBasics from './useEffect/useEffect-basics'
import UseEffectCleanup from './useEffect/useEffect-cleanup'
import UseEffectSecondArgument from './useEffect/useEffect-fetch-data'
import MultipleReturns from './conditional-rendering/multipleReturns'
import ControlledInputs from './conditional-rendering/multipleInputs'
import Index from './useReducer/index'



function App() {
  return (
    <div className="container">
      <h2> advanced react </h2>
      < Index />
    </div>
  );
}

export default App;
