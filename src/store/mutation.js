import { TYPE } from '../common/config'
import firebase from 'firebase/app'
import 'firebase/database'
import axios from "axios"


// 액션 함수
export const sessionCheck =  (session) => ({
    type: session.type,
    data: session.data
})

export const reqState =  (type, STATE) => {
    return {
        type: `${TYPE}_REQ_${STATE}`,
    }
}
/*

export function getMember() {
    return (dispatch) => {
        let result = new Promise(resolve => {
            firebase.database().ref('chat/users').on('value', snap => {
                if (snap.val()) {
                    resolve(snap.val())
                } else {
                    resolve(false)
                }
            })
        })

        if (result) {
            dispatch({
                type: 'GET_MEMBER',
                data: result
            })
        }
    }
}*/

export const getMember = person => {
    return (dispatch) => {
        return axios
            .get(`https://599be4213a19ba0011949c7b.mockapi.io/cart/Cart`)
            .then(res => {
                dispatch(addPersons(res.data));
            });
    }
};

export const addPersons = personList => {
    return {
        type: 'GET_MEMBER',
        personList
    };
}