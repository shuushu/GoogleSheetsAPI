export const fbConfig = {
    apiKey: "AIzaSyBwc5tkZM3fEQcyPC1-HfguTbIt8woO9iA",
    authDomain: "shushu-cb26c.firebaseapp.com",
    databaseURL: "https://shushu-cb26c.firebaseio.com",
    storageBucket: "shushu-cb26c.appspot.com"
};

// 상태값
const TYPE = [
    'INIT',
    'LOGIN_GOOGLE'
];

let ROOT = {};

TYPE.forEach(value => {
    ROOT = Object.assign(ROOT, {
        [`${value}_REQ_WAIT`]: `${value}_REQ_WAIT`,
        [`${value}_REQ_SUCCESS`]: `${value}_REQ_SUCCESS`,
        [`${value}_REQ_FAIL`]: `${value}_REQ_FAIL`
    })
})

export let TYPES = ROOT