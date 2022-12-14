import styled from 'styled-components';
import Service from './Service';
import product_design_image from '../../../public/product_design_image.png';
import product_development from '../../../public/product_development.png';
import product_maintenance from '../../../public/product_maintenance.png';

const ServicesList = (): JSX.Element => {
  return (
    <Services>
      <Service
        background={product_design_image}
        title='Custom design'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry simply dummy text'
      />
      <Service
        background={product_development}
        title='Development'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry simply dummy text'
      />
      <Service
        background={product_maintenance}
        title='Maintenence'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry simply dummy text'
      />
    </Services>
  );
};

const Services = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  min-height: 450px;
`;

export default ServicesList;
