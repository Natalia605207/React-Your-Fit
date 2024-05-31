import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import { RiTwitterXFill } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";
import { ImInstagram } from "react-icons/im";

export const Footer = () => {
    return (
      <div>
        <div>
        </div>
        <MDBFooter style={{backgroundColor: "#202226"}} className='text-center text-lg-start text-muted text-light'>
          <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div className='me-5 d-none d-lg-block text-light'>
              <span>Get connected with us on social networks:</span>
            </div>
    
            <div>
            <a href="https://www.twitter.com/"  aria-label="link to twitter" target="_blank" rel="noreferrer">
            <RiTwitterXFill alt="twitter" className="social-icon me-4" />
        </a>
        <a href="https://www.instagram.com/" aria-label="link to instagram" target="_blank" rel="noreferrer">
            <ImInstagram alt="instagram" className="social-icon me-4" />
        </a>
        <a href="https://www.facebook.com/"  aria-label="link to facebook" target="_blank" rel="noreferrer">
            <SlSocialFacebook alt="facebook" className="social-icon me-4" />
        </a>
            </div>
          </section>
    
          <section className=''>
            <MDBContainer className='text-center text-md-start mt-2'>
              <MDBRow className='mt-2'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                  <h2 className='text-uppercase fw-bold mb-3'>
                    <Link to="/" className='text-decoration-none' style={{color: "#b507c4"}}>YOUR FIT</Link>
                  </h2>
                  <p style={{color: "#949ea2"}}>
                  Dive into the world of movement, energy and unique training classes
                  </p>
                </MDBCol>
    
                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 text-light'>
                  <h6 className='text-uppercase fw-bold mb-4'>Useful Links</h6>
                  <p>
                    <Link to='/' className='text-light'>
                      Home
                    </Link>
                  </p>
                  <p>
                  <Link to="/classes" className='text-light'>
                      Classes
                    </Link>
                  </p>
                  <p>
                    <Link to="/coaches" className='text-light'>
                      Coaches
                    </Link>
                  </p>
                  <p>
                    <Link to='/shop' className='text-light'>
                      Shop
                    </Link>
                  </p>
                </MDBCol>
    
                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 text-light'>
                  <h6 className='text-uppercase fw-bold mb-4'>Customer care</h6>
                  <p>
                    <Link to='/faqs' className='text-light'>
                      FAQs
                    </Link>
                  </p>
                  <p>
                    <Link to='/pricing' className='text-light'>
                      Pricing
                    </Link>
                  </p>
                  <p>
                  <Link to='/promos' className='text-light'>
                      Promo
                      </Link>
                  </p>
                  <p>
                  <Link to='/timetable' className='text-light'>
                      Timetable
                      </Link>
                  </p>
                </MDBCol>
    
                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4 text-light'>
                  <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                  <p>
                    <MDBIcon icon="home" className="me-2" />
                    New York, NY 10519, US
                  </p>
                  <p>
                    <MDBIcon icon="envelope" className="me-3" />
                    <a href='mailto:natalyaobukhova87@gmail.com' className='text-reset text-decoration-none'>
                    info@your.fit
                    </a>
                  </p>
                  <p>
                    <MDBIcon icon="phone" className="me-3" /> 
                    <a href='tel:+79168391700 + 01 234 567 88' className='text-reset text-decoration-none'>
                    + 01 234 567 88
                    </a>
                  </p>
                  <p>
                <MDBIcon icon='print' className='me-3' /> + 01 234 567 89
              </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
    
          <div className='text-center p-4 text-light' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2021 Copyright: YourFit.com
          </div>
        </MDBFooter>
        </div>
      );
}