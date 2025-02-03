import {
  ShoppingCartOutlined,
  CarOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Car from "../../assets/images/cart.svg";
import Minutes from "../../assets/images/minutes.svg";
import Shopway from "../../assets/images/shopway.svg";

const WhyGarirHat = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-16 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8">Why TrueCar?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Transparent Pricing */}
        <div className="flex flex-col items-center">
          <img src={Car} alt="" />
          <h3 className="text-xl font-semibold">Transparent pricing</h3>
          <p className="text-gray-400 max-w-xs mt-2">
            No surprises here. See how much you’ll pay on cars you like.
          </p>
        </div>
        {/* Minutes, Not Hours */}
        <div className="flex flex-col items-center">
          <img src={Minutes} alt="" />
          <h3 className="text-xl font-semibold">Minutes, not hours</h3>
          <p className="text-gray-400 max-w-xs mt-2">
            Time-saving tools to help you find the right car in a snap.
          </p>
        </div>
        {/* Shop Your Way */}
        <div className="flex flex-col items-center">
          <img src={Shopway} alt="" />
          <h3 className="text-xl font-semibold">Shop your way</h3>
          <p className="text-gray-400 max-w-xs mt-2">
            Your own pace, your own space. Shop online where and when it’s
            convenient for you.
          </p>
        </div>
      </div>
      <button className="mt-8 bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition">
        Sign up
      </button>
    </div>
  );
};

export default WhyGarirHat;
