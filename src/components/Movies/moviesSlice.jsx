import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API, API_KEY } from "../../utils/API";

const initialState = {
  movies: [],
  status: "idle", // "loading", "successed", "failed"
  error: null,
};

// Creating an async action to load data.

export const fetchMovies = createAsyncThunk("movies/featchMovies", async () => {
  const response = await API.get(
    `/movie/top_rated?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
});

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "successed";
        const movies = action.payload.results.map((result) => {
          result.type = "movie";
          return result;
        });
        state.movies = movies;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const seclectAllMovies = (state) => state.movies.movies;
export const seclectMoviesStatus = (state) => state.movies.status;
export const seclectMoviesError = (state) => state.movies.Error;

export default moviesSlice.reducer;
