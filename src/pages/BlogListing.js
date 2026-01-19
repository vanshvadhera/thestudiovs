import React from 'react';
import { Link } from 'react-router-dom';

const BlogListing = () => {
  const blogPosts = [
    {
      id: 1,
      image: '/templates.fabric-lab.co/archios/upload/architecture/blog1.jpg',
      category: 'Business',
      time: '9 Hours ago',
      title: 'Designing with balance and care',
      description: 'Individuals require a place to live, work, play, learn, shop, and eat. Architects are in charge of planning these',
      link: '/blog/1'
    },
    {
      id: 2,
      image: '/templates.fabric-lab.co/archios/upload/architecture/blog2.jpg',
      category: 'Business',
      time: '9 Hours ago',
      title: 'Give your dreams reality',
      description: 'Individuals require a place to live, work, play, learn, shop, and eat. Architects are in charge of planning these',
      link: '/blog/2'
    },
    {
      id: 3,
      image: '/templates.fabric-lab.co/archios/upload/architecture/blog3.jpg',
      category: 'Business',
      time: '9 Hours ago',
      title: 'The art of building',
      description: 'Individuals require a place to live, work, play, learn, shop, and eat. Architects are in charge of planning these',
      link: '/blog/3'
    },
    {
      id: 4,
      image: '/templates.fabric-lab.co/archios/upload/architecture/blog1.jpg',
      category: 'Business',
      time: '9 Hours ago',
      title: 'A whole different designing',
      description: 'Individuals require a place to live, work, play, learn, shop, and eat. Architects are in charge of planning these',
      link: '/blog/4'
    },
    {
      id: 5,
      image: '/templates.fabric-lab.co/archios/upload/architecture/blog2.jpg',
      category: 'Business',
      time: '9 Hours ago',
      title: 'Building on the ninth cloud',
      description: 'Individuals require a place to live, work, play, learn, shop, and eat. Architects are in charge of planning these',
      link: '/blog/5'
    },
    {
      id: 6,
      image: '/templates.fabric-lab.co/archios/upload/architecture/blog3.jpg',
      category: 'Business',
      time: '9 Hours ago',
      title: 'Providing innovative designs',
      description: 'Individuals require a place to live, work, play, learn, shop, and eat. Architects are in charge of planning these',
      link: '/blog/6'
    },
    {
      id: 7,
      image: '/templates.fabric-lab.co/archios/upload/architecture/blog1.jpg',
      category: 'Business',
      time: '9 Hours ago',
      title: 'Connecting, creating',
      description: 'Individuals require a place to live, work, play, learn, shop, and eat. Architects are in charge of planning these',
      link: '/blog/7'
    },
    {
      id: 8,
      image: '/templates.fabric-lab.co/archios/upload/architecture/blog2.jpg',
      category: 'Business',
      time: '9 Hours ago',
      title: 'We focus on design comfort',
      description: 'Individuals require a place to live, work, play, learn, shop, and eat. Architects are in charge of planning these',
      link: '/blog/8'
    }
  ];

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
