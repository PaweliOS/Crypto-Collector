const checkAllBtn = document.querySelector('.buttons__btn-checkAll')
const btcPrice = document.querySelector('.crypto__coins--btc-price')
const ethPrice = document.querySelector('.crypto__coins--eth-price')
const ltcPrice = document.querySelector('.crypto__coins--ltc-price')
const dogePrice = document.querySelector('.crypto__coins--doge-price')
const etcPrice = document.querySelector('.crypto__coins--etc-price')
const xrpPrice = document.querySelector('.crypto__coins--xrp-price')

const warning = document.querySelector('.warning')
const warningButton = document.querySelector('.warning__button')

// === poniżej tylko dla wybranej crypto sama cena ====
const BTC = 'bitcoin'
const USD = 'usd'
const ETH = 'ethereum'
const EXBITRON_ltcusdt = 'ltcusdt'
const EXBITRON_dogeusdt = 'dogeusdt'
const Binance_etcusdt = 'ETCUSDT'
const Binance_xrpusdt = 'XRPUSDT'
const URL_BTC_USD = 'https://api.coingecko.com/api/v3/simple/price?ids='+BTC+'&vs_currencies='+USD
const URL_ETH_USD = 'https://api.coingecko.com/api/v3/simple/price?ids=' + ETH + '&vs_currencies=' + USD

const URL_EXBITRON_LTC = 'https://www.exbitron.com/api/v2/peatio/public/markets/'+EXBITRON_ltcusdt+'/order-book'
const URL_EXBITRON_DOGE = 'https://www.exbitron.com/api/v2/peatio/public/markets/' + EXBITRON_dogeusdt + '/order-book'

const URL_BINANCE_ETC_USDT =  'https://api.binance.com/api/v3/ticker/price?symbol=' + Binance_etcusdt
const URL_BINANCE_XRP_USDT =  'https://api.binance.com/api/v3/ticker/price?symbol=' + Binance_xrpusdt


async function getPrice() {
    setTimeout(activateCheckAllBtn, 10000)
    checkAllBtn.setAttribute('class', 'btn btn-primary buttons__btns buttons__btn-checkAll fs-3 disabled')

    // const respBtc = await axios.get(URL_BTC_USD)
    await axios.get(URL_BTC_USD)
    .then((resp) => {
        btcPrice.textContent = resp.data.bitcoin.usd + ' USD'
    })
    .catch(() => { warning.classList.remove('d-none') })
    
    await axios.get(URL_ETH_USD)
    .then((resp) => {
        ethPrice.textContent = resp.data.ethereum.usd + ' USD'
    })
        .catch(() => { warning.classList.remove('d-none') })
    
    await axios.get(URL_EXBITRON_LTC)
    .then((resp) => {
        ltcPrice.textContent = roundX_Y(resp.data.bids[0].price, 3) + ' USD'
    })
    .catch(() => { warning.classList.remove('d-none') })

    await axios.get(URL_EXBITRON_DOGE)
    .then((resp) => {
        dogePrice.textContent = roundX_Y(resp.data.bids[0].price, 3) + ' USD'
    })
    .catch(() => { warning.classList.remove('d-none') })

    await axios.get(URL_BINANCE_ETC_USDT)
    .then((resp) => {
        etcPrice.textContent = roundX_Y(resp.data.price, 3) + ' USD'
    })
    .catch(() => { warning.classList.remove('d-none') })

    await axios.get(URL_BINANCE_XRP_USDT)
    .then((resp) => {
        xrpPrice.textContent = roundX_Y(resp.data.price, 3) + ' USD'
    })
    .catch(() => { warning.classList.remove('d-none') })

    // console.log(respBinanceXrp.data.price)
}

function activateCheckAllBtn() {
    checkAllBtn.classList.remove('disabled')
}

// roundX_Y zaokrąglij liczbę X do Y miejsc po przecinku
const roundX_Y = (x,y) => {
    let output = (Math.round(x * Math.pow(10, y)))/Math.pow(10, y)
    return output
}

const hideWarning = () => {
    warning.classList.add('d-none')
}


checkAllBtn.addEventListener('click', getPrice)
warningButton.addEventListener('click', hideWarning)