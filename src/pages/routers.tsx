import { createBrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Info from '../components/Info';
import Main from '../components/Main';
import InfoCard from '../components/InfoCards';
import Block from '../components/Block';
import Picture from '../components/Picture';
import InfoTechnology from '../components/InfoTechnology';
import OrderBlock from '../components/OderBlock';
import Location from '../components/location';
import Footer from '../components/Footer';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Main />
        <Info />
        <InfoCard />
        <Block />
        <Picture />
        <InfoTechnology />
        <OrderBlock />
        <Location />
        <Footer />
      </>
    ),
  },
]);
