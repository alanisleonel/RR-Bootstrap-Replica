import {Card} from 'react-bootstrap';

function BackgroundImg() {
    return(
        <Card>
            <Card.Img src="https://tinyurl.com/3hspyxh9" alt="Card image" />
            <Card.ImgOverlay>
                <Card.Body>
                    <Card.Text style={{fontSize: "41px", fontWeight: 600}}>Order groceries for delivery or pickup today</Card.Text>
                </Card.Body>
            </Card.ImgOverlay>
        </Card>
    )
}

export default BackgroundImg