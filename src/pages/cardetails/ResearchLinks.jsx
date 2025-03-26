import { CheckCircleOutlined } from "@ant-design/icons";

const ResearchLinks = () => {
  const links = [
    { text: "Used cars in Dhaka in 72 Lakh to 108 Lakh", url: "/car-details/3" },
    { text: "Used Petrol SUV cars in Dhaka", url: "/car-details/4" },
    { text: "Used SUV cars in Dhaka", url: "/car-details/5" },
    { text: "Used BMW cars in Dhaka", url: "/car-details/6" },
    { text: "2024 Model & newer Populer cars", url: "/car-details/7" },
  ];

  return (
    <div className="mx-auto p-10 bg-white">
      <h2 className="text-lg font-semibold mb-4">For Your Further Research</h2>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircleOutlined className="text-TextColor text-lg" />
            <a
              href={link.url}
              className="text-TextColor hover:underline text-sm sm:text-base"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResearchLinks;
