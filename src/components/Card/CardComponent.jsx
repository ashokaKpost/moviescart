import React from 'react';
import { Card, CardBody } from 'reactstrap';
import './cardComponent.css';

const CardComponent = ({ children, size, style, className, des }) => {
     const [overLay, setOverLay] = React.useState(false);

     const _getDescription = () => setOverLay(!overLay);

     return (
          <Card
               size={size || '18rem'}
               style={style}
               className={className}
               onMouseEnter={_getDescription}
               onMouseLeave={_getDescription}>
               <CardBody style={{ padding: '0px' }}>{children}</CardBody>
               {overLay && <div className={'description'}>{des.substr(0, 250) + ' ...'}</div>}
          </Card>
     );
};

export default CardComponent;
