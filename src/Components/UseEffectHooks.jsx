import { useState, useEffect } from "react";

function UseEffectHokks(){
    const[count,setCount]=useState(0);

function increment(){
    setCount(count +1);
}
//useeffect with out dependenct
    useEffect(()=>{
        setTimeout(increment,1000);
    });
//useeffect with  dependenct
useEffect(()=>{
    setTimeout(increment,1000);
},[]);

    return(
        <>
        <h1>{count}</h1>
        </>
    )

}
export default UseEffectHokks;