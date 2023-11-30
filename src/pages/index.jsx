import SEO from "../common/seo";
import HomeOne from "../components/homes/home-5";
import Wrapper from "../layout/wrapper";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Softec - Saas Project"} />
      <HomeOne />
    </Wrapper>
  );
};

export default Home;
