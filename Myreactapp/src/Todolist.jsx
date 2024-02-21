import { useState } from "react"
function Todolist(){
    const [tasks,setTasks] = useState(["fight","keck","score"])
    const [newtasks,setNewTasks] = useState("")

    function handleInputChange(event){
       setNewTasks(event.target.value)
    }
    function AddTasks(){
        if(newtasks.trim() !== ""){
            setTasks(t=>[...t,newtasks]);
            setNewTasks("");
        }
        

    }
    function RemoveTasks(index){
     const UpdatedTasks = tasks.filter((_,i)=>i !== index);
     setNewTasks(UpdatedTasks);
    }
    function moveTasksUp(index){
        if(index >0){
            const UpdatedTasks = [...tasks]
            [UpdatedTasks[index], UpdatedTasks[index - 1]]=
            [UpdatedTasks[index-1], UpdatedTasks[index]]
            setTasks(UpdatedTasks);

        }

        

    }
    function moveTasksDown(index){
        if(index <tasks.length){
            const UpdatedTasks = [...tasks]
            [UpdatedTasks[index], UpdatedTasks[index + 1]]=
            [UpdatedTasks[index+1], UpdatedTasks[index]]
            setTasks(UpdatedTasks);

        }
    }

return(<>
   <div className="to-do-list">
    <h1>TO-DO LIST</h1>
    <div>
        <input type="text" placeholder="enter a task" value={newtasks} onChange={handleInputChange}></input>
        <button className="add-button" onClick={AddTasks}>add</button>
    </div>
    <ol>
        
     {tasks.map((task,index)=>
      <li key={index}><span className="text">{task}</span>
      <button className="delete-button" onClick={()=>RemoveTasks(index)}>delete</button> 
      <button className="move-button" onClick={()=>moveTasksUp(index)}>UP!</button> 
      <button className="move-button" onClick={()=>moveTasksDown(index)}>down</button> </li>
    )}
        
    
    </ol>
    </div></>)
}
export default Todolist