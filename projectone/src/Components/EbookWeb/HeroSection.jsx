import React from 'react'
import headerImage from '../../assets/images/header-ebook.png';
import headerpng from '../../assets/images/header-background.jpg'; 


const HeroSection = () => {
  return (
    <div className='headerpng' style={{backgroundImage: `url(${headerpng})`}}>
    <div className='hero text-white pt-7 '>
     <div className=' container-xl'>
        <div className='row'>

             {/* Image Section */}
            <div className='col-md-6'>
                <div className=' image-container mb-5 px-4'>
                    <img src={headerImage} className=' img-fluid' alt="" />
                </div>
            </div>

            {/* Text Section */}
            <div className=' col-md-6 my-5'>
                <div className=' text-container p-4 d-flex flex-column justify-content-center h-90 mb-4'>
                    <h1 className=' display-3 fw-bold text-white '>Welcome to Blog Mastery</h1>
                    <p className=' lead text-white my-3'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem esse earum asperiores odio provident omnis nemo quae. Distinctio reiciendis omnis corporis, optio alias rerum nihil error. Repellendus error assumenda asperiores!
                    </p>
                </div>

            {/* Form  */}
            <div className=' form-container text-center'>
                <form>
                    <div className='my-4'>
                        <input 
                        type="email"
                        className='form-control form-control-lg rounded-5'
                        placeholder='Email Address'
                        />
                    </div>

                    <div className=' d-grid'>
                        <button className='btn btn-primary text-white '>Free Download</button>
                    </div>
                </form>

            </div>
            </div>

 
        </div>
     </div>
    </div>
    </div>
  )
}


export default HeroSection
