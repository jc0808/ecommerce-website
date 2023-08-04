import { Container, Table } from "react-bootstrap";

function OrdersPage() {
    return (
        <>

            {/* <div className="gobackButton">
                <h3>⬅ Go Back</h3>
            </div> */}

            <div id="cartTitle">
                <h1>Orders</h1>
            </div>


            <Container className="cartPage">

                <Table id="cartTable" striped bordered hover >
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Order #</th>
                            <th>Items</th>
                            <th>Total Price</th>
                            {/* <th>Remove</th> */}
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Friday, August 4, 2023</td>
                            <td>2678</td>
                            <td><li>Iphone 14 Pro Max</li></td>
                            <td>$1,099</td>
                            {/* <td>❌</td> */}
                        </tr>

                        <tr>
                            <td>Thurday, August 3, 2023</td>
                            <td>2454</td>
                            <td><li>Iphone 14 Pro Max</li> <li>Macbook Pro 2019</li></td>
                            <td>$3,450</td>
                            {/* <td>❌</td> */}
                        </tr>

                    </tbody>

                    {/* <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Total:</th>
                            <th>$1,099</th>
                        </tr>
                    </tfoot> */}
                </Table>

                {/* <div>
                    <Button>Check Out</Button>
                </div> */}


            </Container >


        </>
    )
}



export default OrdersPage;