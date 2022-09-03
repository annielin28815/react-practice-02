// map 搭配 object 之基本運用

const numbers = [
  {
    num:1,
    name:"Annie"
  },
  {
    num:2,
    name:"Billy"
  },
  {
    num:3,
    name:"Cathy"
  }
];
const numberList = numbers.map((item,i) =>
  <li key={i}>{item.name}：{item.num}</li>
);

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<ul>{numberList}</ul>);
