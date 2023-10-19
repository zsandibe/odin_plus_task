const baseUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1'
let currencyData = []
let currentPage = 1
let pageSize = 20


const loadData = (currencies) =>{
    currencyData = currencies
    renderTable()
    renderPagination()
}

const fetchData = () => {
    fetch(baseUrl)
        .then((response) => response.json())
        .then(loadData)
        .catch((error) => {
            console.error('Error:', error)
        })
}



const paginateData = (data,page,size) => {
    const start = (page - 1) * size 
    const end = start + size
    return data.slice(start, end)
}