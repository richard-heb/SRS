import * as React from 'react';

import MenuButton from '../components/MenuButton/MenuButton';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export const MainMenu = () => {
  return (
    <div>
      <Header mainMenu={true} title="Store Replenishment Service" />
      <div className="main-menu">
        <MenuButton label="Unified Store Walk" route="/store-walk" />
        <MenuButton label="Stock Status" route="/" />
        <MenuButton label="PSA" route="/" />
        <MenuButton label="POG to PSA" route="/" />
        <MenuButton label="Signs & Tags" route="/" />
        <MenuButton label="CIM Request Status" route="/" />
        <MenuButton label="Counts" route="/" />
        <MenuButton label="Known Shrink" route="/" />
        <MenuButton label="Markdown" route="/" />
        <MenuButton label="Pallet PSA" route="/" />
        <MenuButton label="Seasonal Counts" route="/" />
      </div>
      <Footer />
    </div>
  );
};
