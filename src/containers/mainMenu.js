import React from 'react';

import MenuButton from '../components/MenuButton';
import Header from '../components/Header';
import Footer from '../components/Footer';

const mainMenu = () => {
  return (
    <div>
      <Header mainMenu={true} title="Store Replenishment Service" />
      <div className="main-menu">
        <MenuButton label="Unified Store Walk" route="/store-walk" />
        <MenuButton label="Stock Status" />
        <MenuButton label="PSA" />
        <MenuButton label="POG to PSA" />
        <MenuButton label="Signs & Tags" />
        <MenuButton label="CIM Request Status" />
        <MenuButton label="Counts" />
        <MenuButton label="Known Shrink" />
        <MenuButton label="Markdown" />
        <MenuButton label="Pallet PSA" />
        <MenuButton label="Seasonal Counts" />
      </div>
      <Footer mainMenu={true} />
    </div>
  );
};

export default mainMenu;
