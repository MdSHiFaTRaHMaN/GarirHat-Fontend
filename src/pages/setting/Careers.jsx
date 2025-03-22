import { FaBriefcase, FaUserTie, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const jobListings = [
  {
    title: "Sales Executive",
    department: "Sales & Marketing",
    location: "Dhaka, Bangladesh",
    description:
      "Responsible for managing customer relationships, achieving sales targets, and expanding market reach.",
  },
  {
    title: "Software Engineer",
    department: "IT & Development",
    location: "Remote",
    description:
      "Develop and maintain web applications, ensuring efficiency, scalability, and performance.",
  },
  {
    title: "Customer Support Specialist",
    department: "Customer Service",
    location: "Dhaka, Bangladesh",
    description:
      "Assist customers with their inquiries, resolve issues, and provide exceptional service.",
  },
];

const Careers = () => {
  return (
    <div className="p-6 w-full lg:w-10/12 mx-auto">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <FaBriefcase className="mr-2" /> Careers With Us
      </h2>
      <p className="mb-6 text-gray-700">
        Join our team at GarirHat and be part of a dynamic, innovative
        environment where your skills can thrive.
      </p>

      {jobListings.map((job, index) => (
        <div key={index} className="mb-6 p-4 border border-gray-300 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <FaUserTie className="mr-2" /> {job.title}
          </h3>
          <p>
            <strong>Department:</strong> {job.department}
          </p>
          <p>
            <strong>Location:</strong> {job.location}
          </p>
          <p className="mb-3">
            <strong>Description:</strong> {job.description}
          </p>
        </div>
      ))}

      <div className="mt-8 p-4 border-t border-gray-300">
        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
        <p className="flex items-center">
          <FaEnvelope className="mr-2" /> Email: careers@garirhat.com
        </p>
        <p className="flex items-center">
          <FaPhoneAlt className="mr-2" /> Phone: +8801234567890
        </p>
      </div>
    </div>
  );
};

export default Careers;
