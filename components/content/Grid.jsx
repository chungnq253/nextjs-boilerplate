import Row from 'react-bootstrap/Row';

import Item from "./Item";

export default function Grid({
  contents = [],
  objectName = '',
}) {
  const handleRenderItems = () => (contents.map((content) => (
    <Item 
      key={content.id}
      objectName={objectName}
      {...content}
    />
  )));
  
  return (
    <Row 
      xs={1} 
      md={2} 
      lg={4} 
      className="g-4"
    >
      {handleRenderItems()}
    </Row>
  );
};
