// map 基本運用2

const students = ["Annie", "Billy", "Cathy"]

function Welcome(props) {
  return (
    <h1>
      Hello 我是 {props.item}
    </h1>
  ); 
}
function App(){
  return(
  <div>
      {
      students.map((item,i)=>{
        return <Welcome key={i} item={item}/>
      })
      }
  </div> 
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);