// App.js
import React from 'react';
import Footer from './component/Footer';
import Layout from './component/Layout';
import TopNav from './component/Navbar';


const App = () => {
  return (
    <div>
      <TopNav />
      <Layout />
      <Footer />
    </div>
  );
};

export default App;
