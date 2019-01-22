// import { takeEvery, takeLatest, call, put, all } from 'redux-saga/effects';
// import * as loginPro from '../login/action-types';
// import {  login } from '../../service/api.js';
 
// // worker saga
// // Login
// function* getLoginInfo(action) {
//     try {
//         const userInfo = yield call(login, action.param);
//         if (userInfo.data.result.code === 10000) {
//             yield put({ type: loginPro.LOGIN_INFO, userinfo: userInfo.data, isLogin: true })
//         } else {
//             yield put({ type: loginPro.LOGIN_INFO, userinfo: userInfo.data, isLogin: false })
//         }
 
//     } catch (e) {
//         yield put({ type: loginPro.LOGIN_FAILIURE, error: e })
//     }
// }
 
// // wacther saga
// function* takeLogin() {
//     yield takeLatest(loginPro.LOGIN_SUCCESS, getLoginInfo)
// }
 
 
 
// // root saga
// export default function* rootSaga() {
//     yield takeLogin()
// }