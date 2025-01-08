import {useState} from 'react';
function init(){
    console.log("init was executed")
    return Math.random()
}
export default function Counter() {
    let [count,setCount] = useState(init);
    console.log("Componenet was re rendered");
    
    function increase(){
        setCount((currCount)=>{
            return currCount +1;
        });
        setCount((currCount)=>{
            return currCount +1;
        });
       
       
    
    }
    return (
        <div>
        <h3> Count = {count}</h3>
        <button onClick={increase}>Increase</button>
        </div>
    );  
}