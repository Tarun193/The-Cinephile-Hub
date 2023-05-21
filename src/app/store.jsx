import { configureStore } from "@reduxjs/toolkit";
import trendingReducer from "../components/trending/trendingSlice";
import moviesReducer from "../components/Movies/moviesSlice";
import tvShowReducer from "../components/TV/tvShowsSlice";
const store = configureStore({
  reducer: {
    trending: trendingReducer,
    movies: moviesReducer,
    TV: tvShowReducer,
  },
});

export default store;
