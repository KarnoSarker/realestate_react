import axios from "axios";

export const baseUrl = 'bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'e1f5d0b8b2msh4fa55e5e8857519p181e84jsnd8afb58be5aa'
          }
    })
}