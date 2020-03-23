import { createAction, Action, createSlice } from "@reduxjs/toolkit"
import { Observable } from 'rxjs';

import { ofType, combineEpics, createEpicMiddleware } from 'redux-observable';
import { map, flatMap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

export const epicMiddleware = createEpicMiddleware();

export const incrementBy = createAction<number>('incrementBy')

const counter = createSlice({
  name: 'counter',
  initialState: 0 as number,
  reducers:{},
  extraReducers:{
    [incrementBy.type]: (state, action) => {
      console.log(incrementBy.type,state,'00000');
      state += 1
      return state;
    }
  } 
})

export default counter

export const userEpic = (actions$: Observable<Action>) =>
  actions$.pipe(
    ofType(incrementBy.type),
    flatMap(() => ajax.getJSON('http://localhost:3000/manifest.json')),
    map(user => {
      console.log(user,'123');
      return ({ type: 'GET_USER_SUCCESS', payload: user })
    })
  )


export const rootEpic = combineEpics(userEpic)
