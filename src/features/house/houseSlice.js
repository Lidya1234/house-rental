import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
   house: [],
   status: ''
}
export const fetchHouse = createAsyncThunk('house/fetchHouse', async () => {
   const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos', {
      params:
      {
         _limit: 1
      }
   })
   console.log(data)
   return data
})
const counterSlice = createSlice({
   name: 'House',
   initialState,
   reducers: {
      incremented(state) {
         state.value += 1
      },
      decremented(state) {
         state.value--
      }
   },
   extraReducers(builder) {
      builder
         .addCase(fetchHouse.fulfilled, (state, action) => {
            state.status = 'succeeded'
            // Add any fetched posts to the array
            state.house = action.payload
         })
         .addCase(fetchHouse.pending, (state, action) => {
            state.status = 'loading'
         })
         .addCase(fetchHouse.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })
   }
})
export const { incremented, decremented } = counterSlice.actions;
export default counterSlice.reducer;