import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import des from '../../assets/images/description.png'



const Details = () => {
  return (
   <section id='details' className='details my-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                <div className=' text-center d-flex flex-column justify-content-center h-100'>
                <h2 className='display-6'>Unlock Your Blogging Potentail</h2>
                <p>All services offered on this site are available for free in the hope that they are usefulAll services offered on this site are available .</p>
                <ul className=' list-group list-group-flush lh-lg'>
                <div className=" list-group-item">
                <i className=' fas fa-square text-bg-primary'></i>
                <strong>Unlock Your Blogging Potentail.</strong> The file conversion from MP3 to SRT will start automatically
            </div>
                <div className=" list-group-item">
                <i className=' fas fa-square text-bg-primary'></i>
                <strong>Unlock Your Blogging Potentail.</strong> To get started with converting MP3 to SRT simply submit the MP3 
         </div>
         <div className=" list-group-item">
                <i className=' fas fa-square text-bg-primary'></i>
                <strong>Unlock Your Blogging Potentail.</strong> uploader at the right. As soon as the upload is complete the conversion 
         </div>
        </ul>

        <a href="#" className='btn btn-primary text-white mt-4 align-self-start p-3' data-bs-toggle="model" data-bs-target="#model1">Get Your Copy Now</a>
    </div>
</div>

    <div className='col-md-6'>
        <div className=" image-container p-5">
            <img src={des} className=' img-fluid' alt="" />
        </div>
    </div>
</div>
        </div>
</section>

    
  )
}

export default Details
