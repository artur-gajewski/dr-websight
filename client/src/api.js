import axios from 'axios';
import config from '../config.js';

export default {
    pingWebsite: (url) => {
        return axios.post(
                config.apiUrl + '/ping',
                { url: url },
                { 'Content-Type': 'application/json'}
            )
            .then(function(response) {
                return response.data;
            })
            .catch(function (response) {
                return {
                    code: 404,
                    description: 'NOT FOUND'
                }
            });
    }
}
