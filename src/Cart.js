import { Container, Table, Button } from "react-bootstrap";

function Cart() {
    return (
        <>

            {/* <div className="gobackButton">
                <h3>⬅ Go Back</h3>
            </div> */}

            <div id="cartTitle">
                <h1>Cart</h1>
            </div>


            <Container className="cartPage">

                <Table id="cartTable" striped bordered hover >
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Remove</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Iphone 14 Pro Max</td>
                            <td><img src="https://avenidatecnologica.com/wp-content/uploads/2023/05/14-pro-max-1.jpg" alt="" /></td>
                            <td><input type="number" min="1" max="8" /></td>
                            <td>$1,099</td>
                            <td>❌</td>
                        </tr>

                        <tr>
                            <td>Iphone 14 Pro Max</td>
                            <td><img src="https://avenidatecnologica.com/wp-content/uploads/2023/05/14-pro-max-1.jpg" alt="" /></td>
                            <td><input type="number" min="1" max="8" /></td>
                            <td>$1,099</td>
                            <td>❌</td>
                        </tr>

                    </tbody>

                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Total:</th>
                            <th>$1,099</th>
                        </tr>
                    </tfoot>
                </Table>

                <div>
                    <Button>Check Out</Button>
                </div>


            </Container >


        </>
    )
}



export default Cart;