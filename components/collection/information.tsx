const Information = () => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-12 empty:hidden overflow-hidden px-0 md:mx-10 md:pb-12">
      <div className="col-span-12 flex bg-gray-50 md:max-w-[96%] p-4">
        <div className="flex flex-col gap-3 xs:p-5 lg:w-[40%] lg:p-12">
          <div>
            <h1 className="break-words sm:break-normal hyphens-auto font-serif text-3xl sm:text-4xl font-medium tracking-1.8 uppercase">
              Information
            </h1>
            <h2 className="break-words sm:break-normal hyphens-auto font-serif text-body-lg tracking-0.8 uppercase">
              material
            </h2>
          </div>
          <p className="break-words sm:break-normal hyphens-auto font-serif text-body-lg tracking-0.8">
            Our signature four-ply Cariaggi Cashmere designs are a luxurious and
            distinguished choice for your winter casual looks.
          </p>
        </div>
        <div className="hidden  lg:block relative mt-auto h-full min-h-[300px] w-[55%] items-end xs:hidden lg:block">
          <img
            src="https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/k/m/kmyb_imax_2000x3000-min.jpg"
            alt="banner"
            className="relative left-[16%] top-[14%] h-full object-cover"
            style={{ width: 900, height: 300 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Information;
