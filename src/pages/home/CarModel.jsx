import { Tabs } from "antd";

const CarModel = () => {
  const carModels = [
    {
      model_name: "Toyota Corolla",
    },
    {
      model_name: "Honda Civic",
    },
    {
      model_name: "Ford Mustang",
    },
    {
      model_name: "Chevrolet Camaro",
    },
    {
      model_name: "Tesla Model S",
    },
    {
      model_name: "BMW X5",
    },
    {
      model_name: "Audi A4",
    },
    {
      model_name: "Mercedes-Benz C-Class",
    },
    {
      model_name: "Jeep Wrangler",
    },
    {
      model_name: "Nissan Altima",
    },
  ];

  const tabList = [
    {
      label: <h3 className="text-xl  ">SUV/Crossover</h3>,
      key: "1",
      children: (
        <ul className="grid grid-cols-3">
          {carModels.map((model, index) => (
            <li key={index} className="text-lg">
              {model.model_name}
            </li>
          ))}
        </ul>
      ),
    },

    {
      label: <h3 className="text-xl">Sedans</h3>,
      key: "2",
      children: (
        <ul className="grid grid-cols-3">
          {carModels.map((model, index) => (
            <li key={index} className="text-lg">
              {model.model_name}
            </li>
          ))}
        </ul>
      ),
    },
    {
      label: <h3 className="text-xl  ">Pickup Tracks</h3>,
      key: "3",
      children: (
        <ul className="grid grid-cols-3">
          {carModels.map((model, index) => (
            <li key={index} className="text-lg">
              {model.model_name}
            </li>
          ))}
        </ul>
      ),
    },
    {
      label: <h3 className="text-xl  ">Hatchbacks</h3>,
      key: "4",
      children: (
        <ul className="grid grid-cols-3">
          {carModels.map((model, index) => (
            <li key={index} className="text-lg">
              {model.model_name}
            </li>
          ))}
        </ul>
      ),
    },
    {
      label: <h3 className="text-xl  ">Vans/Minivans</h3>,
      key: "5",
      children: (
        <ul className="grid grid-cols-3">
          {carModels.map((model, index) => (
            <li key={index} className="text-lg">
              {model.model_name}
            </li>
          ))}
        </ul>
      ),
    },
    {
      label: <h3 className="text-xl  ">Coupes</h3>,
      key: "6",
      children: (
        <ul className="grid grid-cols-3">
          {carModels.map((model, index) => (
            <li key={index} className="text-lg">
              {model.model_name}
            </li>
          ))}
        </ul>
      ),
    },
  ];
  return (
    <div className="w-full lg:w-10/12 mx-auto">
      <Tabs defaultActiveKey="1" items={tabList} className="w-full" />
      <div className="my-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicin magnam voluptatum.
          Rem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla
          magnam voluptatum. Rem.
        </p>
        <p>Lorem ipsum dolor sit atur anulla magnam voluptatum. Rem.</p>
      </div>
    </div>
  );
};

export default CarModel;
