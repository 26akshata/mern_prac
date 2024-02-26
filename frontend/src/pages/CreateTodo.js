import { useState } from "react";
import { createAction } from "../actions/todoActions";
import {Link} from "react-router-dom";

const CreateTodo = () => {
    const [formData, setFormData] = useState({
        title: '',
        desc: ''
    })

    const { title, desc } = formData

    const handleChange = o => event => {
        setFormData({ ...formData, [o]: event.target.value })
    }
    const handleButtonClick = () => {
        createAction({title, desc}).then(response =>
            console.log(response)).catch(err=>
                console.log(err))
    }
    return (
        <div>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={handleChange('title')}></input>
            </div>
            <div>
                <label>Description</label>
                <input type="text" value={desc} onChange={handleChange('desc')}></input>
            </div>
            <div>
                <button onClick={handleButtonClick}>Submit</button>
            </div>
            <div>
                title:{title}
            </div>
            <div>
                description:{desc}
            </div>
            <div>
                <Link to="/">Display page var jaail</Link>
            </div>

        </div>
    )
}
export default CreateTodo