import { useState } from "react"

const Contactus =()=> {
    // you can reach us on 
    const[email,setemail]=useState('vibati@gmail')
    const[phone,setphone]=useState(1023453410)



    return(
        <div className="contactus">
            <h1>Welcome to vibati's cafe</h1>
            <p>This is a newly opened shop everyone is welcomed to join us</p>
            <p>This is our mail:{email}</p>
            <p>This is our contact {phone}</p>

            
            <button onClick={()=>setemail('juma@gmail')}> this is our email</button>

            <button  onClick={()=>setphone(1114238623)}>you can reach us on this phone</button>
        </div>
    )
}
export default Contactus;