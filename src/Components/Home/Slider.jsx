import Carousel from "react-elastic-carousel";

const breakPoints = [{ width: 0, itemsToShow: 1 }];

const Slider = () => {
  return (
    <Carousel
      breakPoints={breakPoints}
      pagination={true}
      enableAutoPlay={true}
      isInfinite={true}
      className="h-96 md:h-full"
      renderPagination={({ pages, activePage, onClick }) => (
        <ul className="mt-4 flex justify-center">
          {pages.map((page) => (
            <li key={page}>
              <button
                onClick={() => onClick(page)}
                className={`${
                  activePage === page ? "bg-lime-600" : "bg-gray-300"
                } mx-2 h-4 w-4 rounded-full focus:outline-none`}
              />
            </li>
          ))}
        </ul>
      )}
    >
      <div className="carousel-item h-96 md:h-[623px]">
        <img
          src="https://i.ibb.co/R2w698r/donate-food.jpg"
          className="w-full rounded-2xl object-cover"
        />
      </div>
      <div className="carousel-item h-96 md:h-[623px]">
        <img
          src="https://i.ibb.co/nf4ngNK/360-F-246832089-Fzv-HJyefu0-Fda-Eh-Xd-RGu-MMq-Ffk-X2-Gu0-M.jpg"
          className="w-full rounded-2xl object-cover"
        />
      </div>
      <div className="carousel-item h-96 md:h-[623px]">
        <img
          src="https://i.ibb.co/SyQCfFg/360-F-498475327-1f-Hyor-A3-Pf0-PVe-Oa-IBc5-Xcj-Kvlii-ZCrs.jpg"
          className="w-full rounded-2xl object-cover"
        />
      </div>
      <div className="carousel-item h-96 md:h-[623px]">
        <img
          src="https://i.ibb.co/FKFQXnM/Food-Donation-Items.jpg"
          className="w-full rounded-2xl object-cover"
        />
      </div>
    </Carousel>
  );
};

export default Slider;
