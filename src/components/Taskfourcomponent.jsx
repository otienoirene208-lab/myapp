import { useState } from "react";

const Taskfourcomponent = () =>{
    // display the score
    const [score,setScore]=useState(0)

    

    return(
        <div className="task">
            <h1>score point</h1>
            <p>This is number:{score}</p>
            <button onClick={()=> setScore(score + 1)}>increase the number by 1</button>

         
            <button onClick={()=>setScore (0)}>reset game back to 0</button>
        </div>
    )
}
export default Taskfourcomponent;