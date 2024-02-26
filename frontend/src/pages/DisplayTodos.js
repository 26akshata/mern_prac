import { useEffect, useState } from "react";
import { getTodoAction } from "../actions/todoActions";
import {Link} from "react-router-dom";

const DisplayTodo =() => {
    const[allTodos, setAllTodos] = useState([])

    useEffect(() =>{
        getTodoAction().then(res => {
            setAllTodos(res.response)
        }).catch(err =>{
            console.log(err)
        })
    }, [])
     return (
        <div>

            {allTodos.length === 0 ? null : <div>{allTodos?.map((t,i) =>(
                <div key={i}>
                    <div>
                       title: {t.title}
                    </div>
                    <div>
                        descripyion:
                        {t.desc}
                    </div>
                    <div>
                        
                        <Link to="update-todos"  state ={t}><button>Update </button></Link>
                    </div>

                </div>
            ))}</div>}
            <div>
                <Link to="/get-todos">todos get hotil</Link>
                <Link to="create-todos">Create todo var jaatoi</Link>
            </div>
        </div>
     )
}

export default DisplayTodo