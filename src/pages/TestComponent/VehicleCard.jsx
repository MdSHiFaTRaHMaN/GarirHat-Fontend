// src/components/VehicleCard.jsx
import React from 'react';
import { FaGasPump, FaUsers, FaCarSide, FaCreditCard } from 'react-icons/fa';
import { GiPathDistance } from 'react-icons/gi';
import { Button, Tag, Card } from 'antd';

const vehicles = [
  {
    id: 1,
    name: 'Renault Clio',
    image: 'https://i.ibb.co.com/LzSyPBJ/image-removebg-preview.png', // Replace with actual image
    type: 'Economy',
    fuel: 'Petrol',
    seats: 4,
    deposit: 1000,
    kmLimit: 900,
    price: 776,
    oldPrice: 1127,
    rentalDays: 245.35,
    transmission: 'Manual',
    category: 'Hatch',
  },
  {
    id: 2,
    name: 'Fiat Fiorino',
    image: 'https://i.ibb.co.com/LzSyPBJ/image-removebg-preview.png', // Replace with actual image
    type: 'Economy',
    fuel: 'Diesel',
    seats: 7,
    deposit: 1500,
    kmLimit: 750,
    price: 828,
    oldPrice: 1201,
    rentalDays: 325.45,
    transmission: 'Manual',
    category: 'Minivan',
  },
  {
    id: 3,
    name: 'Renault Kangoo',
    image: 'https://i.ibb.co.com/LzSyPBJ/image-removebg-preview.png', // Replace with actual image
    type: 'Combi',
    fuel: 'Diesel',
    seats: 7,
    deposit: 2000,
    kmLimit: 750,
    price: 828,
    oldPrice: 1201,
    rentalDays: 454.43,
    transmission: 'Manual',
    category: 'Minivan',
  },
  {
    id: 4,
    name: 'Peugeot 301',
    image: 'https://i.ibb.co.com/LzSyPBJ/image-removebg-preview.png', // Replace with actual image
    type: 'Economy',
    fuel: 'Petrol',
    seats: 4,
    deposit: 1500,
    kmLimit: 750,
    price: 828,
    oldPrice: 1201,
    rentalDays: 256.56,
    transmission: 'Manual',
    category: 'Sedan',
  },
  {
    id: 5,
    name: 'Peugeot 301',
    image: 'https://i.ibb.co.com/LzSyPBJ/image-removebg-preview.png', // Replace with actual image
    type: 'Economy',
    fuel: 'Petrol',
    seats: 4,
    deposit: 1500,
    kmLimit: 750,
    price: 828,
    oldPrice: 1201,
    rentalDays: 256.56,
    transmission: 'Manual',
    category: 'Sedan',
  },
  {
    id: 6,
    name: 'Peugeot 301',
    image: 'https://i.ibb.co.com/LzSyPBJ/image-removebg-preview.png', // Replace with actual image
    type: 'Economy',
    fuel: 'Petrol',
    seats: 4,
    deposit: 1500,
    kmLimit: 750,
    price: 828,
    oldPrice: 1201,
    rentalDays: 256.56,
    transmission: 'Manual',
    category: 'Sedan',
  },
  {
    id: 7,
    name: 'Peugeot 301',
    image: 'https://i.ibb.co.com/LzSyPBJ/image-removebg-preview.png', // Replace with actual image
    type: 'Economy',
    fuel: 'Petrol',
    seats: 4,
    deposit: 1500,
    kmLimit: 750,
    price: 828,
    oldPrice: 1201,
    rentalDays: 256.56,
    transmission: 'Manual',
    category: 'Sedan',
  },
  {
    id: 8,
    name: 'Peugeot 301',
    image: 'https://i.ibb.co.com/LzSyPBJ/image-removebg-preview.png', // Replace with actual image
    type: 'Economy',
    fuel: 'Petrol',
    seats: 4,
    deposit: 1500,
    kmLimit: 750,
    price: 828,
    oldPrice: 1201,
    rentalDays: 256.56,
    transmission: 'Manual',
    category: 'Sedan',
  },
];

const VehicleCard = () => {
  return (
    <div className="container mx-auto w-full lg:w-10/12 my-5">
      <h2 className="text-2xl font-bold mb-6">260 Vehicle founded</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {vehicles.map((vehicle) => (
           <div key={vehicle.id} className="mx-auto">
           <div className="border rounded-lg shadow-md p-4">
             {/* Header */}
             <div className="flex items-center justify-between mb-4">
               <h2 className="text-xl font-bold">{vehicle.name}</h2>
               <img
                 src="https://i.ibb.co.com/x6VFcBG/image-removebg-preview-1.png" // Replace with actual brand logo
                 alt="NISSA"
                 className="w-12"
               />
             </div>
     
             {/* Vehicle Image */}
             <img
               src={vehicle.image} // Replace with actual vehicle image
               alt="Fiat Fiorino"
               className="w-full mb-4"
             />
     
             {/* Vehicle Info Tags */}
             <div className="flex items-center gap-2 mb-4">
               <Tag color="gold">{vehicle.type}</Tag>
               <div className="flex items-center gap-1">
                 <FaUsers className="text-gray-600" />
                 <span>{vehicle.seats}</span>
               </div>
             </div>
     
             {/* Features */}
             <div className="grid grid-cols-3 gap-2 mb-4 text-gray-700">
               <div className="flex items-center gap-1">
                 <FaGasPump />
                 <span>{vehicle.fuel}</span>
               </div>
               <div className="flex items-center gap-1">
                 <FaCarSide />
                 <span>{vehicle.category}</span>
               </div>
               <div className="flex items-center gap-1">
                 <span className="font-bold">Manuel</span>
               </div>
             </div>
     
             {/* Pricing and Conditions */}
             <div className="border-t p-2 shadow-md mb-4">
               <div className="grid grid-cols-3 gap-1 text-center">
                 <div>
                   <p className="font-bold">Deposit</p>
                   <p>{vehicle.deposit} TL</p>
                 </div>
                 <div>
                   <p className="font-bold">KM Limit</p>
                   <p>{vehicle.kmLimit} km</p>
                 </div>
                 <div>
                   <p className="font-bold">Credit Card</p>
                   <p>Req.</p>
                 </div>
               </div>
             </div>
     
             {/* Pricing */}
             <div className="text-center mb-4">
               <p className="text-gray-600">
                 {vehicle.rentalDays} TL Per Day <br />
                 <span className="line-through text-red-500">{vehicle.oldPrice} TL</span>
               </p>
               <p className="text-2xl font-bold text-blue-600">{vehicle.price} TL</p>
             </div>
     
             {/* Rent Button */}
             <Button type="primary" block className="bg-blue-600">
               RENT NOW
             </Button>
           </div>
         </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleCard;
