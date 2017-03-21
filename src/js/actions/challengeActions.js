import * as types from './actionTypes';
import AthleteApi from '../api/athleteApi';
import ChallengeApi from '../api/challengeApi';

export function createChallenge(challenge) {
    return { type: types.CREATE_CHALLENGE, challenge};
}

export function getChallenges() {
    return function (dispatch) {
        return new ChallengeApi().getAll().then(challenges => {
            dispatch(setChallenges(challenges));
        });
    };
}

export function setChallenges(challenges) {
    return { type: types.SET_CHALLENGES, challenges};
}

export function followChallenge(challengeId, athlete) {
    return { type: types.FOLLOW_CHALLENGE, challengeId, athlete};
}

export function getChallengeAthleteInfo(challengeId, athlete) {
    return function (dispatch) {
        return new AthleteApi().getInfo(athlete.id).then(info => {
            dispatch(setChallengeAthleteInfo(info, challengeId, athlete.id));
        });
    };
}

export function getChallengeAthleteActivities(challengeId, athlete) {
    return function (dispatch) {
        return new AthleteApi(athlete.token).getActivities().then(activities => {
            dispatch(setChallengeAthleteActivities(activities, challengeId, athlete.id));
        });
    };
}

export function setChallengeAthleteInfo(info, challengeId, athleteId) {
    return { type: types.SET_CHALLENGE_ATHLETE_INFO, info, challengeId, athleteId};
}

export function setChallengeAthleteActivities(activities, challengeId, athleteId) {
    return { type: types.SET_CHALLENGE_ATHLETE_ACTIVITIES, activities, challengeId, athleteId};
}
