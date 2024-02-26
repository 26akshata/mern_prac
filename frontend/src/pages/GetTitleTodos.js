import { useState } from "react";
import { getTodoByTitle } from "../actions/todoActions";
import {Link} from "react-router-dom";

const GetTitleTodo = () => {
    const [formData, setFormData] = useState({
        search: '',
        title: '',
        desc: ''
    })

    const { search, title, desc } = formData

    const handleChange = o => event => {
        setFormData({ ...formData, [o]: event.target.value })

    }
    const handleButtonClick = () => {
        getTodoByTitle(search).then(response => {
            console.log(response.response)
            setFormData({ ...formData, title: response.response.title, desc: response.response.desc })
        }).catch(err =>
            console.log(err))
    }

    return (
        <div>
            <div>
                <div>
                    title:{title}
                </div>
                <div>
                    description:{desc}
                </div>
                <label>search</label>
                <input type="text" value={search} onChange={handleChange('search')} />
            </div>
            <div>
                <button onClick={handleButtonClick}>search</button>
            </div>
            <div>
                <Link to="/">Go to hevean</Link>
            </div>
        </div>
    )
}

export default GetTitleTodo;

