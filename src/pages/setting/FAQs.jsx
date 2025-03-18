import { Collapse } from "antd";

const FAQs = () => {
  const items = [
    {
      key: "1",
      label: (
        <span className="text-lg font-semibold">Can I buy a car online?</span>
      ),
      children: (
        <div>
          <p className="font-semibold text-sm">
            Yes of course, you can <a href="#">sell your car</a> at Garirhat
            whether you <a href="#">buy a car</a> from us or not.
          </p>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <span className="text-lg font-semibold">
          What do I need to do to sell my car?{" "}
        </span>
      ),
      children: (
        <div className="font-semibold text-sm">
          <p className="font-semibold text-sm">
            To complete your transaction, you may be required to provide any or
            all of the following:
          </p>
          <ul>
            <li>NID Photocopy</li>
            <li>Proof of phone no</li>
            <li>
              <span style={{ color: "red" }}>TIN Certificate</span>
            </li>
          </ul>
          <p>
            Documentation not listed above may also be required. Your sales
            consultant will be able to tell you what documentation you will
            actually need.
          </p>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <span className="text-lg font-semibold">
          Do I have to have insurance if I buy a car?
        </span>
      ),
      children: (
        <div>
          <p className="font-semibold text-sm">
            Garirhat will soon launch its own car insurance service, where the
            insurance service will be easy for you.
          </p>
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <span className="text-lg font-semibold">
          Why should I buy from Garirhat.com?,
        </span>
      ),

      children: (
        <div className="font-semibold text-sm">
          <p>
            You can trust Garirhat for a hassle-free buying and{" "}
            <a href="#">selling</a> experience. We offer the best selection of{" "}
            <a href="#">used</a>, reconditioned, and brand new cars for you to
            pick from. You can select the car you want according to your budget
            and your preference. Our platform is free of trouble and worthy of
            confidence.
          </p>
        </div>
      ),
    },
    {
      key: "5",
      label: (
        <span className="text-lg font-semibold">
          How would I make payment to the seller?
        </span>
      ),
      children: (
        <div>
          <p className="font-semibold text-sm">
            You will pay through Garirhat.com by choosing one of our preferred
            payment methods.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div>
      <h1 className="flex justify-center py-10 bg-ButtonColor text-white font-semibold text-4xl">
        Frequently Asked Questions
      </h1>
      <div className="w-full lg:w-6/12 mx-auto">
        <Collapse
          items={items}
          bordered={false}
          ghost
          defaultActiveKey={["1"]}
        />
      </div>
    </div>
  );
};

export default FAQs;
