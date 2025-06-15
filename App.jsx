import { useState , useEffect} from 'react'
/*function useTodos(n){
  const [todos, setTodos ] = useState([])
  const [loading , setLoading] = useState(true)
    
  

  useEffect(() => {

    fetch("http://localhost:3000/todo")
      .then(response => response.json())
      .then(data => {
        setTodos(data.todos)
        setLoading(false)
      })

    const value =setInterval(()=>{
    fetch("http://localhost:3000/todo")
      .then(response => response.json())
      .then(data => {
        setTodos(data.todos)
        setLoading(false)
       })
      }, n*1000)
      
      return () =>{
        clearInterval(value)

      }
    },[n])
  return {todos,loading} ;
}*/

// function useIsOnline(){
//   const[Isonline, setIsonline] = useState(window.navigator.onLine)

//   if(Isonline == true){
//     return(
//       <div style={{display:"flex" , justifyContent: "center"}}>
//         You Are ONLINE
//         </div>
//     )
//   }
//   return(
//     <div style={{display:"flex" , justifyContent: "center"}}>
//         You Are Offline
//         </div>
//     )
  
  // window.navigator.onLine
  // window.addEventListener
// }

// function useIsOnline(){
//   const [Online, setOnline] = useState(window.navigator.onLine)


//   useEffect(() =>{
//     window.addEventListener('online', () => {
//       setOnline(true)
//     })
//     window.addEventListener('offline', () => {
//       setOnline(false)
//     })


//   })

//   return (
//     Online, () =>{
//     window.removeEventListener()
//     }
  
// )

//   }

// function useInterval(fn, timeout){
//   useEffect(() =>{
//     const clock = setInterval(() =>{
//       fn()
//     },timeout)
//     return () => clearInterval(clock)
//   }) 

// }

function useDebounce(inputvalue, time){
  const [debouncedvalue, setdebouncedvalue] = useState(inputvalue)


  useEffect(() => {
    const clock = setTimeout(() =>{
      setdebouncedvalue(inputvalue)    
      
    }, time)
    return () => clearTimeout(clock)

    
  },[inputvalue])

  return debouncedvalue
}

function App() {
  
  //  const {todos, loading } = useTodos(5)
  // return (
  //   <div>
  //     {loading ? <div>loading....</div> : todos.map(todo => <Wrapper todo={todo}/>)}
  //   </div>
  // )

  // const isOnline = useIsOnline()
  
  // return(
  //   <div style={{ display: "flex", justifyContent: "center" }}>
  //     {isOnline ? "You are online" : "You are offline"}
  //   </div>
  // )

  // const [Count , setCount] = useState(0);

  // useInterval(() =>{
  //   setCount(c => c+ 1)
  // }, 1000)

  // return(
  //   <div>
  //     {Count}
  //   </div>
  // )

  const [inputvalue, setinputvalue] = useState('')
  const debouncedvalue = useDebounce(inputvalue, 500)
  
  return(
    <div>
      <input 
        type='text'
        value={inputvalue}
        onChange={(e) => setinputvalue(e.target.value)}
        placeholder="type here"/>
        <p>the string is {debouncedvalue}</p>
    </div>
  )
}


// function Wrapper({todo}){
//   return(
//     <div>
//       <h2>{todo.title}</h2>
//       <p>{todo.description}</p>
//     </div>
//   )
// }

export default App
