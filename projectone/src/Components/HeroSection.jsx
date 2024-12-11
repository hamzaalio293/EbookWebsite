import React from 'react';

const HeroSection = () => {

  return (
    
  <main className='hero container'>
   <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>

        {/* Buttons */}
        <div className="hero-btn">
          <button>Shop Now</button>
          <button>Category</button>
        </div>

        {/* Shopping Availability */}
        <div className="Shopping">
          <p>Also Available On</p>
          <div className="brand-icon">
            <img src="/images/amazon.png" alt="amazon" />
            <img src="/images/flipkart.png" alt="flipkart" />
          </div>
        </div>
      </div>

    {/* Hero Image */}
    <div className='hero-image'>
      <img src="/images/shoe_image.png"  alt="" />
    </div>


  </main>
  )
};

export default HeroSection;
