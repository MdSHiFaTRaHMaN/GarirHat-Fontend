import {
  TrophyOutlined,
  CarOutlined,
  TagOutlined,
  SwapOutlined,
} from "@ant-design/icons";

const Features = () => {
  const features = [
    {
      icon: <TrophyOutlined className="text-3xl text-blue-500" />,
      title: "Bangladesh's #1",
      description: "Largest Auto portal",
    },
    {
      icon: <CarOutlined className="text-3xl text-blue-500" />,
      title: "Car Sold",
      description: "Every 4 minute",
    },
    {
      icon: <TagOutlined className="text-3xl text-blue-500" />,
      title: "Offers",
      description: "Stay updated pay less",
    },
    {
      icon: <SwapOutlined className="text-3xl text-blue-500" />,
      title: "Compare",
      description: "Decode the right car",
    },
  ];

  return (
    <div className="border-t border-b">
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-2"
          >
            <div>{feature.icon}</div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-sm text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
