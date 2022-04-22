import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Tiasha Bhowmik' },
  { id: '1', name: 'Chetan Raina' },
  { id: '2', name: 'Riya Saxena' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default usersSlice.reducer
