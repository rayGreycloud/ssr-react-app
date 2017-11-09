import React from 'react';

const Home = () => {
  return (
    <div>
      <h2>There's no place like Home</h2>
      <button onClick={() => console.log('There\'s no place like the HomePage')}>Click heels together</button>
    </div>);
};

export default {
  component: Home
};
