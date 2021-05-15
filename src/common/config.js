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