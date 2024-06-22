import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../reducres/CounterSlice';



function Counter() {

    const [val,Setval]=useState(0);
    const count=useSelector((state)=>state.counter.count)
    const dispatch=useDispatch()

    const handleValChange=(e)=>{
        Setval(e.target.value)
    }

    const handleValIncrement=()=>{
        if(val){
            dispatch(incrementByAmount(parseInt(val)))
        }
        else{
            dispatch(increment())
        }
    }
    return (
        <>
            <div style={{ padding: "5px" }}>Counter: {count}</div>
            <button onClick={()=>dispatch(increment())} style={{ padding: "10px", backgroundColor: "#f0f8ee", borderRadius: "5px", margin: "5px" }}>Increment</button>
            <button onClick={()=>dispatch(decrement())} style={{ padding: "10px", backgroundColor: "#f0f8ee", borderRadius: "5px", margin: "5px" }}>Decrment</button>
            <input type='number'></input>
        </>
    )
}
export default Counter
