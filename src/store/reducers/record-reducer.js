/* eslint-disable multiline-ternary */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  'records': [],
}

const recordSlice = createSlice({
  'name': 'records',
  initialState,
  'reducers': {
    addRecord(state, action) {
      state.records.push(action.payload)
    },
    deleteStatus(state, action) {
      state.records = state.records.filter(
        (record) => record.id !== action.payload,
      )
    },
    toggleStatus(state, action) {
      const { records } = state
      const { 'payload': recordId } = action

      return {
        ...state,
        'records': records.map((record) => {
          return record.id === recordId
            ? { ...record, 'completed': !record.completed }
            : record
        }),
      }
    },
  },
})

export const { addRecord, toggleStatus, deleteStatus } = recordSlice.actions

export default recordSlice.reducer
