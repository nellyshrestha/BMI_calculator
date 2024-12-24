import { useState } from "react";
import "./style.css";
function CountDown(){
    
// const[day,setday]=useState();
//     const date= new Date();
//     const year= date.getFullYear();
//     const month= date.toLocaleString("en-US",{month:"long"});
//     const dayDate= date.getDate();
// //getting the data from locall storage
//    const getDays= JSON.parse(localStorage.getItem("day"));
//    console.log(getDays);

//     function submit(){
//         const myValue=document.getElementById("rem-days").value;
//         //storing data in local storage
//         localStorage.setItem("day",JSON.stringify(myValue));
//         setday(myValue);
//     }

    const[examYear,setExamYear]=useState(0);
    const[examMonth,setExamMonth]=useState(0);
    const[examDay,setExamDay]=useState(0);
    const [day,setDay]=useState(0);

    const result= JSON.parse(localStorage.getItem('myDate'));

function submit(){
   let myYear= document.getElementById('input-year').value;
   let myMonth=document.getElementById('input-month').value;
   let myDay=document.getElementById('input-day').value;

    const myFullDate={
        year:myYear,
        month:myMonth,
        day:myDay
    }

    localStorage.setItem("myDate",JSON.stringify(myFullDate));
    setDay(examDay);
    setExamYear(result.year);
    setExamMonth(result.month);
    setExamDay(result.day);
}
//logic for remaning days
function calculateRemaningDays(){
    const dataBaseDay = parseInt(result.day);
    
    
    const date = new Date();
    const currentDate= date.getDate();

    return `${ (dataBaseDay< currentDate)
         ? dataBaseDay + currentDate : dataBaseDay-currentDate}`;


}
function calculateRemaningMonth(){
    const dataBaseMonth= parseInt(result.month);
    const date = new Date();
    const currentMonth= date.getMonth()+1;
    return ` ${dataBaseMonth- currentMonth}`
}

    return(
        <>
       
        <div className="main-container">
            {/* calendar container starts */}
            <h1 >Exam Count Down</h1>
            <div className="calendar-container">
                <h1>{result.year}/{result.month}/{result.day}
                </h1>
                <h2 className="days" > {calculateRemaningDays()} <p className="month-text">days</p> </h2>

                <h3 className="remaning"> {calculateRemaningMonth()} month remaining</h3>
            </div>
            {/* input starts */}
            <div className="input">   
                <label className="lable" htmlFor="rem-days">Enter Years: </label>
                <input  id="input-year"  type="number" placeholder="Enter exam Year" />
                <label className="lable" htmlFor="rem-days">Enter Months: </label>
                <input  id="input-month" type="number" placeholder="Enter exam Month" />
                <label className="lable" htmlFor="rem-days">Enter days: </label>
                <input  id="input-day" type="number" placeholder="Enter exam days" />
                <button className="btn-Submit" onClick={submit}> Submit </button>
            </div>
        </div>
        </>
    )
}
export default CountDown;