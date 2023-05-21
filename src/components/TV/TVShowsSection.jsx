import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Carousel from "../Carousel/carousel";
import {
  fetchTVShows,
  seclectAllTVShows,
  seclectTVShowsStatus,
  seclectTVShowssError,
} from "./tvShowsSlice";

const TVShowsSection = () => {
  const dispatch = useDispatch();
  const TVShows = useSelector(seclectAllTVShows);
  const TVShowStatus = useSelector(seclectTVShowsStatus);
  const TVShowError = useSelector(seclectTVShowssError);

  useEffect(() => {
    if (TVShowStatus === "idle") {
      dispatch(fetchTVShows());
    }
  }, [TVShowStatus, dispatch]);

  let content;
  if (TVShowStatus === "loading") {
    content = <p>Loading....</p>;
  }
  if (TVShowStatus === "successed") {
    content = <Carousel Content={TVShows} />;
  }
  if (TVShowStatus === "failed") {
    content = <p>{TVShowError}</p>;
  }
  return (
    <section className="w-5/6 text-white mx-auto my-4">
      <h2 className="text-xl md:text-3xl sm:text-2xl">Top Rated TV Shows</h2>
      {content}
    </section>
  );
};

export default TVShowsSection;
