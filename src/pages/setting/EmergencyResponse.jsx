import Img from "../../assets/images/AmbulanceServices.png";

const EmergencyResponse = () => {
  return (
    <header>
      <div
        className="w-full bg-center bg-cover lg:h-[36rem] h-[24rem] md:h-[30rem]"
        style={{
          backgroundImage: `url(${Img})`, // Set the background image using the imported image
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center px-4">
            <h1 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Emergency Response Coming Soon
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

export default EmergencyResponse;
