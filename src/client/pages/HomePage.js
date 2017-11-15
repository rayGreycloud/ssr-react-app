import React from 'react';
import Helmet from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>SSR App</title>
        <meta property="og:title" content="SSR App" />
      </Helmet>
      <div className="center-align" style={{ marginTop: '200px' }}>
        <h3>Welcome</h3>
        <p>Check out these Awesome Features</p>
      </div>
    </div>
  );
};

export default {
  component: Home
};
