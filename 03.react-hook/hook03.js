// 實作簡易版to do list

const { useState } = React;

const root = ReactDOM.createRoot(document.getElementById('root'));

function App(){
  const [todo,setTodo]= useState([1]);
  const [value,setValue] = useState("");
  function addTodo(){
    return setTodo([...todo,value])
  }

  return (
    <>
      <input value={value} type="text" onChange={(e)=> setValue(e.target.value)} />
      <input 
        type="button" 
        value="送出" 
        onClick={()=>{ addTodo()}} />
      <ul>
        {
          todo.map((item,i)=>{
            return <li>{item}</li>
          })
        }
      </ul>
    </>
  )
}

root.render(<App />);