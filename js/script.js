const checkAllBtn = document.querySelector('.buttons__btn-checkAll')
const btcPrice = document.querySelector('.crypto__coins--btc-price')

const URL = 'https://api.coingecko.com/api/v3/exchange_rates'


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
async function getPrice() {
    const resp = await axios.get(URL)
    btcPrice.textContent = resp.data.rates.usd.value + ' USD'
}

checkAllBtn.addEventListener('click', getPrice)