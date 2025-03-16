const SafetyNotice = () => {
  return (
    <div className="w-full py-6 px- flex justify-center">
      <div className="bg-white rounded p-6  w-full border">
        <h2 className="text-xl font-semibold text-center mb-3 text-TextColor">
          Safety Notice
        </h2>
        <ul className="text-gray-700 pl-5 space-y-2 text-sm list-none">
          <li>
            <span className="font-medium">
              <span className="text-red-600 text-xl">*</span> Do not under any
              circumstances pay in advance.
            </span>
          </li>
          <li>
            <span className="text-red-600 text-xl">*</span> Check the car
            carefully before you buy it. Ask for inspection certificates.
          </li>
          <li>
            <span className="text-red-600 text-xl">*</span> Check ownership and
            registration details as well as a vehicle logbook.
          </li>
          <li>
            <span className="text-red-600 text-xl">*</span> Meet at a safe and
            public location and bring someone with you.
          </li>
          <li>
            <span className="text-red-600 text-xl">*</span> Pay after you
            collect the car. Always request proof of purchase (transfer receipt,
            email..)
          </li>
          <li>
            <span className="text-red-600 text-xl">*</span> Look out for
            significantly undervalued cars.{" "}
            <span className="font-medium">
              good to be true, it probably is.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SafetyNotice;
