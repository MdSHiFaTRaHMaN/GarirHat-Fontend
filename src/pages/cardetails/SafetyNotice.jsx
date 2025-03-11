const SafetyNotice = () => {
  return (
    <div className="w-full py-6 px-4 flex justify-center">
      <div className="bg-white rounded p-6 max-w-2xl w-full border">
        <h2 className="text-xl font-semibold text-center mb-3 text-TextColor">
          Safety Notice
        </h2>
        <ul className="list-disc text-gray-700 pl-5 space-y-2 text-sm">
          <li>
            <span className="font-medium">
              Do not under any circumstances pay in advance.
            </span>
          </li>
          <li>
            Check the car carefully before you buy it. Ask for inspection
            certificates.
          </li>
          <li>
            Check ownership and registration details as well as a vehicle
            logbook.
          </li>
          <li>
            Meet at a safe and public location and bring someone with you.
          </li>
          <li>
            Pay after you collect the car. Always request proof of purchase
            (transfer receipt, email..)
          </li>
          <li>
            Look out for significantly undervalued cars.{" "}
            <span className="font-medium">
              If it looks too good to be true, it probably is.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SafetyNotice;
