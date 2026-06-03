const Thirdcomponent = ()=> {


    //Bellow we declare Variable
    let name ="Irene"
    let county ="Nairobi"
    let age = 19
    let message =" programming in reactjs"



    return(
        <div className="third">
            {/* Bellow we bind our variables */}
            <h1>Welcome to the third component</h1>
            <p>The purpose of this component is to  show  users how to declare , assign and use variables in react </p>
            <p>my name is : {name}</p>
            <p>I  do live in the county :{county}</p>
            <p>I am {age} years old</p>
            <p>I do love {message} </p>
        </div>
    )
}

export default Thirdcomponent;