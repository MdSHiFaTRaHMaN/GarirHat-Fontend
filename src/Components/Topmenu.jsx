import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";

const Topmenu = () => {
  // const newcar = (
  //   <Menu
  //     className="space-y-1.5"
  //     items={[
  //       { key: "1", label: <a href="#">Explore New Car</a> },
  //       { type: "divider" },
  //       { key: "2", label: <a href="#">Popular Car</a> },
  //       { type: "divider" },
  //       { key: "3", label: <a href="#">Upcoming Car</a> },
  //       { type: "divider" },
  //       { key: "4", label: <a href="#">New Launches</a> },
  //       { type: "divider" },
  //       { key: "5", label: <a href="#">Popular Brand</a> },
  //       { type: "divider" },
  //       { key: "6", label: <a href="#">New Car Offer & Discount</a> },
  //     ]}
  //   />
  // );

  // const usedcar = (
  //   <Menu
  //     className="space-y-1.5"
  //     items={[
  //       { key: "1", label: <a href="#">Buy Used Car</a> },
  //       { type: "divider" },
  //       { key: "2", label: <a href="#">Used Car In Your City</a> },
  //       { type: "divider" },
  //       { key: "3", label: <a href="#">Sell Your Car</a> },
  //       { type: "divider" },
  //       { key: "4", label: <a href="#">Dealership Near Me</a> },
  //     ]}
  //   />
  // );

  const newsreview = (
    <Menu
      className="space-y-1.5"
      items={[
        {
          key: "1",
          label: <Link to="/news-and-stories">News & Top Stories</Link>,
        },
        { type: "divider" },
        { key: "2", label: <Link to="/car-expert-review">Car Expert Review</Link> },
        { type: "divider" },
        { key: "3", label: <Link to="/car-review">User Review</Link> },
        { type: "divider" },
        { key: "4", label: <a href="#">Car Collection</a> },
      ]}
    />
  );

  // const videos = (
  //   <Menu
  //     className="space-y-1.5"
  //     items={[
  //       { key: "1", label: <a href="#">Video Reviews</a> },
  //       { type: "divider" },
  //       { key: "2", label: <a href="#">Tips & Advice</a> },
  //     ]}
  //   />
  // );

  return (
    <div className=" border-t shadow-lg">
      {/* Navigation Menu */}
      <div className="w-full p-4 lg:w-10/12 mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-6">
          {/* <Dropdown overlay={newcar} trigger={["hover"]}>
          <a onClick={(e) => e.preventDefault()}> */}
          <Space>
            <Link to="/new-car">
              <span className="font-semibold text-gray-700 text-sm">
                NEW CARS
              </span>
            </Link>
            {/* <CaretDownOutlined className="text-gray-700"/> */}
          </Space>
          {/* </a>
        </Dropdown> */}
          {/* <Dropdown overlay={usedcar} trigger={["hover"]}>
          <a onClick={(e) => e.preventDefault()}> */}
          <Space>
            <span className="font-semibold text-gray-700 text-sm">
              USED CARS
            </span>
            {/* <CaretDownOutlined className="text-gray-700"/> */}
          </Space>
          {/* </a>
        </Dropdown> */}
          <Space>
            <span className="font-semibold text-gray-700 text-sm">SELL MY CAR</span>
          </Space>
          <Dropdown overlay={newsreview} trigger={["hover"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <span className="font-semibold text-gray-700 text-sm">
                  NEWS & REVIEWS
                </span>
                <CaretDownOutlined className="text-gray-700" />
              </Space>
            </a>
          </Dropdown>
          {/* <Dropdown overlay={videos} trigger={["hover"]}>
            <a onClick={(e) => e.preventDefault()}> */}
          <Space>
            <span className="font-semibold text-gray-700 text-sm">VIDEOS</span>
          </Space>
          {/* </a>
          </Dropdown> */}
        </div>
        <div className="flex items-center text-gray-600 font-semibold gap-1">
          <GrLocation />
          <h3>Barishal</h3>
        </div>
      </div>
    </div>
  );
};

export default Topmenu;
