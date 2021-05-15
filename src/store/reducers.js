import { TYPES } from '../common/config'

// Root State
const initialState = {
    isSession: false,
    isLoading: false,
    member: null,
    auth: null
};
console.log(TYPES)
// 액션 함수 구독
// 상태값을 스토어에 전달
export const reqState = (state = initialState.isLoading, action) => {
    console.log(action.type, `${TYPES}_WAIT`)
    switch (action.type) {
        case `${TYPES}_WAIT`:
            alert('wait')
            return false;
        case `${TYPES}_SUCCESS`:
            return true;
        case `${TYPES}_FAIL`:
            return true;
        default:
            return state;
    }
}

export const sessionCheck = (state = initialState.auth, action) => {
    switch (action.type) {
        case 'SESSION_SUCCESS':
            return action.data;
        case 'SESSION_FAIL':
            return null;
        default:
            return state
    }
}

export const getMember = (state = initialState.member, action) => {
    switch (action.type) {
        case 'GET_MEMBER':
            return action.data
        default:
            return state
    }
}


export const session = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state
    }
}