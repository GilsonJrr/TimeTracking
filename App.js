import React from 'react';
import { ScrollView, Image } from 'react-native';

import {BackgroundApp} from './SRC/Pages/Header/styles'

import Header from './SRC/Pages/Header';
import Cards from './SRC/Pages/Cards';

export default function App() {
 return (
   <BackgroundApp>

     <Header/>

     <Cards cor={'#FD8C64'} titulo={'Work'} horas={25} imagem={require('./SRC/Assets/Image/Work.png')}/>
     <Cards cor={'#56C2E6'} titulo={'Play'} horas={10} imagem={require('./SRC/Assets/Image/Play.png')}/>

   </BackgroundApp> 
  )
}