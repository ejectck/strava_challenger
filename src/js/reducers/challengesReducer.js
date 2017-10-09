import * as types from "../actions/actionTypes";
import initialState from "../store/initialState";
import currentChallengeReducer from "../reducers/currentChallengeReducer";

export default function challengesReducer(state = initialState.challenges, action) {
    switch (action.type) {
        case types.CREATE_CHALLENGE:
            return [...state, Object.assign({}, action.challenge)];
        case types.EDIT_CHALLENGE:
            return [...state.filter(challenge=>challenge.id !== action.challenge.id), Object.assign({}, action.challenge)];
        case types.REMOVE_CHALLENGE:
            return state.filter(challenge=>challenge.id !== action.challengeID);
        case types.SET_CHALLENGES:
            return action.challenges;
        case types.SET_CHALLENGE:
        case types.JOIN_CHALLENGE:
            return state.map(challenge => {
                if (challenge.id === action.challengeId) {
                    return currentChallengeReducer(challenge, action);
                }
                return challenge;
            });
        default:
            return state;
    }
}
