import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  seclectAllMovies,
  seclectMoviesStatus,
  seclectMoviesError,
  fetchMovies,
} from "./moviesSlice";
import Carousel from "../Carousel/carousel";

const MoviesSection = () => {
  const dispatch = useDispatch();
  const movies = useSelector(seclectAllMovies);
  const moviesStatus = useSelector(seclectMoviesStatus);
  const moviesError = useSelector(seclectMoviesError);

  useEffect(() => {
    if (moviesStatus === "idle") {
      dispatch(fetchMovies());
    }
  }, [dispatch, moviesStatus]);

  let content;
  if (moviesStatus === "loading") {
    content = <p>Loading....</p>;
  }
  if (moviesStatus === "successed") {
    content = <Carousel Content={movies} />;
  }
  if (moviesStatus === "failed") {
    content = <p>{moviesError}</p>;
  }
  return (
    <section className="w-5/6 text-white mx-auto my-4">
      <h2 className="text-xl md:text-3xl sm:text-2xl">Top Rated Movies</h2>
      {content}
    </section>
  );
};

export default MoviesSection;
