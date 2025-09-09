import { combineReducers } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addTransaction } = transactionSlice.actions;

const rootReducer = combineReducers({
  transaction: transactionSlice.reducer,
});

export default rootReducer;
