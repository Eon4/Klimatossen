import { useState } from 'react'
import './App.css'
import { Header } from './components/header';
import { Navigation } from "./components/navigation";
import { Intro } from './components/intro';
import { CO2 } from './components/CO2';
import { Environment } from './components/environment';
import { Contribute } from './components/contribute';
import { Arrangement } from './components/arrangement';
import { Footer } from './components/footer';


export const App = () => {
  return (
    <>
      <Header/>
      <Navigation />
      <Intro/>
      <CO2/>
      <Environment/>
      <Contribute/>
      <Arrangement/>
      <Footer/>
    </>
  );
};
