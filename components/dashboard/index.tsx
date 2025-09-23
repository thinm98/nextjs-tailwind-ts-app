import AboutUs from "./blocks/aboutUs";
import BannerImage from "./blocks/bannerImage";
import BestSellers from "./blocks/bestSellers";
import BlogPosts from "./blocks/blogPosts";
import CollectionSlider from "./blocks/collectionSlider";
import ProductRecentlyViewed from "./blocks/productRecentlyViewed";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <BannerImage />
      <BestSellers />
      <CollectionSlider />
      <ProductRecentlyViewed />
      <AboutUs />
      <BlogPosts />
    </div>
  );
};

export default Dashboard;
