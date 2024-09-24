const Feedback = () => {
  return (
    <div className="col-span-2 flex  flex-col gap-4 rounded-xl lg:col-span-1  mt-12">
      <h1
        data-aos="fade-up"
        data-aos-duration="1500"
        className="text-center text-3xl font-bold text-lime-600"
      >
        Your Valuable Feedback
      </h1>
      <br />
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="flex h-full flex-col rounded-2xl border border-lime-400 shadow-xl shadow-lime-50 p-4"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="email"
            placeholder="Your name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Review Topic Name</span>
          </label>
          <input
            type="email"
            placeholder="Such As Memorable Adventure!"
            className="input input-bordered"
          />
        </div>
        <div className="form-control grow">
          <label className="label">
            <span className="label-text">Review Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered flex grow"
            placeholder="Provide Your Experience"
          ></textarea>
        </div>
        <br />
        <button className="btn btn-outline mt-3 w-full  border border-lime-600 bg-transparent text-lg text-lime-600  hover:border-lime-600 hover:bg-lime-600 hover:text-white">Submit</button>
      </div>
    </div>
  );
};

export default Feedback;
