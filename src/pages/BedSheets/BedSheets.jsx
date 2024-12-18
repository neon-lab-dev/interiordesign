import BestSellers from "../../Components/BestSellers/BestSellers";
import CategorizedProducts from "../../Components/CategorizedProducts/CategorizedProducts";
import Hero from "../../Components/Hero/Hero";


const BedSheets = () => {
    return (
        <div>
            <Hero/>
            <BestSellers />
            <CategorizedProducts sectionTitle="Bedsheets (300 TC)" bgColor={"#181818"} />
            <CategorizedProducts sectionTitle="Bedsheets (400 TC)" bgColor={""} />
            <CategorizedProducts sectionTitle="Bedsheets (600 TC)" bgColor={"#181818"} />
        </div>
    );
};

export default BedSheets;