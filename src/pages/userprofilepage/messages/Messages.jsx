import SidebarForMessages from "./SidebarForMessages";
import MessageBox from "./MessageBox";
import { useUserProfile } from "../../../api/api";

function Messages() {
  const { userProfile } = useUserProfile();

  const userID = userProfile.id;

  return (
    <div>
      <div className="grid grid-cols-3 gap-3 h-[75vh]">
        <div className="">
          <SidebarForMessages userID={userID} />
        </div>
        <div className="col-span-2">
          <MessageBox userID={userID} />
        </div>
      </div>
    </div>
  );
}

export default Messages;
