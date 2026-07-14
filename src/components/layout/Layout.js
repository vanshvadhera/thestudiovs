import React from 'react';
import Header from './Header';
import Footer from './Footer';
import InitialLoader from './InitialLoader';

const Layout = ({ children }) => {
  return (
    <div id="ip-container" className="ip-container">
      <InitialLoader />
      <div id="container">
        <div id="top" />
        <Header />
        <div id="content">
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
