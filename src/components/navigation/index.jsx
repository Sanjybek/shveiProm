import { Fragment, useState } from 'react';
import { Navbar } from '../navbar';
import { SideBar } from '../sideBar';

export const Navigation = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const closedSideBar = () => {
    setShowSideBar(false);
  };

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <Fragment>
      <Navbar toggleSideBar={toggleSideBar} />
      <SideBar isOpen={showSideBar} closedSideBar={closedSideBar} />
    </Fragment>
  );
};
