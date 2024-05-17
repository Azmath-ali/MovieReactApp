import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  information: "",
}


export const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {

      loadperson :(state, action)=>{

        state.information = action.payload
      },

      removeperson :(state)=>{

        state.information = null
      }
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { loadperson, removeperson } = personSlice.actions
  
  export default personSlice.reducer