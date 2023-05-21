import Hero from "../../components/Hero/Hero";
import TrendingSection from "../../components/Trending/TrendingSection";
import MoviesSection from "../../components/Movies/MoviesSection";
import TVShowsSection from "../../components/TV/TVShowsSection";

const Home = () => {
  return (
    <main>
      <Hero />
      <TrendingSection />
      <MoviesSection />
      <TVShowsSection />
    </main>
  );
};

export default Home;
