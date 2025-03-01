import { Button, Card, Switch } from "antd";
import { EditOutlined, SearchOutlined } from "@ant-design/icons";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import Profile from "../../assets/images/profilePic.png";
import { useUserProfile } from "../../api/api";
import LoadingWhile from "../../components/LoadingWhile";

const UserProfile = () => {
  const { userProfile, isLoading } = useUserProfile();
  if(isLoading) {
    return <LoadingWhile />
  }
  return (
    <div className="flex gap-6 p-6 justify-center">
      {/* Profile Card */}
      <Card className="w- p-6 rounded shadow w-3/5">
        <img
          src={userProfile.profile_pic || Profile} // Replace with actual image
          alt="User"
          className="w-32 h-32 rounded-full mx-auto"
        />
        <h2 className="text-lg font-semibold text-center mt-3">
          {userProfile.name}
        </h2>
        <div className="mt-4 space-y-2 text-sm">
          <p className="flex items-center gap-2">
            <FiPhoneCall className="text-blue-500" />
            {userProfile.phone || "N/A"}
          </p>
          <p className="flex items-center gap-2">
            <FiMail className="text-red-500" />
            {userProfile.email}
          </p>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm font-medium">SMS alerts activation</span>
          <Switch defaultChecked />
        </div>
        {/* 
        <Button className="w-full mt-4 bg-ButtonColor border-none hover:!bg-ButtonHover !font-semibold">
          Save
        </Button> */}
      </Card>

      {/* xPay Accounts & Bills Section */}
      <div className="flex flex-col gap-6 w-2/5">
        {/* My Bills */}
        <Card className="w-full max-w-md p-4 rounded shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Interested Car List</h3>
          </div>
          <div className="mt-4 space-y-2">
            {[
              { name: "2025 BMW Series B3 F3M", status: "F34F" },
              { name: "2025 BMW Series B3 F3M", status: "F34F" },
              { name: "2025 BMW Series B3 F3M", status: "F34F" },
              { name: "2025 BMW Series B3 F3M", status: "F34F" },
              { name: "2025 BMW Series B3 F3M", status: "F34F" },
            ].map((bill, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm">{bill.name}</span>
                <span className="px-3 py-1 text-xs font-medium rounded-sm bg-ButtonColor text-white font-semibold">
                  {bill.status}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UserProfile;
