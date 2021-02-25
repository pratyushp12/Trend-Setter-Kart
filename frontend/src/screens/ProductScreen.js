import React from 'react'
import {Link} from 'react-router-dom'
import {Image, Row, Col,Card,Button , ListGroup, ListGroupItem} from 'react-bootstrap'
import products from '../products'
import Rating from '../components/Rating'

const ProductScreen = ({match}) => {
    const product = products.find(item => item._id===match.params.id)
    return (
        <div>
        <Link className='btn btn-dark my-3' to="/">
            Go Back
        </Link>
           <Row>
               <Col md={6}>
               <Image src={product.image} alt={product.name} fluid/>
               </Col>
               <Col md={3}>
                   <ListGroup variant='flush'>
                    <ListGroup.Item>
                    <h2>{product.name}</h2>
                    </ListGroup.Item>
                    <ListGroupItem>
                        <Rating value={product.rating} text={`from ${product.numReviews} reviews`}/>
                    </ListGroupItem>
                    <ListGroupItem>
                        Description : {product.description}
                    </ListGroupItem>
                    <ListGroupItem>
                      <h3>${product.price}</h3> 
                    </ListGroupItem>
                   </ListGroup>
               </Col>
               <Col md={3}>
               <Card>
                    <ListGroup>
                       <ListGroupItem>
                       <Row>
                           <Col>
                               Price :
                           </Col>
                           <Col>
                               ${product.price}
                           </Col>
                       </Row>
                       </ListGroupItem>
                       <ListGroupItem>
                       <Row>
                           <Col>
                               Status :
                           </Col>
                           <Col>
                               {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                           </Col>
                       </Row>
                       </ListGroupItem>
                       <ListGroupItem>
                       <Button className='btn-block' type="button" disabled={product.countInStock===0}>
                       Add to Cart
                       </Button>
                       </ListGroupItem>
                   </ListGroup>
               </Card>
                  
               </Col>
           </Row>  
        </div>
    )
}

export default ProductScreen
