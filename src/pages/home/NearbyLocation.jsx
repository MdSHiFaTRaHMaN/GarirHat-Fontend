import Bangladesh from "../../assets/images/bangladesh.png"

const locations = [
  { name: "Barishal", image: Bangladesh },
  { name: "Dhaka", image: Bangladesh },
  { name: "Chittagong", image: Bangladesh },
  { name: "Rajshahi", image: Bangladesh },
  { name: "Khulna", image: Bangladesh },
  { name: "Sylhet", image: Bangladesh },
  { name: "Rangpur", image: Bangladesh },
  { name: "Mymensingh", image: Bangladesh },
];

const NearbyLocation = () => {
  return (
    <div className="w-full bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">
          Get trusted used cars nearby
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {locations.map((location, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white shadow rounded-lg hover:shadow-md transition"
            >
              <div className="h-[100px] w-[100px] mb-2 flex items-center justify-center rounded-full">
                <img
                  src={location.image}
                  alt={location.name}
                  className="h-[100px] w-[100px] object-contain"
                />
              </div>
              <p className="text-sm text-gray-700 text-center">
                Used cars in <br /> <span className="font-medium text-lg text-black text-center">{location.name}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NearbyLocation;
