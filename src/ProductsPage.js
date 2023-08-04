
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container, Col, Row } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "./Store";
import ProductCard from "./ProductCard";

function ProductsPage() {

    const products = useSelector(selectProducts);

    console.log(products)

    const displayProducts = products.map(product => {
        return (
            <ProductCard key={product.id} name={product.name} price={product.price} image={product.image} />
        )
    })


    return (
        <>
            <Container className="f-container1  d-none d-lg-block d-md-none">

                <Container className="filters" fluid>
                    <label>All</label>
                    <label>Computers</label>
                    <label>Tablets</label>
                    <label>Cellphones</label>
                    <label>Accesories</label>
                </Container>
            </Container>

            <div className="productsContainer">


                <Col lg={3} className='filters2'>

                    <Row id='rowLabel'>All Categories</Row>
                    <Row id='rowLabel'>Apple</Row>
                    <Row id='rowLabel'>Samsung</Row>
                    <Row id='rowLabel'>Google</Row>
                    {/* <Row id='rowLabel'>T-shirts</Row>
            <Row id='rowLabel'>Underware</Row> */}
                </Col>



                <Container className="products" fluid>


                    {displayProducts}

                    {/* <Card style={{ width: '18rem' }}>

                        <Card.Img variant='top' className='rounded mx-auto d-block'
                            src="https://avenidatecnologica.com/wp-content/uploads/2023/05/14-pro-max-1.jpg"
                            style={{ width: "8rem" }} />
                        <Card.Body>
                            <Card.Title>Iphone 14 Pro Max</Card.Title>
                            <Card.Text>$1,099</Card.Text>
                            <Button className='me-5'>Add To Cart</Button>
                            
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>

                        <Card.Img variant='top' className='rounded mx-auto d-block'
                            src="https://avenidatecnologica.com/wp-content/uploads/2023/05/14-pro-max-1.jpg"
                            style={{ width: "8rem" }} />
                        <Card.Body>
                            <Card.Title>Iphone 14 Pro Max</Card.Title>
                            <Card.Text>$1,099</Card.Text>
                            <Button className='me-5'>Add To Cart</Button>
                            
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>

                        <Card.Img variant='top' className='rounded mx-auto d-block'
                            src="https://avenidatecnologica.com/wp-content/uploads/2023/05/14-pro-max-1.jpg"
                            style={{ width: "8rem" }} />
                        <Card.Body>
                            <Card.Title>Iphone 14 Pro Max</Card.Title>
                            <Card.Text>$1,099</Card.Text>
                            <Button className='me-5'>Add To Cart</Button>
                            
                        </Card.Body>
                    </Card>

                    <Card className='mt-3' style={{ width: '18rem' }}>

                        <Card.Img variant='top' className='rounded mx-auto d-block'
                            src="https://avenidatecnologica.com/wp-content/uploads/2023/05/14-pro-max-1.jpg"
                            style={{ width: "8rem" }} />
                        <Card.Body>
                            <Card.Title>Iphone 14 Pro Max</Card.Title>
                            <Card.Text>$1,099</Card.Text>
                            <Button className='me-5'>Add To Cart</Button>
                            
                        </Card.Body>
                    </Card>

                    <Card className='mt-3' style={{ width: '18rem' }}>

                        <Card.Img variant='top' className='rounded mx-auto d-block'
                            src="https://avenidatecnologica.com/wp-content/uploads/2023/05/14-pro-max-1.jpg"
                            style={{ width: "8rem" }} />
                        <Card.Body>
                            <Card.Title>Iphone 14 Pro Max</Card.Title>
                            <Card.Text>$1,099</Card.Text>
                            <Button className='me-5'>Add To Cart</Button>
                            
                        </Card.Body>
                    </Card>

                    <Card className='mt-3' style={{ width: '18rem' }}>

                        <Card.Img variant='top' className='rounded mx-auto d-block'
                            src="https://avenidatecnologica.com/wp-content/uploads/2023/05/14-pro-max-1.jpg"
                            style={{ width: "8rem" }} />
                        <Card.Body>
                            <Card.Title>Iphone 14 Pro Max</Card.Title>
                            <Card.Text>$1,099</Card.Text>
                            <Button className='me-5'>Add To Cart</Button>
                            
                        </Card.Body>
                    </Card>

                    <Card className='mt-3' style={{ width: '18rem' }}>

                        <Card.Img variant='top' className='rounded mx-auto d-block'
                            src="https://avenidatecnologica.com/wp-content/uploads/2023/05/14-pro-max-1.jpg"
                            style={{ width: "8rem" }} />
                        <Card.Body>
                            <Card.Title>Iphone 14 Pro Max</Card.Title>
                            <Card.Text>$1,099</Card.Text>
                            <Button className='me-5'>Add To Cart</Button>
                            
                        </Card.Body>
                    </Card>

                    <Card className='mt-3' style={{ width: '18rem' }}>

                        <Card.Img variant='top' className='rounded mx-auto d-block'
                            src="https://avenidatecnologica.com/wp-content/uploads/2023/05/14-pro-max-1.jpg"
                            style={{ width: "8rem" }} />
                        <Card.Body>
                            <Card.Title>Iphone 14 Pro Max</Card.Title>
                            <Card.Text>$1,099</Card.Text>
                            <Button className='me-5'>Add To Cart</Button>
                            
                        </Card.Body>
                    </Card>

                    <Card className='mt-3' style={{ width: '18rem' }}>

                        <Card.Img variant='top' className='rounded mx-auto d-block'
                            src="https://avenidatecnologica.com/wp-content/uploads/2023/05/14-pro-max-1.jpg"
                            style={{ width: "8rem" }} />
                        <Card.Body>
                            <Card.Title>Iphone 14 Pro Max</Card.Title>
                            <Card.Text>$1,099</Card.Text>
                            <Button className='me-5'>Add To Cart</Button>
                            
                        </Card.Body>
                    </Card>

                    <Card className='mt-3' style={{ width: '18rem' }}>

                        <Card.Img variant='top' className='rounded mx-auto d-block'
                            src="https://avenidatecnologica.com/wp-content/uploads/2023/05/14-pro-max-1.jpg"
                            style={{ width: "8rem" }} />
                        <Card.Body>
                            <Card.Title>Iphone 14 Pro Max</Card.Title>
                            <Card.Text>$1,099</Card.Text>
                            <Button className='me-5'>Add To Cart</Button>
                            
                        </Card.Body>
                    </Card> */}


                </Container>
            </div>
        </>
    )
}

export default ProductsPage;