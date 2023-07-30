import logo from './logo.svg';
import './App.css';

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div>
      <div className="header">
      <h2>E-commerce Shop</h2>
      

      {/* <h3>Login</h3>
      <h3>Account</h3> */}
      {/* <div>
      <input type="text" placeholder="search.."/>
      <h3>Login</h3>
      <h3>Account</h3>
      </div> */}

    </div>

    <div className="container">

      <div className='subHeader'>
      <h2>Login</h2>
      <h2>Account</h2>
      <h2>Cart(0)</h2>
      </div>

      <div className="f-container1">
      <div className="filters">
        <label>All</label>
        <label>Men</label>
        <label>Woman</label>
        <label>Kids</label>
        <label>Cellphones and Accesories</label>
      </div>
      </div>

      <div className="productsContainer">
      <div className="filters2"> 
      
      <label>All Categories</label>
      <label>Shoes</label>
      <label>Pants</label>
      <label>Shirts</label>
      <label>T-shirts</label>
      <label>Underware</label>
      </div>


      <div className="products">

        <Card style={{width: '18rem'}}>
          
          <Card.Img variant='top' className='rounded mx-auto d-block' 
          src="https://avenidatecnologica.com/wp-content/uploads/2023/05/14-pro-max-1.jpg"
           style={{width: "8rem"}} />
           <Card.Body>
            <Card.Title>Iphone 14 Pro Max</Card.Title>
            <Card.Text>$1,099</Card.Text>
            <Button>Add To Cart</Button>
           </Card.Body>
        </Card>

        <Card style={{width: '18rem'}}>
          
          <Card.Img variant='top' className='rounded mx-auto d-block' 
          src="https://avenidatecnologica.com/wp-content/uploads/2023/05/14-pro-max-1.jpg"
           style={{width: "8rem"}} />
           <Card.Body>
            <Card.Title>Iphone 14 Pro Max</Card.Title>
            <Card.Text>$1,099</Card.Text>
            <Button>Add To Cart</Button>
           </Card.Body>
        </Card>

        <Card style={{width: '18rem'}}>
          
          <Card.Img variant='top' className='rounded mx-auto d-block' 
          src="https://avenidatecnologica.com/wp-content/uploads/2023/05/14-pro-max-1.jpg"
           style={{width: "8rem"}} />
           <Card.Body>
            <Card.Title>Iphone 14 Pro Max</Card.Title>
            <Card.Text>$1,099</Card.Text>
            <Button>Add To Cart</Button>
           </Card.Body>
        </Card>

        <Card style={{width: '18rem'}}>
          
          <Card.Img variant='top' className='rounded mx-auto d-block' 
          src="https://avenidatecnologica.com/wp-content/uploads/2023/05/14-pro-max-1.jpg"
           style={{width: "8rem"}} />
           <Card.Body>
            <Card.Title>Iphone 14 Pro Max</Card.Title>
            <Card.Text>$1,099</Card.Text>
            <Button>Add To Cart</Button>
           </Card.Body>
        </Card>

        <Card style={{width: '18rem'}}>
          
          <Card.Img variant='top' className='rounded mx-auto d-block' 
          src="https://avenidatecnologica.com/wp-content/uploads/2023/05/14-pro-max-1.jpg"
           style={{width: "8rem"}} />
           <Card.Body>
            <Card.Title>Iphone 14 Pro Max</Card.Title>
            <Card.Text>$1,099</Card.Text>
            <Button>Add To Cart</Button>
           </Card.Body>
        </Card>

        <Card style={{width: '18rem'}}>
          
          <Card.Img variant='top' className='rounded mx-auto d-block' 
          src="https://avenidatecnologica.com/wp-content/uploads/2023/05/14-pro-max-1.jpg"
           style={{width: "8rem"}} />
           <Card.Body>
            <Card.Title>Iphone 14 Pro Max</Card.Title>
            <Card.Text>$1,099</Card.Text>
            <Button>Add To Cart</Button>
           </Card.Body>
        </Card>

        <Card style={{width: '18rem'}}>
          
          <Card.Img variant='top' className='rounded mx-auto d-block' 
          src="https://avenidatecnologica.com/wp-content/uploads/2023/05/14-pro-max-1.jpg"
           style={{width: "8rem"}} />
           <Card.Body>
            <Card.Title>Iphone 14 Pro Max</Card.Title>
            <Card.Text>$1,099</Card.Text>
            <Button>Add To Cart</Button>
           </Card.Body>
        </Card>

        <Card style={{width: '18rem'}}>
          
          <Card.Img variant='top' className='rounded mx-auto d-block' 
          src="https://avenidatecnologica.com/wp-content/uploads/2023/05/14-pro-max-1.jpg"
           style={{width: "8rem"}} />
           <Card.Body>
            <Card.Title>Iphone 14 Pro Max</Card.Title>
            <Card.Text>$1,099</Card.Text>
            <Button>Add To Cart</Button>
           </Card.Body>
        </Card>

        <Card style={{width: '18rem'}}>
          
          <Card.Img variant='top' className='rounded mx-auto d-block' 
          src="https://avenidatecnologica.com/wp-content/uploads/2023/05/14-pro-max-1.jpg"
           style={{width: "8rem"}} />
           <Card.Body>
            <Card.Title>Iphone 14 Pro Max</Card.Title>
            <Card.Text>$1,099</Card.Text>
            <Button>Add To Cart</Button>
           </Card.Body>
        </Card>

        <Card style={{width: '18rem'}}>
          
          <Card.Img variant='top' className='rounded mx-auto d-block' 
          src="https://avenidatecnologica.com/wp-content/uploads/2023/05/14-pro-max-1.jpg"
           style={{width: "8rem"}} />
           <Card.Body>
            <Card.Title>Iphone 14 Pro Max</Card.Title>
            <Card.Text>$1,099</Card.Text>
            <Button>Add To Cart</Button>
           </Card.Body>
        </Card>
        

      </div>
      </div>

      
    </div>


    </div>
  );
}

export default App;
