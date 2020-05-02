import { takeEvery } from 'redux-saga/effects'

const handleNewMessage = function* handleNewMessage(params) {
    yield takeEvery('ADD_SHOPPING_ITEM', (action) => {
        console.log("Lookey here..found an uisng a SAGA...\n" + JSON.stringify(action))
    })
}

export default handleNewMessage