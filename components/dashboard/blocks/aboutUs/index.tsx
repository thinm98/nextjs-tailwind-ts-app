const AboutUs = () => {
  const aboutData = [
    {
      title: "OUR STORY AND PHILOSOPHY",
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "FINEST MATERIALS",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "ITALIAN CRAFTSMANSHIP",
      image:
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="about-us-section py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-gray-900">
            ABOUT US
          </h2>
          <div className="max-w-2xl">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light">
              We source the finest natural materials across Italy and work with
              the most skilled artisans in the country to design and craft our
              permanent collection directly for you.
            </p>
          </div>
        </div>

        <div className="hidden md:block lg:hidden mb-12">
          {/* First Image - Full Width */}
          <div className="mb-1">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
              <img
                src={aboutData[0].image}
                alt={aboutData[0].title}
                className="w-full h-full object-cover    ratio-[8/3]"
              />
              <h3 className="text-sm font-medium tracking-wider uppercase text-gray-800 text-center">
                {aboutData[0].title}
              </h3>
            </div>
          </div>
          {/* Second and Third Images - Side by Side */}
          <div className="grid grid-cols-2 gap-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={aboutData[1].image}
                alt={aboutData[1].title}
                className="w-full h-full object-cover  "
              />
              <h3 className="text-sm font-medium tracking-wider uppercase text-gray-800 text-center">
                {aboutData[1].title}
              </h3>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={aboutData[2].image}
                alt={aboutData[2].title}
                className="w-full h-full object-cover   "
              />
              <h3 className="text-sm font-medium tracking-wider uppercase text-gray-800 text-center">
                {aboutData[2].title}
              </h3>
            </div>
          </div>
        </div>
        {/* Large Screen Layout - Single Row with 2:1:1 Ratio */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-1 mb-12">
          {/* First Image - 2 columns (50% width) */}
          <div className="col-span-2">
            <img
              src={aboutData[0].image}
              alt={aboutData[0].title}
              className="w-full h-full object-cover aspect-[3/2]"
            />
            <h3 className="text-sm font-medium tracking-wider uppercase text-gray-800 text-center">
              {aboutData[0].title}
            </h3>
          </div>

          {/* Second Image - 1 column (25% width) */}
          <div className="col-span-1">
            <img
              src={aboutData[1].image}
              alt={aboutData[1].title}
              className="w-full h-full object-cover   "
            />
            <h3 className="text-sm font-medium tracking-wider uppercase text-gray-800 text-center">
              {aboutData[1].title}
            </h3>
          </div>

          {/* Third Image - 1 column (25% width) */}
          <div className="col-span-1">
            <img
              src={aboutData[2].image}
              alt={aboutData[2].title}
              className="w-full h-full object-cover   "
            />
            <h3 className="text-sm font-medium tracking-wider uppercase text-gray-800 text-center">
              {aboutData[2].title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
