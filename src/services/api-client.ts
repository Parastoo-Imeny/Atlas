import axios from "axios";

export default axios.create({
    baseURL: 'https://restcountries.com/v3.1',
    params: {

    }
})

// to create axios instanse with customize configuration