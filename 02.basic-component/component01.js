// 練習用component寫法渲染進頁面裡

function Welcome() {
  return <h1>Hello，妳好嗎</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome></Welcome>;
root.render(element);