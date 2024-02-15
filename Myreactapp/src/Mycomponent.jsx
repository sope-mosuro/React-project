import { useState } from "react"
function Mycomponent(){
    const [name, setName] = useState("guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setEmployment] = useState(false);

    const updateName = ()=>{
        setName("Spongebob");
    }
    const updateAge = ()=>{
        setAge(12);
    }
    const updateEmployment = ()=>{
        setEmployment(!isEmployed)
    }

    return(
        <div>
            <p>Name:{name}</p>
            <button onClick={updateName}>set name</button>

            <p>age:{age}</p>
            <button onClick={updateAge}>set age</button>

            <p>Employment Status:{isEmployed ? "yes" : "no"}</p>
            <button onClick={updateEmployment}>set employment</button>
        </div>
    )
}
export default Mycomponent