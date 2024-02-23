import { createBrowserRouter } from 'react-router-dom';
import { Navigation } from 'components/navigation';
import { SecondPage } from 'components/secondPage/secondPage';
import { ThirdPage } from 'components/thirdPage';
import { FourthPage } from 'components/fourthPage';
import { SixPage } from 'components/sixPage';
import { SeventhPage } from 'components/seventhPage';
import { Footer } from 'components/footer';
import { FifthPage } from 'components/fifthPage';
import { FirstPage } from 'components/firstPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navigation />
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        <FourthPage />
        <FifthPage />
        <SixPage />
        <SeventhPage />
        <Footer />
      </>
    ),
  },
]);
