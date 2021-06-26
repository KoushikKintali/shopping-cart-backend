const { default: axios } = require('axios')
const express = require('express')
var cors = require('cors')
const app = express()
const port = 3001;

app.use(cors())

app.get('/products', (request, response) => {
    const { count, skip } = request.query;
    axios.get('https://run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6').then((res) => {
        const result = res.data.products;
        const filteredData = result.slice(Number(skip), Number(count) + Number(skip));
        response.send({ products: filteredData, totalCount: result.length });
    })
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})