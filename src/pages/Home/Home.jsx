import OurServices from '../../Components/HomePageComponents/OurServices/OurServices';
import WhoWeAre from '../../Components/HomePageComponents/WhoWeAre/WhoWeAre';
import WinningCollaborators from './../../Components/HomePageComponents/WinningCollaborators/WinningCollaborators';
import ShopSignature from "../../Components/HomePageComponents/ShopSignature/ShopSignature";
import Testimonials from "../../Components/HomePageComponents/Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <WinningCollaborators/>
            <WhoWeAre/>
            <OurServices/>
            <ShopSignature />
            <Testimonials />
        </div>
    );
};

export default Home;