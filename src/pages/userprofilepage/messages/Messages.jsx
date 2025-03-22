import SidebarForMessages from "./SidebarForMessages";
import MessageBox from "./MessageBox";
import { useUserProfile } from "../../../api/api";

function Messages() {
  const { userProfile } = useUserProfile();
  const userID = userProfile?.id;

  return (
    <div className="h-screen mb-20 md:mb-1 lg:mb-1 p-4 md:p-6 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
        <div className="md:col-span-1 border-r border-gray-300 p-2 bg-white rounded-lg shadow-md">
          <SidebarForMessages userID={userID} />
        </div>
        <div className="md:col-span-2 p-2 bg-white rounded-lg shadow-md flex flex-col justify-between">
          <MessageBox userID={userID} />
        </div>
      </div>
    </div>
  );
}

export default Messages;
