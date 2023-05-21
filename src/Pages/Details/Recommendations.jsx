import { useEffect, useState } from "react";
import Carousel from "../../components/Carousel/carousel";
import { API, API_KEY } from "../../utils/API";

const Recommendations = ({ type, id, setHasRecommendation }) => {
  const [recommendations, setRecommendations] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response_reco = await API.get(
        `/${type}/${id}/recommendations?api_key=${API_KEY}`
      );
      const reco = response_reco.data.results.map((result) => {
        result.type = result.media_type;
        return result;
      });
      setRecommendations(reco);
    };
    fetchData();
  }, [type, id, setRecommendations]);
  console.log(recommendations.length);
  if (!recommendations.length) {
    setHasRecommendation(false);
  } else {
    setHasRecommendation(true);
  }
  return (
    <>
      {recommendations.length !== 0 ? (
        <section className="w-5/6 text-white mx-auto my-4">
          <h2 className="text-xl md:text-3xl sm:text-2xl">Recommendation</h2>
          <Carousel Content={recommendations} />
        </section>
      ) : null}
    </>
  );
};

export default Recommendations;
