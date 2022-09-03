// 實作按鈕點擊 即時更新資料 並渲染致畫面上

const { useState } = React;
function Welcome(props) {
  const [sayHelloTimes,setSayHelloTimes] = useState(1)
  return (
    <div>
      <h1>
      Hello 我是 {props.name}，我今年 {props.age} 歲，我打招呼 {sayHelloTimes} 次
    
    </h1>
     <input type="button" value="再次打招呼" onClick={()=> {
          setSayHelloTimes(sayHelloTimes+1)
        }} />
      <input type="button" value="收回招呼" onClick={()=> {
          setSayHelloTimes(sayHelloTimes-1)
        }} />
    </div>
    
  
  ); 
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="Annie" age="18"></Welcome>;
root.render(element);