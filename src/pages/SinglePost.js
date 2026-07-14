import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { images } from '../assets';

const SinglePost = () => {
  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    website: '',
    comment: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Comment submitted:', formData);
    setFormData({ name: '', mail: '', website: '', comment: '' });
  };

  return (
    <>
      <section className="page-banner-section">
        <div className="container">
          <h1>Single Post</h1>
          <p>The art of building</p>
        </div>
      </section>

      <section className="single-post-section">
        <div className="section-title">
          <h1>Blog</h1>
        </div>
        <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="post-content">
                  <ul className="meta-list">
                    <li>
                      <span>
                        <i className="far fa-folder-open"></i>
                        Business
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-clock"></i>
                        9 Hours ago
                      </span>
                    </li>
                  </ul>
                  <h3>Give your dreams a shape of reality</h3>
                  <div className="post-thumbnail">
                    <img
                      src={images.posts.postImage}
                      alt=""
                    />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <h3>Dropcaps</h3>
                  <p>
                    <span className="dropcap">D</span> Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.
                    <br />
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                    omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                    rem aperiam, eaque ipsa
                  </p>

                  <blockquote>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </blockquote>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>

                  <div className="tags-list">
                    <ul className="post-tags">
                      <li>
                        <span className="tags-title">Tags:</span>
                      </li>
                      <li>
                        <button type="button" className="link-like-button">
                          design
                        </button>
                      </li>
                      <li>
                        <button type="button" className="link-like-button">
                          sport
                        </button>
                      </li>
                      <li>
                        <button type="button" className="link-like-button">
                          politics
                        </button>
                      </li>
                      <li>
                        <button type="button" className="link-like-button">
                          travel
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div className="author-box">
                    <div className="image-holder">
                      <img
                        src={images.posts.author}
                        alt=""
                      />
                    </div>
                    <div className="author-content">
                      <h4>About author</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco
                      </p>
                    </div>
                  </div>

                  <div className="comments-box" id="comments">
                    <h3>3 Comments</h3>
                    <ul className="comments-list">
                      <li className="comment">
                        <div className="comment-box">
                          <div className="image-holder">
                            <img
                              alt=""
                              src={images.posts.commenters[0]}
                            />
                          </div>
                          <div className="comment-content">
                            <span className="time">
                              <i className="fa fa-clock-o"></i>
                              2 days ago <abbr>/</abbr> by Graham
                            </span>
                            <p>Testing comment form</p>
                            <button type="button" className="comment-reply-link">
                              reply
                            </button>
                          </div>
                        </div>
                      </li>
                      <li className="comment">
                        <div className="comment-box">
                          <div className="image-holder">
                            <img
                              alt=""
                              src={images.posts.commenters[1]}
                            />
                          </div>
                          <div className="comment-content">
                            <span className="time">
                              <i className="fa fa-clock-o"></i>
                              2 days ago <abbr>/</abbr> by Graham
                            </span>
                            <p>Comment on Hover</p>
                            <button type="button" className="comment-reply-link">
                              reply
                            </button>
                          </div>
                        </div>
                      </li>
                      <li className="comment">
                        <div className="comment-box">
                          <div className="image-holder">
                            <img
                              alt=""
                              src={images.posts.commenters[2]}
                            />
                          </div>
                          <div className="comment-content">
                            <span className="time">
                              <i className="fa fa-clock-o"></i>
                              2 days ago <abbr>/</abbr> by Graham
                            </span>
                            <p>Third Comment</p>
                            <button type="button" className="comment-reply-link">
                              reply
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div id="comment-form">
                    <div id="respond" className="comment-respond">
                      <h3>Leave a comment</h3>
                      <form id="commentform" className="comment-form" onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-lg">
                            <div className="input-line">
                              <label htmlFor="name">
                                <i className="far fa-user"></i>
                              </label>
                              <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                id="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div className="input-line">
                              <label htmlFor="mail">
                                <i className="far fa-envelope"></i>
                              </label>
                              <input
                                id="mail"
                                placeholder="Email"
                                name="mail"
                                type="email"
                                value={formData.mail}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div className="input-line">
                              <label htmlFor="website">
                                <i className="fa fa-link"></i>
                              </label>
                              <input
                                id="website"
                                name="website"
                                placeholder="Website"
                                type="text"
                                value={formData.website}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg">
                            <textarea
                              rows="7"
                              id="comment"
                              placeholder="Message"
                              name="comment"
                              value={formData.comment}
                              onChange={handleInputChange}
                              required
                            ></textarea>
                            <input
                              name="submit"
                              type="submit"
                              id="submit"
                              className="submit"
                              value="Post Comment"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="sidebar">
                  <div className="sidebar-widget">
                    <form id="searchform" className="searchform">
                      <div>
                        <input type="text" name="s" id="s" placeholder="Search" />
                        <button type="submit" id="searchsubmit" className="submit">
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="sidebar-widget widget_categories">
                    <h4>Post Category</h4>
                    <ul>
                      <li>
                        <button type="button" className="link-like-button">
                          Building plans
                        </button>
                      </li>
                      <li>
                        <button type="button" className="link-like-button">
                          Architecture
                        </button>
                      </li>
                      <li>
                        <button type="button" className="link-like-button">
                          Workspace Interior
                        </button>
                      </li>
                      <li>
                        <button type="button" className="link-like-button">
                          Building Renovation
                        </button>
                      </li>
                      <li>
                        <button type="button" className="link-like-button">
                          Exterior Design
                        </button>
                      </li>
                      <li>
                        <button type="button" className="link-like-button">
                          Building Consultancy
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div className="sidebar-widget widget_flab_popular_posts_widget">
                    <h4>Recent Posts</h4>
                    <div className="popular-widget">
                      <ul className="popular-list">
                        <li>
                          <img
                            src={images.blog[0]}
                            alt=""
                          />
                          <div className="side-content">
                            <h4>
                              <Link to="/blog/1">The modern architect with innovatiom</Link>
                            </h4>
                            <span className="sidebar__popular-list-desc">January 29, 2021</span>
                          </div>
                        </li>
                        <li>
                          <img
                            src={images.blog[1]}
                            alt=""
                          />
                          <div className="side-content">
                            <h4>
                              <Link to="/blog/2">The modern architect with innovatiom</Link>
                            </h4>
                            <span className="sidebar__popular-list-desc">January 29, 2021</span>
                          </div>
                        </li>
                        <li>
                          <img
                            src={images.blog[2]}
                            alt=""
                          />
                          <div className="side-content">
                            <h4>
                              <Link to="/blog/3">The modern architect with innovatiom</Link>
                            </h4>
                            <span className="sidebar__popular-list-desc">January 29, 2021</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="sidebar-widget widget_archives">
                    <h4>Archives</h4>
                    <ul>
                      <li>
                        <button type="button" className="link-like-button">
                          February 2021 <span>18</span>
                        </button>
                      </li>
                      <li>
                        <button type="button" className="link-like-button">
                          Jannuary 2021 <span>05</span>
                        </button>
                      </li>
                      <li>
                        <button type="button" className="link-like-button">
                          December 2020 <span>11</span>
                        </button>
                      </li>
                      <li>
                        <button type="button" className="link-like-button">
                          November 2020 <span>09</span>
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div className="sidebar-widget widget_tag_cloud">
                    <h4>Popular tags</h4>
                    <div className="tagcloud">
                      <button type="button" className="link-like-button">
                        Planning
                      </button>
                      <button type="button" className="link-like-button">
                        Eco-Home
                      </button>
                      <button type="button" className="link-like-button">
                        Building
                      </button>
                      <button type="button" className="link-like-button">
                        Exterior
                      </button>
                      <button type="button" className="link-like-button">
                        Consultant
                      </button>
                      <button type="button" className="link-like-button">
                        Interior
                      </button>
                      <button type="button" className="link-like-button">
                        Renovation
                      </button>
                      <button type="button" className="link-like-button">
                        Architecture
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default SinglePost;
