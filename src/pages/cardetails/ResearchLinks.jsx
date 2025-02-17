import { CheckCircleOutlined } from "@ant-design/icons";

const ResearchLinks = () => {
  const links = [
    { text: "Used cars in Kolkata in 72 Lakh to 108 Lakh", url: "#" },
    { text: "Used Petrol SUV cars in Kolkata", url: "#" },
    { text: "Used SUV cars in Kolkata", url: "#" },
    { text: "Used BMW cars in Kolkata", url: "#" },
    { text: "2024 model & newer BMW cars", url: "#" },
  ];

  return (
    <div className="mx-auto p-10 bg-white">
      <h2 className="text-lg font-semibold mb-4">For Your Further Research</h2>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircleOutlined className="text-green-500 text-lg" />
            <a
              href={link.url}
              className="text-blue-600 hover:underline text-sm sm:text-base"
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
