import LoadingImg from "../assets/images/loadingvehicle.gif";

const LoadingWhile = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
      <div className="w-[90%] max-w-3xl p-6 rounded-lg flex justify-center">
        <img src={LoadingImg} alt="" width={200} className="" />
      </div>
    </div>
  );
};

export default LoadingWhile;
