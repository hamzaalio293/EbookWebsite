import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons';


const Social = () => {
  return (
   <section className='social text-bg-dark py-6 overflow-hidden ' style={{padding: 70}}>
    <div className=' container '>
        <div className=' row'>
            <div className=' col-md-6 offset-md-3 text-center fs-4'>
                <p>Stay Connected and Join our vibrant community, For Any inquiries or assistance, feel  free to reach out to us.</p>
            </div>

            <div className='social-icons d-flex justify-content-center gap-4'>
            <FontAwesomeIcon icon={faTwitter} size="3x" />
            <FontAwesomeIcon icon={faInstagram} size="3x" />
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
            <FontAwesomeIcon icon={faPinterest} size="3x" />
          </div>
        </div>
    </div>
   </section>
  )
}

export default Social
