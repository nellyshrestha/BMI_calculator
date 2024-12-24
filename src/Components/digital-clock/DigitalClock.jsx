import { useState } from 'react';
import './digitalStyle.css'; 
import { useEffect } from 'react';

function DigitalClock(){

    const  [time,setTime]=useState(new Date());

    useEffect(()=> {

       let interval=  setInterval(()=>{
            setTime(new Date())

        },1000)

        return()=> clearInterval(interval)
    }, [])

     function showTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();

        return `${hours} : ${minutes} : ${seconds}`
     }

    return(
        <>
        
        <div className="main-container">
            <div className="clock-container">
                <div className="clock-timer"> 
                    <spam className="timer">{showTime()}</spam> 
                    
                    </div>

            </div>

        </div>
        </>
    )
}
export default DigitalClock;