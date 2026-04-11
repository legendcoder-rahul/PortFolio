import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';

const Contributions = () => {
  return (
    <div className='flex flex-col justify-center px-10 ' >
      <h1 className='text-4xl text-center font-bold mb-4'>GitHub Contributions</h1>
      {/* Replace 'your-github-username' with your actual GitHub username */}
      <GitHubCalendar 
        className='border border-gray-600 rounded-lg p-4'
        username="legendcoder-rahul" 
        blockSize={15}
        blockMargin={5}
        colorScheme="dark" 
        fontSize={16}
        />
        
    </div>
  );
};

export default Contributions;