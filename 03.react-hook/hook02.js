// 實作表單輸入值 即時更新並渲染致畫面上

const { useState } = React;

const root = ReactDOM.createRoot(document.getElementById('root'));

function App(){
  
  const [value,setValue] = useState("Hello");

  return (
    <div>
      <input value={value} onChange={(e)=>setValue(e.target.value)} type="text" />
      <p>{value}</p>
    </div>
  )
}

root.render(<App />);