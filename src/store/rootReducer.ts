import { combineReducers } from '@reduxjs/toolkit'

import issuesDisplaySlice from '../issuesDisplay';
import counter from './observer';

const rootReducer = combineReducers({
  issuesDisplay:issuesDisplaySlice,
  counter:counter.reducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer