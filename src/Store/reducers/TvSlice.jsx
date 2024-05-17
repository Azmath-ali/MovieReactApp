import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  information: null,
}


export const tvSlice = createSlice({
    name: 'tv',
    initialState,
    reducers: {

      loadtv :(state, action)=>{

        state.information = action.payload
      },

      removetv :(state)=>{

        state.information = null
      }
    }
  })
  
  // Action creators are generated for each case reducer function
  export const {loadtv, removetv  } = tvSlice.actions
  
  export default tvSlice.reducer