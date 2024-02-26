import {  useState } from "react";
import { updateAction } from "../actions/todoActions";
import {Link, useLocation, useNavigate } from "react-router-dom";

const UpdateTodo =() =>{

    const todo = useLocation().state
const navigate = useNavigate()
    const [formData, setFormData] = useState({
        title : todo.title,
        desc: todo.desc,
        id:todo._id
    })
    const {title, desc, id} = formData

    const handleChange = o =>event =>{
        setFormData({...formData, [o]: event.target.value})
    }
    const handleButtonClick =() => {
        updateAction({id,title,desc}).then(response =>{
            if(response.success) {
navigate('/')
            }
        }).catch(err =>
                console.log(err))
    }
    return (
        <div>
            {id}
            <div>
                
                <label>Title</label>
                <input type="text" value={title} onChange={handleChange('title')}></input>
            </div>
            <div>
                <label>Description</label>
                <input type="text" value={desc} onChange={handleChange('desc')}></input>
            </div>
            <div>
                <button onClick={()=>handleButtonClick()}>Submit</button>
            </div>
            <div>
                title:{title}
            </div>
            <div>
                description:{desc}
            </div>
            <div>
                <Link to="/"><button>Let us gooo</button></Link>
            </div>
            
        </div>
    )
}
export default UpdateTodo