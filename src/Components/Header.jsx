import React, { useEffect, useState } from 'react'
import {Navbar, Container, Nav, Badge} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { productSearch } from '../Redux/Slices/productSlice'

function Header() {
  const dispatch = useDispatch()
  const [wishlistCount,setWishlistCount] = useState(0)
  const [cartCount,setCartCount] = useState(0)
  const wishlist = useSelector(state=>state.wishlistSlice.wishlist)
  const cart = useSelector(state=>state.cartReducer)
  useEffect(()=>{
    setWishlistCount(wishlist?.length)
    setCartCount(cart?.length)
  },[wishlist,cart])
  return (
    <Navbar style={{zIndex:'1'}} expand="lg" className="bg-primary position-fixed top-0 w-100 mb-5">
        <Container>
          <Navbar.Brand><Link to={'/'} style={{textDecoration:'none', color:'white', fontWeight:'bold'}}>
            <i class="fa-solid fa-truck-fast me-2"></i>E Cart</Link></Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav"/>
             <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
              {  <Nav.Link className='me-lg-5'>
                  <input onChange={e=>dispatch(productSearch(e.target.value.toLowerCase()))} style={{width:'400px'}} type="text" className='form-control' placeholder='Search products' />
                </Nav.Link>}
                <Nav.Link className='btn  rounded'>
                  <Link to={'/wishlist'} className='d-flex align-items-center' style={{textDecoration:'none', color:'white', fontWeight:'bold'}}>
                    <i className="fa-solid fa-heart text-danger me-2"></i>Wishlist
                    <Badge className='ms-2 rounded' bg='light'> {wishlistCount} </Badge>
                  </Link>
                </Nav.Link>
                <Nav.Link className='btn  rounded ms-5'>
                  <Link to={'/cart'} className='d-flex align-items-center' style={{textDecoration:'none', color:'white', fontWeight:'bold'}}>
                    <i className="fa-solid fa-cart-shopping text-warning me-2"></i>Cart
                    <Badge className='ms-2 rounded' bg='light'> {cartCount} </Badge>
                </Link>
                </Nav.Link>
              </Nav>
             </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Header