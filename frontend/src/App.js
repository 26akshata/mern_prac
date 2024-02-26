import {useState} from 'react'
import CreateTodo from './pages/CreateTodo'
import DisplayTodo from './pages/DisplayTodos'
import GetTitleTodo from './pages/GetTitleTodos'
import {Routes, Route} from 'react-router-dom'
import UpdateTodo from './pages/UpdateTodo'
 

// useState is a react hook

const App = () => {
  return (
    <Routes>
      <Route index element={ <DisplayTodo/>}/>
      <Route path='get-todos' element={<GetTitleTodo/>}/>
      <Route path='create-todos' element={<CreateTodo/>}/>
      <Route path='update-todos' element={<UpdateTodo/>}/>
    </Routes>    
    
  )
}

export default App













// import { useState } from "react"

// const App = ()=>{

//   const  [a, seta] = useState(0)
//   const [b, setb] = useState(0)

//   const increase = () => {

//     if (a%2==0){
//       seta(a+1)
//       setb(b+1)
//     }else{
//     seta(a+1)
    
//   }
//   }
//   const decrement =() => {
//     if(a<=0){
//       return null
      
//     }else{
//       seta(a-1
//         )
//     }
//   }
//   const reset =() => {
//     seta(0)
//   }
//   return(
//     <div>
//       <h1>welcome </h1>
//       <h2>{a}</h2>
//       <h2>{b}</h2>
//       <button onClick={() => increase()}>
//         increment
//       </button>
//       <button onClick={() => decrement()}>
//         decrement
//       </button>
//       <button on onClick={() => reset()}>
//         reset
//       </button>
//     </div>
//   )
// }



// export default App