const challenges = [{
    id: '0',
    displayName: '2017 km in 2017 year',
    athletes: [
        {
            id: '18192624',
            token: '2d86cee021852379115518352e9f9596eed897e6'
        },
        {
            id: '14419142',
            token: 'd7b559ae4e23f2e5eac0f47b9871a0c3f69bb4b3'
        }
    ]
}, {
    id: '23',
    displayName: '2017 km in first half 2017',
    athletes: [
        {
            id: '18192624',
            token: '2d86cee021852379115518352e9f9596eed897e6'
        },
        {
            id: '14419142',
            token: 'd7b559ae4e23f2e5eac0f47b9871a0c3f69bb4b3'
        }
    ]
}];
class ChallengeApi {
    getAll() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], challenges));
            }, 1000);
        });
    }
}

export default ChallengeApi;