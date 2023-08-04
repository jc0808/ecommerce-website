import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ProductCard({ id, name, image, price }) {
    return (
        <Card className="mt-3" style={{ width: '18rem', height: "320px" }}>

            <Card.Img variant='top' className='rounded mx-auto d-block'
                src={image}
                style={{ width: "8rem" }} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>${price}</Card.Text>
                <Button className='me-5'>Add To Cart</Button>
                {/* <Button>View</Button> */}
            </Card.Body>
        </Card>
    )
}