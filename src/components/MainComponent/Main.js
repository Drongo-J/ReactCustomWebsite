import React from 'react';
import './Main.css';
import Home from '../HomeComponent/Home'
import About from '../AboutComponent/About';
import Portfolio from '../PortfolioComponent/Portfolio';
import Pages from '../PagesComponent/Pages';
import Faq from '../FaqComponent/Faq';
import Contact from '../ContactComponent/Contact';
import { HOME, ABOUT, PAGES, PORTFOLIO, FAQ, CONTACT } from '../../constants/actionTypes';

export default function Main({ currentMainComponent }) {
  let mainComponentToRender;

  switch (currentMainComponent) {
    case HOME:
      mainComponentToRender = <Home />;
      break;
    case ABOUT:
      mainComponentToRender = <About />;
      break;
    case PAGES:
      mainComponentToRender = <Pages />;
      break;
    case PORTFOLIO:
      mainComponentToRender = <Portfolio />;
      break;
    case FAQ:
      mainComponentToRender = <Faq />;
      break;
    case CONTACT:
      mainComponentToRender = <Contact />
      break;
    default:
      mainComponentToRender = <Home />;
      break;
  }

  return <div className="main">{mainComponentToRender}</div>;
}
