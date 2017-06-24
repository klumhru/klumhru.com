import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from './reducer'

export default () =>
  createStore(
    reducer,
    {},
    compose(
      applyMiddleware(
        thunk,
        createLogger(),
      ),
    ),
  )
