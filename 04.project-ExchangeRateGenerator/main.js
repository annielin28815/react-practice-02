const { useState } = React;

const create = ReactDOM.createRoot(document.getElementById('create'));

function App(){
  const [currencyList,setCurrencyList]= useState([]);// 可兌換(已新增)幣種清單
  const [currencyName, setCurrencyName] = useState("");// 幣種名稱
  const [exchangeRate, setCurrencyRate] = useState("");// 匯率
  const [cash, setCash] = useState(5000);// 目前錢包餘額
  const [taiwanDollars, setTaiwanDollars] = useState(100);// 要換的金額
  const [convertPice, setConvertPice] = useState("");// 可兌換之外幣金額
  const [isCalculate, setIsCalculate] = useState(true);// 判斷是否尚未計算過(防呆)
  const [exchangeList,setExchangeList]= useState([]);// 兌換記錄清單


  function addCurrency(){
    return setCurrencyList([...currencyList, {name: currencyName, rate: exchangeRate, convertPice: ''}]), setCurrencyName(''), setCurrencyRate('')
  }

  function calculateCurrency(){
    let newTemp = [];
    currencyList.map((item) => {
      newTemp.push({
        ...item,
        originPrice: taiwanDollars,
        convertPice: item.rate * taiwanDollars
      })
    })

    return setCurrencyList(newTemp), setIsCalculate(false)
  }

  function exchangeCurrency(taiwanPrice, foreignPrice, foreignName){
    let listItem = {
      originPrice: taiwanPrice,
      convertPice: foreignPrice,
      name: foreignName,
    };
    let temp = exchangeList;
    temp.push(listItem);

    if(temp.length > 0) {
      let balance = cash - taiwanPrice;

      setCash(balance)
    }

    return setExchangeList(temp)
  }

  return (
    <div>
      <h1>匯率計算器</h1>

      <h2>Step1: 新增幣種</h2>
      <input type="text" value={currencyName} placeholder="幣種名稱" onChange={(e)=> setCurrencyName(e.target.value)}/>
      <input type="text" value={exchangeRate} placeholder="匯率" onChange={(e)=> setCurrencyRate(e.target.value)} />
      <input type="button" value="新增幣種" onClick={()=>{ addCurrency()}} />
      
      <hr/>

      <h2>Step2: 請輸入您要換的金額</h2>
      <p>您目前錢包還有 { cash } 元台幣</p>
      <input type="text" placeholder="台幣" value={taiwanDollars} onChange={(e)=> setTaiwanDollars(e.target.value)} />
      <input type="button" value="計算" onClick={()=>{ calculateCurrency()}} />

      <div>您目前可以換算之幣值</div>
      <ul>
        {
          currencyList.map((item, index)=>{
            return (
              <li key={index}>
                {item.name} : {item.rate} 
                <input type="button" value="兌換" disabled={isCalculate} onClick={()=>{ exchangeCurrency(item.originPrice, item.convertPice, item.name)}} />
                {item.convertPice}
              </li>
            )
          })
        }
      </ul>

      <hr/>

      <h2>您的兌換記錄</h2>
      <ul>
        {exchangeList.length > 0 ?
          exchangeList.map((item, index)=>{
            return (
              <li key={index}>
                您用{item.originPrice}元台幣，兌換了{item.convertPice}元{item.name}。
              </li>
            )
          })
          :
          <p>目前尚無兌換記錄</p>
        }
      </ul>
      
    </div>
  )
}

create.render(<App />);
