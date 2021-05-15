import { TYPE } from '../common/config'

let ROOT = {};

TYPE.forEach(value => {
    ROOT = Object.assign(ROOT, {
        [`${value}_REQ_WAIT`]: `${value}_REQ_WAIT`,
        [`${value}_REQ_SUCCESS`]: `${value}_REQ_SUCCESS`,
        [`${value}_REQ_FAIL`]: `${value}_REQ_FAIL`
    })
});

export default ROOT;