import React from 'react';
import ebook from '../../assets/images/download-ebook.png';

const Download = () => {
  return (
    <section className="download py-5"
      style={{ background: 'linear-gradient(to right, #007BFF, #0056b3)', 
      color: '#fff' }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image Section */}
          <div className="col-lg-5 text-center mb-4 image-container">
            <img src={ebook} alt="Ebook" className="img-fluid rounded shadow"
              style={{ borderRadius: '10px' }}
            />
          </div>

          {/* Right Text Section */}
          <div className="col-lg-7">
            <div className="text-container mb-4">
              <h2 className="fw-bold">Get Your Free Ebook Now</h2>
              <p>
                Unlock the power of knowledge and take your blogging journey to
                the next level. Our ebook, "Blog Mastery: The Ultimate Guide to
                Blogging Success," is your key to success.
              </p>
            </div>

            {/* Form Section */}
            <form>
              <div className="input-group">
                <input type="email" className="form-control rounded-start" placeholder="Email Address"
                  style={{ borderRadius: '20px 0 0 20px', padding: '15px' }}
                />
                <button
                  className="btn btn-primary rounded-end"
                  style={{ borderRadius: '0 20px 20px 0', padding: '10px 20px',
                  fontWeight: 'bold' }} >
                  Download
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
