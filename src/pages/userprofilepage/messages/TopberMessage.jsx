import React, { useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, Spin } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useSingleUserMessage } from "../../../api/api";

const { Search } = Input;

function TopberMessage({ senderId, userId, setProfilePic }) {
  const singleUserParams = {
    sender_id: senderId,
    receiver_id: userId ,
  };

  console.log(singleUserParams)

  const { singleUserMessage, isLoading, isError, error, refetch } =
    useSingleUserMessage(singleUserParams);

  useEffect(() => {
    refetch();
  }, [senderId, userId, refetch]);

  useEffect(() => {
    if (singleUserMessage?.data?.profile_pic) {
      setProfilePic(singleUserMessage.data.profile_pic);
    }
  }, [singleUserMessage, setProfilePic]);

  if (isLoading) {
    return <Spin />;
  }

  const {
    email,
    id,
    is_active,
    name,
    phone,
    profile_pic,
    sign_up_method,
    status,
    uid,
    vehicles,
  } = singleUserMessage?.data;

  return (
    <div className="mt-2 bg-gray-300 p-2 rounded">
      <div className="flex w-full">
        <div className="self-center mr-2 relative">
          <Avatar
            size="large"
            icon={!profile_pic ? <UserOutlined /> : null}
            src={profile_pic ? profile_pic : undefined}
          />

          <span
            className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
              is_active ? "bg-green-500" : "bg-gray-400"
            }`}
          ></span>
        </div>
        <div className="flex justify-between w-full">
          <h1 className="self-center">
            {name}{" "}
            <span>
              ({vehicles[0]?.vehicle_code}) {vehicles[0]?.make}{" "}
              {vehicles[0]?.model}
            </span>
          </h1>
          <div className="self-center">
            <Button icon={<InfoCircleOutlined />} type="link">
              More Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopberMessage;
