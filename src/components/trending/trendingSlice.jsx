import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API, API_KEY } from "../../utils/API";

export const initialState = {
  trending: [],
  status: "idle",
  error: null,
};

export const fetchTrending = createAsyncThunk(
  "trending/fetchTrending",
  async () => {
    const response = await API.get(`trending/all/day?api_key=${API_KEY}`);
    return response.data;
  }
);

export const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTrending.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTrending.fulfilled, (state, action) => {
        state.status = "successed";
        const trending = action.payload.results.map((result) => {
          result.type = result.media_type;
          return result;
        });
        state.trending = trending;
      })
      .addCase(fetchTrending.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllTrending = (state) => state.trending.trending;
export const selectTrendingStatus = (state) => state.trending.status;
export const selectTrendingError = (state) => state.trending.error;
export default trendingSlice.reducer;
