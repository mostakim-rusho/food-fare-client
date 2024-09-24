const UsersReview = () => {
  return (
    <div className="col-span-2 mt-12 flex flex-col gap-4 lg:col-span-1">
      <h1
        data-aos="fade-up"
        data-aos-duration="1500"
        className="text-center text-3xl font-bold text-lime-600"
      >
        Our Top Review
      </h1>
      <br />
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="rounded-2xl border border-lime-400 p-4 shadow-xl shadow-lime-50"
      >
        <h1 className="pb-2 text-2xl font-bold">Emily Smith</h1>
        <h2 className="text-lg font-medium">Amazing Experience!</h2>
        <p className="pl-4 text-gray-500">
          I stumbled upon Food Fare while looking for ways to give back to my
          community, and I am so glad I did! The platform user-friendly
          interface made it easy for me to donate excess food from my restaurant
          to those in need. The whole process, from listing the items to
          arranging pickups, was seamless and efficient.
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="rounded-2xl border border-lime-400 p-4 shadow-xl shadow-lime-50"
      >
        <h1 className="pb-2 text-2xl font-bold">David Johnson</h1>
        <h2 className="text-lg font-medium">Exceeded Expectations!</h2>
        <p className="pl-4 text-gray-500">
          As a regular user of Food Fare, I am continually impressed by the
          impact it is making in tackling food insecurity. Not only does it
          provide a convenient way for individuals and businesses to donate
          surplus food, but it also ensures that those in need can access fresh,
          nutritious meals.
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="rounded-2xl border border-lime-400 p-4 shadow-xl shadow-lime-50"
      >
        <h1 className="pb-2 text-2xl font-bold">Michael Brown</h1>
        <h2 className="text-lg font-medium">Best Tour Ever!</h2>
        <p className="pl-4 text-gray-500">
          Our nonprofit organization relies heavily on donations to support our
          community initiatives, and Food Fare has been a lifesaver for us. The
          platform has connected us with local businesses and individuals
          willing to donate food items regularly. This consistent support has
          allowed us to expand our outreach and provide essential meals to
          vulnerable populations.
        </p>
      </div>
    </div>
  );
};

export default UsersReview;
