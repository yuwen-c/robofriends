// import { setSearchField } from './actions';
import { CHANGE_SEARCH_FIELD } from './constants';

const initialState = {
    searchField:''
}

export const searchRobots = (state=initialState, action={}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            // return a new state, not modify it
            // merge several things to the first parameter { }
            return Object.assign({}, state, {searchField : action.payload});
        default:
            return state;
    }
}
// reduction: 還原、換算
// 3. depends on the text we get, now we can go searching robots.
// description: search robots

// declare a searchRobots reducer, which bears 2 parameters, 
// state: stands for the state of searchfield
// action: means the last step we wrote, it'll return an object that combine type and payload.
// both parameters come with a default value:
// state: needs a initial state which is empty searchfield
// action: empty object

// in the reducer, there are some reactions of certain situations listed.
// when we receive the action return, the action type meets one situation,
// we return an object to substitud the original state.

// to compose this new state object, use Object.assign
// 3 parameters are:
// {}- where we going to put the data
// state- put the initial state inside
// {searchfield : action.payload}- we'll change the value of searchfield property 
