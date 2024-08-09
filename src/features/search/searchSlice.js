import { createSlice } from "@reduxjs/toolkit";
import { callPlacesBackend } from "../../data/callPlacesBackend";
import { v4 as uuid } from "uuid";

const initialState = {
  searchArray: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    fetchPlaceList: async (state, action) => {
      state.searchArray = await callPlacesBackend(action.payload);
    },
  },
});

export const searchReducer = searchSlice.reducer;

export const { fetchPlaceList } = searchSlice.actions;

