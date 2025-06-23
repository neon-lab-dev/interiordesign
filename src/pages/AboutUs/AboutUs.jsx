import AboutUsHero from "../../Components/AboutUsPage/AboutUsHero/AboutUsHero";
import InnovationAndPersonalization from "../../Components/AboutUsPage/InnovationAndPersonalization/InnovationAndPersonalization";
import MissionAndVision from "../../Components/AboutUsPage/MissionAndVision/MissionAndVision";
import "./AboutUs.css";
import WinningCollaborators from './../../Components/HomePageComponents/WinningCollaborators/WinningCollaborators';
import ServiceArea from "../../Components/AboutUsPage/ServiceArea/ServiceArea";
import QualityAssurance from "../../Components/AboutUsPage/QualityAssurance/QualityAssurance";
import ContactUs from "../../Components/HomePageComponents/ContactUs/ContactUs";

const Page = () => {
  return (
    <div
      className="mx-auto d-flex flex-column px-3 custom-container"
      // style="background-color: #181818; max-width: 1300px;"
    >
      <div className="">
      <AboutUsHero />
      <InnovationAndPersonalization/>
      <MissionAndVision/>
      {/* <WinningCollaborators />
      <ServiceArea/>
      <QualityAssurance/>
      <ContactUs /> */}
      </div>
    </div>
  );
};

export default Page;