import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  information: null,
}


export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {

      loadmovie : (state, action)=>{

        state.information = action.payload
      },

      removemovie :(state)=>{

        state.information = null
      }


    }
  })
  
  // Action creators are generated for each case reducer function
  export const { loadmovie, removemovie } = movieSlice.actions
  
  export default movieSlice.reducer