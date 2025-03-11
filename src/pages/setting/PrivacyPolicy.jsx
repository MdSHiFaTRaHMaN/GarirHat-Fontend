import { usePrivacyAndPolicy } from "../../api/api";

const PrivacyPolicy = () => {
    const { PrivacyAndPolicy } = usePrivacyAndPolicy();
  return (
    <div>
      <div className="flex justify-center py-10 bg-ButtonColor text-white ">
        <h1 className="font-semibold text-4xl">Privacy & Policy</h1>
      </div>
      <div className="w-full lg:w-10/12 mx-auto my-5">
        <div dangerouslySetInnerHTML={{ __html: PrivacyAndPolicy.content }} />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
