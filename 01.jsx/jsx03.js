const root = ReactDOM.createRoot(document.querySelector('#root'));

function callPeopleName(){
  return "Annie";
}
const  content =  <h1>Hello，{callPeopleName()} </h1>



root.render(content);
