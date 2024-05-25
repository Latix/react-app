import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
  info: 'Okay'
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.info = "Okay";
      state.count += 1
    },
    decrement: (state) => {
        if (state.count <= 0) {
            state.info = "Done";
        } else {
            state.info = "Okay";
            state.count -= 1
        }
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer