import Home from '../components/Home';
import { Seo } from '../components/shared';

const HomePage = () => {
  return (
    <>
      <Seo
        title='A web development company dedicated to create reliable and hight quality user experience all over the world | MigaczBrothers'
        description='Give us a call to take the next step for your business'
      />
      <Home />
    </>
  );
};

export default HomePage;
