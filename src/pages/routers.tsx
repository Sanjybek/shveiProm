import { createBrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Info from '../components/Info';
import InfoCard from '../components/InfoCards';
import Picture from '../components/Picture';
import InfoTechnology from '../components/InfoTechnology';
import OrderBlock from '../components/OderBlock';
import Location from '../components/location';
import Footer from '../components/Footer';
import './style.scss';
import Main from '../components/Main';
import Block from '../components/Block';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <div className="fon">
          <div className="container">
            <Header />
            <Main />
          </div>
        </div>
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
