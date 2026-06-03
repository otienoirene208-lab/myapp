import { useState } from "react"

const Fifthcomponent = ()=> {

    // Bellow we declare our hooks
    const [number,setNumber]=useState(10)
    const[age,setage] =useState(14)
    const[name,setname]=useState("juma")
    const[color,setcolor] =useState("purple")
    const[food,setfood]=useState("ugali")
    return(
        <div className="fifth">
            <h1>Welcome to the hooks component</h1>
            <p>In the bellow code , we shall have a paragram with a variable called number .Bellow the paragram , we shall have a button such  that on click of the button the content of the variable number changes to anew one .</p>

            <p>My number is: {number}</p>
            <button onClick={()=> setNumber(25)}>click</button>

            <p>My age is : {age}</p>
            <button on onClick={()=> setage(15)}>click to change age</button>

            <p>My name is :{name}</p>
            <button onClick={()=> setname("sarah")}>click to change the name</button>

            <p>i love color:{color}</p>
            <button onClick={()=>setcolor("red")}>click to change the olorc </button>

            <p>I want to eat:{food} </p>
            <button onClick={()=> setfood("cakes")}>click to change the food</button>
        </div>
    )
}

export default Fifthcomponent