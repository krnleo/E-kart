import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div  className='d-flex justify-content-center align-items-center flex-column bg-primary text-light mt-5' style={{width:'100%',height:'300px'}}>
    <div className="footer-content d-flex justify-content-evenly w-100 flex-wrap">
      <div style={{width:'400px'}} className="website">
        <h5><i class="fa-solid fa-truck-fast me-2"></i>E Cart</h5>
        <span>Desigined and build with all the love in the world of Luminar team with the help of our contributors.</span> <br/>
        <span>Code licenced MIT, docs CC BY 3.0</span> <br/>
        <span>Currently v1.0.0 </span>
      </div>
      <div className="links d-flex flex-column">
        <h5>Links</h5>
        <Link to={'/'} className='text-decoration-none' style={{color:'white'}}>Home</Link>
        <Link to={'/cart'} className='text-decoration-none' style={{color:'white'}}>Cart</Link>
        <Link to={'/wishlist'} className='text-decoration-none' style={{color:'white'}}>Wishlist</Link>
      </div>
      <div className="guides d-flex flex-column">
      <h5>Guides</h5>
        <a className='text-decoration-none' style={{color:'white'}} href="https://react.dev/" target='_blank'>React</a>
        <a className='text-decoration-none' style={{color:'white'}} href="https://react-bootstrap.netlify.app/" target='_blank'>React Bootstrap</a>
        <a className='text-decoration-none' style={{color:'white'}} href="https://www.w3schools.com/react/react_router.asp" target='_blank'>Routing</a>
      </div>
      <div className="contact">
        <h5>Contact Us</h5>
        <div className="d-flex">
          <input placeholder='Enter your mail' type="text" className="form-control" />
          <button className='btn btn-warning ms-3'><i class="fa-solid fa-arrow-right"></i></button>
        </div>
        <div style={{color:'white'}} className="icons mt-3 d-flex justify-content-between">
        <i style={{height:'50px'}} class="fa-solid fa-envelope fa-2x"></i>
        <i style={{height:'50px'}} class="fa-brands fa-twitter fa-2x"></i>
        <i style={{height:'50px'}} class="fa-brands fa-github fa-2x"></i>
        <i style={{height:'50px'}} class="fa-brands fa-facebook fa-2x"></i>
        <i style={{height:'50px'}} class="fa-brands fa-instagram fa-2x"></i>
        <i style={{height:'50px'}} class="fa-brands fa-linkedin fa-2x"></i>
        </div>
      </div>
    </div>
    <p className='text-center'>Copyright &copy; 2023 E Cart. Build with React</p>
    </div>
  )
}

export default Footer