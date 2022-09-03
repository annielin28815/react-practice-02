// 主要是練習props概念，按鈕功能尚未實作

function Welcome(props) {
  let sayHelloTimes = 1;
  return (
    <div>
      <h1>
      Hello 我是 {props.name}，我今年 {props.age} 歲，我打招呼 {sayHelloTimes} 次
    
    </h1>
     <input type="button" value="再次打招呼" />
    </div>
    
  
  ); 
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="Annie" age="18"></Welcome>;
root.render(element);