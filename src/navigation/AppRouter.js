import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import BlogListing from '../pages/BlogListing';
import SingleProject from '../pages/SingleProject';
import SinglePost from '../pages/SinglePost';

const AppRouter = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<BlogListing />} />
        <Route path="/project/:id" element={<SingleProject />} />
        <Route path="/blog/:id" element={<SinglePost />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default AppRouter;
