import { configureStore } from '@reduxjs/toolkit'
import breadCrumb from './breadCrumb'

export const store = configureStore({
  reducer: {
     breadCrumb,
  },
})
