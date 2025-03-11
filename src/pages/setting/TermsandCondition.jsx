import { useTermandConditions } from "../../api/api";

const TermsandCondition = () => {
  const { termandConditions } = useTermandConditions();
  return (
    <div>
      <div className="flex justify-center py-10 bg-ButtonColor text-white ">
        <h1 className="font-semibold text-4xl">Terms and Condition</h1>
      </div>
      <div className="w-full lg:w-10/12 mx-auto my-5">
        <div dangerouslySetInnerHTML={{ __html: termandConditions.content }} />
      </div>
    </div>
  );
};

export default TermsandCondition;
