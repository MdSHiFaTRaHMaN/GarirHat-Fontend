import { message } from 'antd';
import { useState } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    message.success('Thanks for Your Feedback');
    setName('');
    setEmail('');
    setFeedback('');
  };

  return (
    <div className='bg-gray-100 py-10 px-1 flex justify-center items-center'>
      <div className='bg-white p-8 rounded shadow-lg w-full md:w-2/3 lg:w-1/2'>
        <h2 className='text-2xl font-semibold mb-6 text-center'>We Value Your Feedback!</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Your Name'
            className='w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500'
            required
          />
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Your Email'
            className='w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500'
            required
          />
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder='Share your feedback...'
            className='w-full p-3 h-32 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500'
            required
          ></textarea>
          <button
            type='submit'
            className='w-full bg-ButtonColor text-white py-2 rounded font-semibold hover:bg-ButtonHover transition duration-300'
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
