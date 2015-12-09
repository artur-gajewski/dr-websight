import axios from 'axios';
import config from '../config.js';

export default {
    pingWebsite: (url) => {
        return axios.get(url)
            .then(function(response) {
                return response;
            })
            .catch(function (response) {
                return {
                    code: 404,
                    description: 'NOT FOUND'
                }
            });
    }
}
