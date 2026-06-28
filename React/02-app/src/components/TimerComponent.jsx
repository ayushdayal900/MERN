import React from "react";

import { useState, useEffect } from "react";


function Timer(){

    const [time, setTime] = useState(0);

    useEffect( ()=>{
        // mounted
        console.log('component is mounted')
        const timer = setInterval(()=>setTime(time+1), 1000)
        
        // unmounting
        return function (){
            // console.log('component is unmounted')
            clearInterval(timer)
        }
    }, [time])


    return (
        <div>
            <h1>StopWatch</h1>
            <h2>Time: {time}</h2>
        </div>
    )
}


export default Timer;