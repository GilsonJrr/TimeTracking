import React from 'react';
import { SafeAreaView } from 'react-native';

import {BackgroundApp} from './SRC/Pages/Header/styles'

import Header from './SRC/Pages/Header';
import Cards from './SRC/Pages/Cards';

export default function App() {
 return (
   <BackgroundApp>
     <Header/>
     <Cards/>
   </BackgroundApp> 
  )
}