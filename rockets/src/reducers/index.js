import {
    FETCH_ROCKETS_START,
    FETCH_ROCKETS_SUCCESS,
    FETCH_ROCKETS_FAILURE
} from '../actions';

const initialState = {
    rockets: [],
    isFetching: false,
    error: ''
}

const rocketsReducer = (state = initialState, {type, payload}) => {
    console.log('reducer type', type)
    switch(type) {
        case FETCH_ROCKETS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_ROCKETS_SUCCESS:
            return {
                ...state,
                rockets: payload,
                isFetching: false,
                error: ''
            };
        case FETCH_ROCKETS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: payload
            };
        default:
            return state;
    }
}

export default rocketsReducer