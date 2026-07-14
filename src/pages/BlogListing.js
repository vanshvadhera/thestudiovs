import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../assets';

const BlogListing = () => {
  const titles = [
    'Designing with balance and care',
    'Give your dreams reality',
    'The art of building',
    'A whole different designing',
    'Building on the ninth cloud',
    'Providing innovative designs',
    'Connecting, creating',
    'We focus on design comfort',
  ];

  const blogPosts = titles.map((title, index) => ({
    id: index + 1,
    image: images.blog[index % images.blog.length],
    category: 'Business',
    time: '9 Hours ago',
    title,
    description:
      'Individuals require a place to live, work, play, learn, shop, and eat. Architects are in charge of planning these',
    link: `/blog/${index + 1}`,
  }));

  return (
    <>
      <section className="page-banner-section">
        <div className="container">
          <h1>Blog Grid</h1>
          <p>Give your dreams a shape of reality</p>
        </div>
      </section>

      <section className="blog-section">
        <div className="section-title">
          <h1>Blog</h1>
        </div>
        <div className="container">
          <div className="blog-box iso-call col3">
            {blogPosts.map((post) => (
              <div key={post.id} className="blog-post">
                <Link to={post.link} className="post-thumbnail">
                  <img src={post.image} alt={post.title} />
                </Link>
                <div className="post-content">
                  <ul className="meta-list">
                    <li>
                      <span>
                        <i className="far fa-folder-open"></i>
                        {post.category}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-clock"></i>
                        {post.time}
                      </span>
                    </li>
                  </ul>
                  <h3>
                    <Link to={post.link}>{post.title}</Link>
                  </h3>
                  <p>{post.description}</p>
                  <Link className="button-one" to={post.link}>
                    <span>Read More</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <ul className="pagination-list">
            <li>
              <button type="button" className="active">
                01
              </button>
            </li>
            <li>
              <button type="button">02</button>
            </li>
            <li>
              <button type="button">03</button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default BlogListing;
