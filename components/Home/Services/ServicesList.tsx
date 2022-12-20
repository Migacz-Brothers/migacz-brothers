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
        description='We can create a UI/UX for your business that is backed by multiple tried-and-true design components.'
      />
      <Service
        background={product_development}
        title='Development'
        description='Our highly-skilled engineers are prepared to create high-performance, scalable software solutions, covering the full stack from backend to frontend.'
      />
      <Service
        background={product_maintenance}
        title='Maintenence'
        description="If you're looking for a reliable service to maintain your website or system, we'll provide you with the best care at an unbeatable price."
      />
    </Services>
  );
};

const Services = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  min-height: 450px;

  @media (max-width: 980px) {
    justify-items: center;
    grid-template-columns: 1fr;
  }
`;

export default ServicesList;
