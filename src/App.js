import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import './App.css';

function App() {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

  // const counterState = useSelector((state) => {
  //   if(state.value < 1){
  //      return "no mumber"
  //   }
  //   return(
  //     state.value
  //   )
  // });

  // const toggleState = useSelector((state) => state.showCounter)

  const counterOperation =useCallback((type , payload) => {
    // const action = ({type: 'increase' , payload: 4}); 
    //  dispatch(action)
    dispatch({ type , payload});
    // dispatch({ type: 'increase', payload: 4});
  } , [dispatch]);

  useEffect(()=>counterOperation('increase', 10), [counterOperation]);

  const handlerCounterValue = (value) => {
    if(value < 1){
           return "no mumber";
      }
      return(
        value
        )
  };




  // const decrease =() => {
    // const action = ({type: 'decrease' , payload: 2}); 
    // dispatch(action)

    // dispatch({ type: 'decrease', payload: 2});
  // }
// 
  const toggleCounter = () => {
    // const action = ({type: 'toggle', payload:!toggleState}); 
    // dispatch(action)
    dispatch({type: 'toggleCounter'})
  }

  return (
    <div className="App">
       <h1>Hello Redux Basics</h1>
       
        {globalState.showCounter === true ? <>
        {/* {toggleState === true ? <> */}
          {/* <div className="Counter">Counter: {counterState}</div> */}
          <div className="Counter"> Counter: {handlerCounterValue(globalState.value)} </div>
          {/* <div className="Counter">Counter: {globalState.value < 1 ? "no numbers" : globalState.value}</div> */}

          <div>
            <button className="btn" onClick={()=>counterOperation("decrease" , 5)}>decrease -</button>
            {/* <button className="btn" onClick={decrease}>decrease -</button> */}
            <button className="btn" onClick={()=>counterOperation('increase', 5)}>increase +</button>
            {/* <button className="btn" onClick={increase}>increase +</button> */}
          </div>

        </> : "" }
               
       {/* <div className="Counter">Counter: {counterState}</div>

       <div>
        <button className="btn" onClick={decrease}>decrease -</button>
        <button className="btn" onClick={increase}>increase +</button>
       </div>
        */}

       <div>
        <button className="btn" onClick={toggleCounter}>Hide/Show Counter Number</button>
       </div> 
 


    </div>
  );
}

export default App;
