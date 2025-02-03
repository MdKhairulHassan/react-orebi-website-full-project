import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dayBeforeYesterday: "",
  previousValue: "",
  currentValue: "",
}

export const breadCrumb = createSlice({
  name: 'breadCrumbs',
  initialState,
  reducers: {
    bread: (state, action) => {
      state.dayBeforeYesterday=state.previousValue
      state.previousValue=state.currentValue
      state.currentValue=action.payload
    },
  },
})

export const { bread } = breadCrumb.actions

export default breadCrumb.reducer