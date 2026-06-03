const Forthcomponent =()=> {
// create four variables
let name ="Mary"
let age=15
let music ="long story"
let food ="pizza"

return(
    <div className="forth">
        {/* We are binding our variables */}
        <h1>Welcome to Forthcomponent</h1>
        <p>My nams is:{name}</p>
        <p>I am {age} old</p>
        <p>I do love music:{music}</p>
        <p>I like pizza</p>
    </div>
)

}

export default Forthcomponent

