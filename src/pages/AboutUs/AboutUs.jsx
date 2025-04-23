import AboutUsHero from "../../Components/AboutUsPage/AboutUsHero/AboutUsHero";
import "./AboutUs.css";

const Page = () => {
  return (
    <div
      className="mx-auto d-flex flex-column px-3 custom-container"
      // style="background-color: #181818; max-width: 1300px;"
    >
      <div className="container">
      <AboutUsHero />
      </div>
    </div>
  );
};

export default Page;
