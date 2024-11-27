import Hero from '../../Components/HomePageComponents/Hero/Hero';
import OurServices from '../../Components/HomePageComponents/OurServices/OurServices';
import WhoWeAre from '../../Components/HomePageComponents/WhoWeAre/WhoWeAre';
import WinningCollaborators from './../../Components/HomePageComponents/WinningCollaborators/WinningCollaborators';
import ExploreDesign from "./../../Components/HomePageComponents/ExporeDesign/ExploreDesign.jsx"
import ContactUs from '../../Components/HomePageComponents/ContactUs/ContactUs.jsx';
import ShopSignature from "../../Components/HomePageComponents/ShopSignature/ShopSignature";
import Testimonials from "../../Components/HomePageComponents/Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Hero/>
            <WinningCollaborators/>
            <WhoWeAre/>
            <OurServices/>

            <ExploreDesign/>
           

            <ShopSignature />
            <Testimonials />
            <ContactUs/>
        </div>
    );
};

export default Home;