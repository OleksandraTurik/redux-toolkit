import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFilms } from "../../api/swapi";

const initialState = {
  films: null,
  loading: false,
  error: "",
};

export const fetchFilm = createAsyncThunk("films/fetchFilms", async () => {
  const data = await getFilms();
  return data;
});

export const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchFilm.fulfilled, (state, action) => {
      // Add user to the state array
      state.films = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(fetchFilm.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchFilm.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something Went Wrong";
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = filmsSlice.actions;

export default filmsSlice.reducer;
