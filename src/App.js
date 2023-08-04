
import Account from './Account';
import './App.css';
import Cart from './Cart';
import OrdersPage from './OrdersPage';
import ProductsPage from './ProductsPage';

import { Container } from "react-bootstrap";

import { Routes, Route, useNavigate } from "react-router-dom";


function App() {

  const navigate = useNavigate();


  return (
    <div>
      <div className="header">
      </div>

      <Container id='HContainer'>
        {/* div className="container" */}

        <Container className='subHeader'>
          <h2 onClick={() => navigate('/')}>Home</h2>
          <h2>Login</h2>
          <h2 onClick={() => navigate('/account')}>Account</h2>
          <h2 onClick={() => navigate('/ordersPage')}>Orders(0)</h2>
          <div id='cartIcon' onClick={() => navigate('/cartPage')}>
            <div id='CartBackground'>2</div>
          </div>

        </Container>

        {/* <ProductsPage /> */}
        {/* <Cart /> */}
        {/* <OrdersPage /> */}
        {/* <Account /> */}

        <Routes>

          <Route path="/" element={<ProductsPage />} />
          <Route path="/account" element={<Account />} />
          <Route path="/ordersPage" element={<OrdersPage />} />
          <Route path="/cartPage" element={<Cart />} />
        </Routes>


      </Container>


    </div>
  );
}

export default App;
