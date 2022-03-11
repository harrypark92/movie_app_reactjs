import {useState, useEffect} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [doller, setDoller] = useState();
  const [value, setValue] = useState();
  const selectedCoin = value.split(',');

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
    .then((response)=>response.json())
    .then((x)=>{setCoins(x);setLoading(false);});
  },[])

  const onChange = (event) =>{
    setDoller(event.target.value);
    console.log(doller)
  }

  const onSubmit = (event) =>{
    event.preventDefault();
  }

  const onSelect = (event) =>{
    setValue(event.target.value);
  }

  return (
    <div>
      <h1>The Coins! ({loading ? "" : coins.length})</h1>
      {loading? <strong>Loading...</strong>:null}
      <form onSubmit={onSubmit}>
        <input
          onChange = {onChange} 
          value={doller}
          type={'number'}
          placeholder='how much doller do you have?'>
        </input>
        <select
         onChange={onSelect}
         value={value}
         >
          {coins.map((item)=>
          <option value={[item.symbol,item.quotes.USD.price]}>
          {item.name} ({item.symbol}) : ${item.quotes.USD.price}
          </option>)}
        </select>
        <hr/>
      </form>
      {/* {Math.round(doller/parseInt(selectedCoin[1])*100)/100} */}
      <h3>You can get {Math.round(doller/parseFloat(selectedCoin[1])*100)/100} {selectedCoin[0]}</h3>
    </div>
  );
}

export default App;