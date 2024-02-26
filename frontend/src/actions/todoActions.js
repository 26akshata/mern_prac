export const createAction = (data) => {
    console.log(data)
    return fetch(`http://localhost:8000/api/create-todo`,{
        method :'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
        body:JSON.stringify(data)
    }).then(response =>{
        return response.json()
    }).catch(err=>{
        return err.json()
    })
}

export const getTodoAction = (data) => {
    console.log(data)
    return fetch(`http://localhost:8000/api/read-todo`,{
        method :'GET',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
    }).then(response =>{
        return response.json()
    }).catch(err=>{
        return err.json()
    })
}

export const getTodoByTitle = (data) => {
    console.log(data)
    return fetch(`http://localhost:8000/api/get-todo-by-title/${data}`,{
        method : 'GET',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
    }).then(response =>{
        return response.json()
    }).catch(err=>{
        return err.json()
    })
}

export const updateAction = (data) => {
    console.log(data)
    return fetch(`http://localhost:8000/api/update-read-todo/${data.id}`,{
        method :'PUT',
        headers: {
            Accept: 'application/json',
            'Content-type' : 'application/json'
        },
        body:JSON.stringify(data)
    }).then(response =>{
        return response.json()
    }).catch(err=>{
        return err.json()
    })
}