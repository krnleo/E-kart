import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../Redux/Slices/wishlistSlice'
import { addToCart } from '../Redux/Slices/cartSlice'
import Header from '../Components/Header'


function Wishlist() {
  const dispatch = useDispatch()
  const wishlist = useSelector(state=>state.wishlistSlice.wishlist)

  const handleCart = (product)=>{
    dispatch(removeFromWishlist(product.id))
    dispatch(addToCart(product))
  }
  return (
  <>
  <Header/>
      <div style={{marginTop:'60px'}}>
      <Row className='mt-5 container'>
          {wishlist?.length>0?wishlist?.map(product=>(
            <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card className='shadow rounded' style={{ width: '18rem' }}>
                  <Link to={`/view/${product.id}`}> <Card.Img style={{height:'180px'}} variant="top" src={product.thumbnail} /></Link>
                  <Card.Body>
                      <Card.Title>{product.title.slice(0,20)}...</Card.Title>
                      <div className='d-flex justify-content-between'>
                      <button onClick={()=>dispatch(removeFromWishlist(product.id))} className='btn fs-5'><i className="fa-solid fa-heart-circle-xmark text-danger"></i></button>
                      <button onClick={()=>handleCart(product)} className='btn fs-5'><i className="fa-solid fa-cart-plus text-success"></i></button>
                      </div>
                  </Card.Body>
                  </Card>
            </Col>)):<div className='text-center mt-5'>
            <img width={'25%'} height={'250px'} src="https://www.lifestone.in/assets/front/images/icons/empty-wishlist.svg" alt="" />
            <h1 className='mt-3 text-danger'>Your Wishlist is Empty</h1>
          </div>}
      </Row>
  </div>
  </>
  )
}

export default Wishlist
