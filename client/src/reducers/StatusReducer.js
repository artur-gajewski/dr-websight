import { Map, List } from 'immutable';
import { RECEIVE_STATUS } from '../actions/DashboardActions';

const defaultState = Map({
    stats: List()
});

export default function(state = defaultState, action) {
    switch(action.type) {

        case RECEIVE_STATUS:
            return state.update(
                'stats',
                stats => stats.concat(action.payload)
            );
            break;

        default:
            return state;

    }
}


