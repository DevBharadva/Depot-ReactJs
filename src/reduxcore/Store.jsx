import rootReducer from './rootReducer'
import {productSaga} from './productRedux/ProductSaga'
import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

const SagaMiddleware = createSagaMiddleware()

const Store  = configureStore({
    reducer:rootReducer,
    middleware:() => [SagaMiddleware]
})

SagaMiddleware.run(productSaga)

export default Store 