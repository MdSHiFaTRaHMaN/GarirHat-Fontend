import ErrorImg from "../assets/images/errorimage.jpeg";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
            <img src={ErrorImg} alt="Error" className="w-full h-screen max-w-full mb-6 rounded-lg shadow-lg" />
        </div>
    );
};

export default ErrorPage;
