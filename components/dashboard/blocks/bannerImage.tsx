import "./styles.scss";
const BannerImage = () => {
    return <div className="w-full banner-image">
        <img className="w-full banner-image--img lg:aspect-[16/9] md:aspect-[3/4] aspect-[3/4]" src="https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/k/m/kmyb_imax_2000x3000-min.jpg" alt="banner" />
        <div className="banner-image--content">
            <div className="banner-image--content-container">
                <div className="flex flex-col gap-4 items-center justify-center">
                    <h1 className="break-words sm:break-normal hyphens-auto font-serif text-[1.875rem] leading-[2rem] sm:text-4xl md:text-5xl font-medium sm:tracking-2 uppercase text-white text-center">Banner Image</h1>
                    <div className="focus-visible sm:w-none mt-4 inline-flex max-w-full items-center justify-center rounded-xs border border-white bg-gray-700/5 px-[1.938rem] py-[0.938rem] font-sans text-button-small font-medium uppercase text-white backdrop-blur-md transition-colors hover:bg-gray-700/[0.15] focus-visible:ring-0 focus-visible:ring-offset-0 active:bg-gray-700/5 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-background/5 md:px-[2.438rem] md:py-[1.188rem] md:text-button text-center">Banner Image Button</div>
                </div>
            </div>
        </div>
    </div>;
};

export default BannerImage;