import axios from "axios";


export const getRadios = (callback) => {
    axios.get('http://atsar.my.id/api/v2/radio',{
        headers: {
            'x-api-key': 'base64:Z2g4NDVmdTV2YTE1ZW9xbHpjOWx5aXZjYm5wNW5xd2s='
        }
    })
        .then((res) => {
            callback(res.data)

        })
        .catch((err) => {
            console.log(err)
        })
}