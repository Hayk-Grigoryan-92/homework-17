import { configureStore } from '@reduxjs/toolkit'
import  tittleSlice  from './reducers/tittleSlice'


export const store = configureStore({
    reducer: tittleSlice
  })

  export type RootState = ReturnType<typeof store.getState>

  export type AppDispatch = typeof store.dispatch