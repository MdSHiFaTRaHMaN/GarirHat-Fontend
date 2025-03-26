import Coming from "../../assets/images/actionImg.jpeg"


const Auction = () => {
  return (
    <header>
      <div
        className="w-full bg-center bg-cover h-[28rem] md:h-[48rem] lg:h-[56rem]"
        style={{
          backgroundImage: `url(${Coming})`, // Set the background image using the imported image
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center px-4 md:px-8 lg:px-12">
            <h1 className="text-3xl font-bold text-white lg:text-4xl xl:text-5xl">
              Auction Coming Soon
            </h1>
            <div className="w-full max-w-sm mx-auto mt-6 bg-transparent border bg-white rounded-md">
              <form className="flex flex-col md:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none focus:outline-none focus:placeholder-transparent focus:ring-0"
                />

                <button
                  type="button"
                  className="h-10 px-4 py-2 m-1 !text-white transition-colors duration-300 transform bg-ButtonColor rounded-md hover:!bg-ButtonHover focus:outline-none focus:bg-blue-400"
                >
                  Notify Me
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Auction;
