import React from 'react';
import './Card.css'
 

const Blog = () => {
    
  return (

    <>
    <div className="blog">
      <h2 className="h2">Latest Blog Post</h2>

      <div className="blog-card-group">
        <div className="blog-card">
          <div className="blog-card-banner">
            <img
              src="./images/blog1.png"
              className="blog-banner-img"
            />
          </div>

          <div className="blog-content-wrapper">
            <button className="blog-topic text-tiny">Database</button>
            <h3>
              <a href="#" className="h3">
                Building microservices with Dropwizard, MongoDB & Docker
              </a>
            </h3>

            <p className="blog-text">
              This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational
              databases, easy to use and the multi-platform is the best option for scale up and have fault tolerance, load
              balancing, map reduce, etc.
            </p>

            <div className="wrapper-flex">
              <div className="profile-wrapper">
                <img src="./images/author.png" alt="Julia Walker" width="50" />
              </div>

              <div className="wrapper">
                <a href="#" className="h4">Julia Walker</a>
                <p className="text-sm">
                  <time dateTime="2022-01-17">Jan 17, 2022</time>
                  <span className="separator"></span>
                  <ion-icon name="time-outline"></ion-icon>
                  <time dateTime="PT3M">3 min</time>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div><br />



    <div className="blog">
      <div className="blog-card-group">
        <div className="blog-card">
          <div className="blog-card-banner">
            <img
              src="./images/blog1.png"
              className="blog-banner-img"
            />
          </div>

          <div className="blog-content-wrapper">
            <button className="blog-topic text-tiny">Database</button>
            <h3>
              <a href="#" className="h3">
                Building microservices with Dropwizard, MongoDB & Docker
              </a>
            </h3>

            <p className="blog-text">
              This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational
              databases, easy to use and the multi-platform is the best option for scale up and have fault tolerance, load
              balancing, map reduce, etc.
            </p>

            <div className="wrapper-flex">
              <div className="profile-wrapper">
                <img src="./images/author.png" alt="Julia Walker" width="50" />
              </div>

              <div className="wrapper">
                <a href="#" className="h4">Julia Walker</a>
                <p className="text-sm">
                  <time dateTime="2022-01-17">Jan 17, 2022</time>
                  <span className="separator"></span>
                  <ion-icon name="time-outline"></ion-icon>
                  <time dateTime="PT3M">3 min</time>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div> <br />




    <div className="blog">
      <div className="blog-card-group">
        <div className="blog-card">
          <div className="blog-card-banner">
            <img
              src="./images/blog1.png"
              className="blog-banner-img"
            />
          </div>

          <div className="blog-content-wrapper">
            <button className="blog-topic text-tiny">Database</button>
            <h3>
              <a href="#" className="h3">
                Building microservices with Dropwizard, MongoDB & Docker
              </a>
            </h3>

            <p className="blog-text">
              This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational
              databases, easy to use and the multi-platform is the best option for scale up and have fault tolerance, load
              balancing, map reduce, etc.
            </p>

            <div className="wrapper-flex">
              <div className="profile-wrapper">
                <img src="./images/author.png" alt="Julia Walker" width="50" />
              </div>

              <div className="wrapper">
                <a href="#" className="h4">Julia Walker</a>
                <p className="text-sm">
                  <time dateTime="2022-01-17">Jan 17, 2022</time>
                  <span className="separator"></span>
                  <ion-icon name="time-outline"></ion-icon>
                  <time dateTime="PT3M">3 min</time>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="btn load-more">Load More</button>
    </div>

    

    </>
  );
  
}

export default Blog;
