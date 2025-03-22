import PartsHat from "../../../assets/images/partshat.png";

const Partshat = () => {
  return (
    <header>
      <div
        className="w-full bg-center bg-cover h-[36rem]"
        style={{
          backgroundImage: `url(${PartsHat})`, // Set the background image using the imported image
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white lg:text-4xl">
              Partshat Coming Soon
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
                  className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Partshat;
