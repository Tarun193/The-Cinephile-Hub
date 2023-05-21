import { useSelector, useDispatch } from "react-redux";
import {
  selectAllTrending,
  selectTrendingError,
  selectTrendingStatus,
  fetchTrending,
} from "./TrendingSlice";
import { useEffect } from "react";
import Carousel from "../Carousel/carousel";

const TrendingSection = ({ text }) => {
  const trendingData = useSelector(selectAllTrending);
  const trendingStatus = useSelector(selectTrendingStatus);
  const trendingError = useSelector(selectTrendingError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (trendingStatus === "idle") {
      dispatch(fetchTrending());
    }
  }, [dispatch, trendingStatus]);

  let content;
  if (trendingStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (trendingStatus === "successed") {
    content = <Carousel Content={trendingData} />;
  } else if (trendingStatus === "failed") {
    content = <p>trendingError</p>;
  }
  return (
    <section className="w-5/6 text-white mx-auto my-4">
      <h2 className="text-xl md:text-3xl sm:text-2xl">
        {text ? text : "Trending"}
      </h2>
      {content}
    </section>
  );
};

export default TrendingSection;
