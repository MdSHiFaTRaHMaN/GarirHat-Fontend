import { FaQuestionCircle } from "react-icons/fa";

const faqData = [
  {
    category: "GarirHat Vendor FAQ (For Sellers)",
    questions: [
      {
        q: "What is GarirHat?",
        a: "GarirHat is an online platform where vendors can list their motor vehicles for sale. It connects sellers with potential buyers efficiently.",
      },
      {
        q: "How do I register as a vendor?",
        a: 'To register, visit our website, click on "Sign Up," select "Vendor Account," and fill in the required details. After verification, you can start listing vehicles.',
      },
      {
        q: "Is there a fee for listing my vehicle?",
        a: "GarirHat offers both free and premium listing options. Free listings have limited visibility, while premium listings provide better exposure.",
      },
      {
        q: "How do I create a vehicle listing?",
        a: 'Once logged in, go to your dashboard and click "Add Listing." Provide details such as make, model, year, price, and upload high-quality images.',
      },
      {
        q: "How can I increase my vehicle’s visibility?",
        a: "Opt for premium listings, use high-quality images, write detailed descriptions, and respond promptly to buyer inquiries.",
      },
      {
        q: "Can I edit or remove my listing?",
        a: "Yes, you can manage your listings through your vendor dashboard. You can edit or delete any listing at any time.",
      },
      {
        q: "How do I communicate with buyers?",
        a: "Buyers can contact you via the messaging system on GarirHat. You will be notified of any inquiries via email or SMS.",
      },
      {
        q: "How do I receive payments?",
        a: "GarirHat does not process payments directly. You can negotiate and finalize transactions with buyers independently.",
      },
      {
        q: "What should I do if I encounter fraudulent buyers?",
        a: "If you suspect fraud, avoid sharing personal or banking details. Report suspicious users via our support system.",
      },
      {
        q: "How can I contact customer support?",
        a: 'You can reach our support team through the "Help" section on our website or email us at support@garirhat.com.',
      },
    ],
  },
  {
    category: "GarirHat User FAQ (For Buyers)",
    questions: [
      {
        q: "What is GarirHat?",
        a: "GarirHat is an online platform where users can browse, compare, and purchase motor vehicles from various sellers.",
      },
      {
        q: "How do I create an account?",
        a: 'Click on "Sign Up," select "User Account," and complete the registration form. You will receive a confirmation email.',
      },
      {
        q: "How can I search for vehicles?",
        a: "Use the search bar and filters to find vehicles based on make, model, price, year, and location.",
      },
      {
        q: "Do I need to pay to browse listings?",
        a: "No, browsing and searching for vehicles on GarirHat is completely free.",
      },
      {
        q: "How do I contact a seller?",
        a: 'Click on a listing and use the "Contact Seller" button to send a message. You can also find the seller’s phone number if they have provided it.',
      },
      {
        q: "Can I negotiate the price with the seller?",
        a: "Yes, pricing is set by the vendor, but you can negotiate directly with them.",
      },
      {
        q: "How do I ensure a safe transaction?",
        a: "Meet in a safe public place, inspect the vehicle thoroughly, verify documents, and avoid sending advance payments without verification.",
      },
      {
        q: "What should I do if I suspect a fraudulent listing?",
        a: 'If you come across a suspicious listing, use the "Report" button or contact our support team immediately.',
      },
      {
        q: "Does GarirHat offer any guarantees on purchases?",
        a: "GarirHat is a marketplace and does not offer warranties. Buyers should verify the vehicle condition and documentation before purchasing.",
      },
      {
        q: "How can I contact customer support?",
        a: 'For any queries, visit the "Help" section or email us at support@garirhat.com.',
      },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="w-full lg:w-10/12 p-3 mx-auto">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <FaQuestionCircle className="mr-2 text-TextColor" /> GarirHat FAQ
      </h2>
      {faqData.map((section, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold mb-2">{section.category}</h3>
          {section.questions.map((item, idx) => (
            <div
              key={idx}
              className="mb-2 p-3 border border-gray-300 rounded-lg"
            >
              <p className="font-medium">{item.q}</p>
              <p className="text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
