const root = ReactDOM.createRoot(document.querySelector('#root'));

function callDogName(){
  return "Bob";
}
const  content =  <h1>Hello，{callDogName()} </h1>



root.render(content);
