import { Breadcrumb } from "antd";
import React from "react";
import FindandShop from "./FindandShop";
import CarSell from "./CarSell";

const UsedCar = () => {
  return (
    <div className="w-full lg:w-11/12 mx-auto">
      <Breadcrumb
        className="py-4 text-lg"
        items={[
          {
            title: "Home",
            href: "/",
          },
          {
            title: "UsedCar",
          },
        ]}
      />
      <FindandShop />
      <CarSell />
    </div>
  );
};

export default UsedCar;
