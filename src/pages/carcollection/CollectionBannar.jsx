import CarBannar from "../../assets/images/collectioncarbannar.png";

const CollectionBannar = () => {
  return (
    <div
      className="w-full bg-center bg-cover h-[23rem]"
      style={{ backgroundImage: `url(${CarBannar})` }}
    >
      <div className="flex items-center w-full h-full bg-gray-900/40">
      <div className="bg-[#75483e] p-36 lg:p-44 rounded-full  bg-inherit absolute"></div>
        <div className="ml-[9%] relative">
          <h1 className="text-3xl font-bold text-white lg:text-5xl">
            Curated Car Collections <br />
            Browse Now!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CollectionBannar;
