import { FaPhoneAlt } from "react-icons/fa";
import { PiClockCountdownFill } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import ContactSection from "./ContactSection";
import Other from "./Other";

const ContactUs = () => {
  return (
    <section className="bg-gray-50 py-12 px-2">
      <div className="w-full lg:max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black">
          Contact <span className="text-TextColor">Us</span>
        </h2>
        <p className="text-gray-600 mt-2">We are always happy to assist you.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl roundeds mx-auto bg-blue-50 p-7">
        {/* Visit Us */}
        <div className="text-center border-r-2">
          <SlLocationPin className="text-TextColor text-6xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg">Visit Us</h3>
          <p className="text-gray-600 mt-1">
            GARIRHAT Office, <br />
            Block A, Road 14, House No #9, Green Model Town, Mugda, Motheej,
            Dhaka
          </p>
        </div>

        {/* Contact Us */}
        <div className="text-center">
          <FaPhoneAlt className="text-TextColor text-6xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg">Contact Us</h3>
          <p className="text-gray-600 mt-1">
            Office: +1 (833) 486-4328 <br />
            Email: info@garirhat.com
          </p>
        </div>

        {/* Opening Hour */}
        <div className="text-center border-l-2">
          <PiClockCountdownFill className="text-TextColor text-6xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg">Opening Hour</h3>
          <p className="text-gray-600 mt-1">
            Saturday to Thursday: 9am to 8pm <br />
            <span className="text-sm">(Excluding Public Holidays)</span>
          </p>
        </div>
      </div>
      <ContactSection />
      <Other />
    </section>
  );
};

export default ContactUs;
