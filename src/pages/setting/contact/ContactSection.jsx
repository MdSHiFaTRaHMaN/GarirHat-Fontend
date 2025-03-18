import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaComment,
  } from "react-icons/fa";
  
  const ContactSection = () => {
    return (
      <section className="bg-gray-50 py-12 px-2">
        <div className=" w-full lg:max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Google Map */}
          <div className="w-full">
            <iframe
              className="w-full h-[516px] rounded shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5082.992440604594!2d90.44752958346666!3d23.728267974990672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sae!4v1742287211478!5m2!1sen!2sae"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            ></iframe>
          </div>
  
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-black">
              Always Here <span className="text-TextColor">For You</span>
            </h2>
            <p className="text-gray-500 mb-6">We are always happy to assist you.</p>
  
            <form className="space-y-4">
              <div className="relative">
                <FaUser className="absolute top-4 left-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-10 p-3 border rounded-md"
                />
              </div>
  
              <div className="relative">
                <FaEnvelope className="absolute top-4 left-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full pl-10 p-3 border rounded-md"
                />
              </div>
  
              <div className="relative">
                <FaPhone className="absolute top-4 left-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Your Phone Number"
                  className="w-full pl-10 p-3 border rounded-md"
                />
              </div>
  
              <div className="relative">
                <FaMapMarkerAlt className="absolute top-4 left-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Your Address"
                  className="w-full pl-10 p-3 border rounded-md"
                />
              </div>
  
              <div className="relative">
                <FaComment className="absolute top-4 left-3 text-gray-400" />
                <textarea
                  placeholder="Enter Message"
                  className="w-full pl-10 p-3 border rounded-md h-24"
                ></textarea>
              </div>
  
              <button className="w-full bg-ButtonColor text-white py-3 rounded-md hover:bg-ButtonHover transition">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactSection;
  