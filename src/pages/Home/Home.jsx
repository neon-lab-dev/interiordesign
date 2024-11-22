import OurServices from '../../Components/HomePageComponents/OurServices/OurServices';
import WhoWeAre from '../../Components/HomePageComponents/WhoWeAre/WhoWeAre';
import WinningCollaborators from './../../Components/HomePageComponents/WinningCollaborators/WinningCollaborators';

const Home = () => {
    return (
        <div>
            <WinningCollaborators/>
            <WhoWeAre/>
            <OurServices/>
        </div>
    );
};

export default Home;