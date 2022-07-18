import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = { newYear: 0, sectorOrCountry: "" };

const counterSlice = createSlice({
  name: "addingData",
  initialState,
  reducers: {
    addYear(state, action) {
      state.newYear = action.payload;
    },
    addcountryOrSectore(state, action) {
      state.sectorOrCountry = action.payload;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;
export default store;
