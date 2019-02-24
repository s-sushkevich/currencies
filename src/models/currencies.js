import axios from 'axios';

export const getCurrencies = () => {

    return axios.get('http://data.fixer.io/api/latest?access_key=ce7479208453a1fe4cbe18c8aee08940')
        .then(function(response) {
            return response.data;
        });
};

// export {
//   getCurrencies,
// };