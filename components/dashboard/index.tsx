import BannerImage from "./blocks/bannerImage";
import BestSellers from "./blocks/bestSellers";
import CollectionSlider from "./blocks/collectionSlider";

const Dashboard = () => {
  return <div className="flex flex-col gap-4">
    <BannerImage />
    <BestSellers />
    <CollectionSlider />
  </div>;
};

export default Dashboard;
