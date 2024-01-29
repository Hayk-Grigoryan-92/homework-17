import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface IinitialState {
  tittleInfo:ITittleInfo,
  isView:boolean
}

export interface ITittleInfo {
    tittle?: string,
    description?: string,
    tittleColor?: string ,
    descriptionColor?: string,
    viewPageBackground?: string,
    tittleComponentBackground?: string,
    tittleComponentBorderRadius?: string,
    tittleRange10_45?: string,
    descriptionRange10_20?: string,
}

const initialState: IinitialState = {
  tittleInfo : {
    tittle:'',
    description:'',
    tittleColor:'',
    descriptionColor:'',
    viewPageBackground:'',
    tittleComponentBackground:'',
    tittleComponentBorderRadius:'',
    tittleRange10_45:'',
    descriptionRange10_20:'',
  },
  isView : false
}

  const tittleSlice = createSlice({
    initialState,
    name: 'Tittle_Info',
    reducers: {
      addTittle:(state, action:PayloadAction<ITittleInfo>) => {
          state.tittleInfo = action.payload
      },
      addIsViewClass:(state, action:PayloadAction<boolean>) => {
        state.isView = action.payload
      }
      }
    })

  
export const { addTittle, addIsViewClass } = tittleSlice.actions

export default tittleSlice.reducer
