import { useState } from "react";
import"./style.css";

function BMICalculator(){
    const[weight,setWeight]=useState(0);
    const[height,setHeight]=useState(0);
    const[bmi,setbmi]=useState("your BMI is 00");
    const[msg,setmsg]=useState("");

    function calculateBmi(e){
        e.preventDefault();

        let bmiResult = (weight/(height*height)*703).toFixed(2);
        // console.log(bmiResult);
        if(weight === 0 && height === 0){
            alert("Enter all fields")
        }else{
            setbmi(`Your BMI is ${bmiResult}`);
            if(bmiResult < 18){
                setmsg("You are Under Weight");
        }else if(bmiResult > 18 && bmiResult <=25){
            setmsg("You are Normal Weight");
        }else{
            setmsg("You are Over Weight");
        }

}
}
    return(
    <>
         <div className="container">
            <form className="form-container">
                <h1>BMI Calculator</h1>
                <div className="input-container">
                <input onChange={(e)=> setHeight(e.target.value)} 
                type="text" placeholder="Enter your Hight in inches" />
                <input onChange={(e)=> setWeight(e.target.value)} 
                type="text" placeholder="Enter your Weight in KG" />
                <h3>{bmi}</h3>
                <h4>Your are {msg}</h4>
                <button onClick={ calculateBmi} className="btn">Calculate</button>
                </div>
            </form>
         </div>
    </>
    );
}
export default BMICalculator;