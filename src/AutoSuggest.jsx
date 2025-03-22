import { Button } from "antd";
import Image from "./assets/images/Al-Hasan.jpg";
import { FacebookFilled } from "@ant-design/icons";
import { useSingleVechile } from "./api/api";

const FacebookSharePost = () => {
  const { singleVechile } = useSingleVechile(1);
  const handleFacebookShare = () => {
    const url = encodeURIComponent("https://dev.garirhat.com/car-details/1"); // The link to share
    // const imageUrl = encodeURIComponent(singleVechile.thumbnail_image); // Image URL to share
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&picture=https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg`;
  
    window.open(facebookShareUrl, "_blank", "width=600,height=400");
  };

  return (
    <div className="m-9">
      <div className="w-[300px] mx-auto bg-gray-200 p-3 text-center">
        <img src={singleVechile.thumbnail_image} alt="Shakib al Hasan" className="w-full h-auto rounded-lg" />
        <h2 className="text-xl font-bold mt-2">{singleVechile.make}</h2>
        <p className="text-gray-600">shakibalhasan@gmail.com</p>
      </div>
      <Button onClick={handleFacebookShare} type="primary" className="mt-3">
        <FacebookFilled /> Post
      </Button>
    </div>
  );
};

export default FacebookSharePost;

