import api from './../api';
import uuid from 'node-uuid';
import axios from 'axios';

export const RECEIVE_STATUS = 'RECEIVE_STATUS';

export function pingWebsite(url) {
    return function(dispatch) {
        api.pingWebsite(url).then((response) => {
            dispatch({
                type: RECEIVE_STATUS,
                payload: {
                    url: url,
                    code: response.status,
                    description: response.statusText
                }
            })
        })
    }
}

