import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import fbConfig from '../fbtoken.json'
firebase.initializeApp(fbConfig);






function* fetchUser(action) {
    console.log(222)
    /*try {
        //const user = yield call(Api.fetchUser, action.payload.userId);
        yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    } catch (e) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }*/
}

function* googleLogin() {
    yield put({ type: 'LOGIN_GOOGLE_WAIT' })

    let session = yield call(() => {
        return new Promise(resolve => {
            let provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

            firebase.auth().signInWithPopup(provider).then(result => {
                let token = result.credential.accessToken;
                let user = result.user;

                resolve(result.user)
            }).catch(error => {
                resolve(false)
            });
        })
    })

    if (session) {
        yield put({ type: 'LOGIN_GOOGLE_SUCCESS' })
    } else {
        yield put({ type: 'LOGIN_GOOGLE_ERROR' })
    }

}

function* logout() {
    let session = yield call(() => {
        return new Promise(resolve => {
            firebase.auth().signOut().then(() => {
                resolve(true)
            }).catch(error => {
                resolve(false)
            });
        })
    })

    if (session) {
        yield put({ type: 'LOGOUT_SUCCESS' })
    } else {
        yield put({ type: 'LOGOUT_ERROR' })
    }


}


function* mySaga() {
    // 세션체크
    let session = yield call(() => {
        return new Promise(resolve => {
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    let { uid, displayName, email, photoURL } = user;
                    resolve({ uid, displayName, email, photoURL })
                } else {
                    // User is signed out.
                    resolve(false)
                }
            });
        })
    });

    if (session) {
        yield put({
            type: 'SESSION_SUCCESS',
            data: session
        })
    } else {
        yield put({
            type: 'SESSION_FAIL'
        })
    }



    yield takeEvery('SESSION_CHECK_DA', fetchUser);
    yield takeEvery('LOGOUT', logout);
    yield takeEvery('LOGIN_GOOGLE', googleLogin);

}

export default mySaga;
