import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './rootReducer'
import { epicMiddleware, rootEpic } from './observer'

const store = configureStore({
  middleware:[epicMiddleware],
  reducer: rootReducer
})


epicMiddleware.run(rootEpic);


// if (process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.accept('./rootReducer', () => {
//     const newRootReducer = require('./rootReducer').default
//     store.replaceReducer(newRootReducer)
//   })
// }

export type AppDispatch = typeof store.dispatch

export default store