import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Ratio from 'react-bootstrap/Ratio';

import TextTruncate from '@components/common/TextTruncate';
import Image from '@components/common/Image';

export default function Hero({
  id,
  image,
  name,
  description,
}) {
  return (
    <Row 
      className="g-4"
    >
      <Col>
        <Card>
          <Ratio aspectRatio="16x9">
            <Image 
              src={image} 
              alt={name} 
            />
          </Ratio>
          
          <Card.Body>
            <Card.Title>
              {name}
            </Card.Title>

            <Card.Text>
              <TextTruncate lines={3}>
                {description}
              </TextTruncate>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
