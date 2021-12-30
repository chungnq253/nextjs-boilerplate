import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Ratio from 'react-bootstrap/Ratio';

import TextTruncate from '@components/common/TextTruncate';
import Image from '@components/common/Image';
import Link from '@components/common/Link';


export default function Item({
  id,
  image,
  name,
  description,
  objectName = '',
}) {
  return (
    <Link 
      href={`/${objectName}/${id}`}
      classNames="custom"
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
    </Link>
  );
};
