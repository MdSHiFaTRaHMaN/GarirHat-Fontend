import React from 'react';
import { Card } from 'antd';
import { MdPieChartOutlined } from 'react-icons/md';

const features = [
  {
    title: 'Prepayment Possibility',
    description:
      'You can pay a small part of the fee during the booking process and make the remaining fee when you pick up your car.',
  },
  {
    title: 'Free Cancellation',
    description:
      'Free cancellation and instant refund for all your reservation transactions.',
  },
  {
    title: '7/24 Guest Services',
    description:
      'Our guest services team is at your service 24/7 for all your reservation procedures.',
  },
  {
    title: 'Best Prices',
    description:
      'Possibility to compare the most suitable vehicles for your budget in the date range you want, wherever you need.',
  },
  {
    title: 'Easy and Safe Hire',
    description:
      'Safe car hire from companies that attach importance to corporate and individual customer satisfaction.',
  },
  {
    title: 'Hundreds of Brands and Models',
    description:
      'Possibility to list and rent different brands and models of vehicles from corporate companies.',
  },
];

const FeatureComponent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="border rounded-lg shadow-sm hover:shadow-lg transition duration-200"
          bodyStyle={{ padding: '16px' }}
          title={<h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>}
        >
          <div className="flex items-start">
            <MdPieChartOutlined className="text-xl text-blue-500 mr-3" />
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default FeatureComponent;
