// map 基本運用

const numbers = [1, 2, 3, 4, 5];
const numberList = numbers.map((numbers,i) =>
  <li key={i}>{numbers}</li>
);

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<ul>{numberList}</ul>);
