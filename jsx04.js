const root = ReactDOM.createRoot(document.querySelector('#root'));

function callDogName(){
  return "Bob";
}

const dogColor = "red";
const  content =  <h1 className={dogColor}>Hello，{callDogName()} </h1>



root.render(content);
