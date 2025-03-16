import { Button, Card, message, Modal } from "antd";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import Profile from "../../assets/images/profilePic.png";
import { API, useUserProfile } from "../../api/api";
import LoadingWhile from "../../components/LoadingWhile";
import EditProfile from "./EditProfile";
import { DeleteOutlined } from "@ant-design/icons";

const UserProfile = () => {
  const { userProfile, refetch, isLoading } = useUserProfile();

  const handleDelete = async (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete this Account?",
      content: "This action cannot be undone.",
      okText: "Yes, Delete",
      cancelText: "Cancel",
      okType: "danger",
      onOk: async () => {
        try {
          await API.delete(`/user/delete/${id}`);
          message.success("User deleted successfully!");
          refetch();
          // Optionally refresh your data here
        } catch (error) {
          console.error("Error deleting user:", error);
          message.error("Failed to delete the user. Please try again.");
        }
      },
      onCancel() {
        console.log("Deletion cancelled.");
      },
    });
  };

  if (isLoading) {
    return <LoadingWhile />;
  }

  return (
    <div className="p-6">
      {/* Profile Card */}
      <div className="flex flex-col gap-6 lg:flex-row justify-center items-center lg:justify-between">
        <Card className="w-full lg:w-3/5 p-6 rounded shadow">
          <div className="flex justify-end">
            <EditProfile userData={userProfile} refetch={refetch} />
          </div>
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
          <div className="mt-4 flex justify-end items-center">
            <Button
              onClick={() => handleDelete(userProfile.id)}
              className="bg-red-700 hover:!bg-red-900 !text-white font-semibold"
            >
              <DeleteOutlined /> Delete Account
            </Button>
          </div>
        </Card>

        {/* xPay Accounts & Bills Section */}
        <div className="w-full lg:w-2/5 flex flex-col gap-6">
          <Card className="w-full p-4 rounded shadow">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Interested Car List</h3>
            </div>
            <div className="mt-4 space-y-2">
              {[{ name: "2025 BMW Series B3 F3M", status: "F34F" },
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
    </div>
  );
};

export default UserProfile;
