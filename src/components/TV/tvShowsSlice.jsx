import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API, API_KEY } from "../../utils/API";

const initialState = {
  tvShows: [],
  status: "idle", // "loading", "successed", "failed"
  error: null,
};

// Creating an async action to load data.

export const fetchTVShows = createAsyncThunk("TV/fetchTVShows", async () => {
  const response = await API.get(
    `/tv/top_rated?api_key=${API_KEY}&?language=en-US&page=1`
  );
  return response.data;
});

export const tvShowsSlice = createSlice({
  name: "TV",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTVShows.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTVShows.fulfilled, (state, action) => {
        state.status = "successed";
        const tvShows = action.payload.results.map((result) => {
          result.type = "tv";
          return result;
        });
        state.tvShows = tvShows;
      })
      .addCase(fetchTVShows.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const seclectAllTVShows = (state) => state.TV.tvShows;
export const seclectTVShowsStatus = (state) => state.TV.status;
export const seclectTVShowssError = (state) => state.TV.error;

export default tvShowsSlice.reducer;
