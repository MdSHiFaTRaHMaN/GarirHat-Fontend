import { useAboutUs } from "../../api/api";

const About = () => {
  const { aboutUs } = useAboutUs();
  return (
    <div>
      <div className="flex justify-center py-10 bg-ButtonColor text-white ">
        <h1 className="font-semibold text-4xl">About US</h1>
      </div>
      <div className="w-full lg:w-10/12 mx-auto my-5 p-3">
      <div dangerouslySetInnerHTML={{ __html: aboutUs.content }} />
      </div>
    </div>
  );
};

export default About;
