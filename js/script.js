const checkAllBtn = document.querySelector('.buttons__btn-checkAll')
const btcPrice = document.querySelector('.crypto__coins--btc-price')
const ethPrice = document.querySelector('.crypto__coins--eth-price')
const ltcPrice = document.querySelector('.crypto__coins--ltc-price')
const dogePrice = document.querySelector('.crypto__coins--doge-price')

// const URL = 'https://api.coingecko.com/api/v3/exchange_rates'

// === poniżej tylko dla wybranej crypto sama cena ====
const BTC = 'bitcoin'
const USD = 'usd'
const ETH = 'ethereum'
const EXBITRON_ltcusdt = 'ltcusdt'
const EXBITRON_dogeusdt = 'dogeusdt'
const URL_BTC_USD = 'https://api.coingecko.com/api/v3/simple/price?ids='+BTC+'&vs_currencies='+USD
const URL_ETH_USD = 'https://api.coingecko.com/api/v3/simple/price?ids=' + ETH + '&vs_currencies=' + USD

const URL_EXBITRON_LTC = 'https://www.exbitron.com/api/v2/peatio/public/markets/'+EXBITRON_ltcusdt+'/order-book'
const URL_EXBITRON_DOGE= 'https://www.exbitron.com/api/v2/peatio/public/markets/'+EXBITRON_dogeusdt+'/order-book'

// === poniżej dla jednego coina (ethereum) pełna informacja =====
// const URL = 'https://api.coingecko.com/api/v3/coins/ethereum'



// =============== obsługa =================
// const getPrice = () => {
//     fetch(URL)
//     .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err))
// }

//  ============ klasycznie =================
// const getPrice = () => {
//     axios.get(URL).then(res => console.log(res.data.rates.usd.value))
//     axios.get(URL).then(res => (btcPrice.textContent = res.data.rates.usd.value + ' USD'))
// }

//========== funkcja asynchroniczna ==============
// dla  const URL = 'https://api.coingecko.com/api/v3/exchange_rates'
// async function getPrice() {
//     const resp = await axios.get(URL)
//     btcPrice.textContent = resp.data.rates.usd.value + ' USD'
// }


async function getPrice() {
    const respBtc = await axios.get(URL_BTC_USD)
    const respEth = await axios.get(URL_ETH_USD)
    const respExbitronLtc = await axios.get(URL_EXBITRON_LTC)
    const respExbitronDoge = await axios.get(URL_EXBITRON_DOGE)
    
    // console.log(respExbitronQoge.data.bids[0].price)
    // console.log(respExbitronQoge.data.bids[0].price)
    
    ltcPrice.textContent = respExbitronLtc.data.bids[0].price + ' USD'
    dogePrice.textContent = respExbitronDoge.data.bids[0].price + ' USD'
    btcPrice.textContent = respBtc.data.bitcoin.usd + ' USD'
    ethPrice.textContent = respEth.data.ethereum.usd + ' USD'
    
}

// for (n = 0; n = 3600; n++){
//     sleep(1000).console.log('ciach')
    
// }

checkAllBtn.addEventListener('click', getPrice)