import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../assets';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: images.blog[0],
      category: 'Business',
      time: '9 Hours ago',
      title: 'Designing with balance and care',
      description:
        'Individuals require a place to live, work, play, learn, shop, and eat. Architects are in charge of planning these',
      link: '/blog/1',
    },
    {
      id: 2,
      image: images.blog[1],
      category: 'Business',
      time: '9 Hours ago',
      title: 'Designing with balance and care',
      description:
        'Individuals require a place to live, work, play, learn, shop, and eat. Architects are in charge of planning these',
      link: '/blog/2',
    },
    {
      id: 3,
      image: images.blog[2],
      category: 'Business',
      time: '9 Hours ago',
      title: 'Designing with balance and care',
      description:
        'Individuals require a place to live, work, play, learn, shop, and eat. Architects are in charge of planning these',
      link: '/blog/3',
    },
  ];

  return (
    <section className="blog-section" id="blog">
      <div className="section-title">
        <span>06</span>
        <h1>Blog</h1>
      </div>
      <div className="container">
        <div className="title-box">
          <span>recent posts</span>
          <h2>Fresh News</h2>
        </div>
        <div className="blog-box">
          <div className="row">
            {blogPosts.map((post) => (
              <div key={post.id} className="col-lg-4">
                <div className="blog-post">
                  <Link to={post.link} className="post-thumbnail">
                    <img src={post.image} alt={post.title} />
                  </Link>
                  <div className="post-content">
                    <ul className="meta-list">
                      <li>
                        <Link to="/blog">
                          <i className="far fa-folder-open"></i>
                          {post.category}
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog">
                          <i className="far fa-clock"></i>
                          {post.time}
                        </Link>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
