// 建立 App 模組，來組合 component

function Welcome(props) {
  return <h1>Hello 我是 {props.name}，我今年 {props.age} 歲~</h1>; 
  
}

function App(){
  return (
//     只能一層
    <div>
      <Welcome name="Annie" age="18"></Welcome>
      <Welcome name="Billy" age="18"></Welcome>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);