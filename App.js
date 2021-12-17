import React from 'react';
import { ScrollView, View, FlatList } from 'react-native';

import {BackgroundApp} from './SRC/Pages/Header/styles'
import {DataWeek, Data} from './SRC/Assets/Data/data'

import Header from './SRC/Pages/Header';
import Cards from './SRC/Pages/Cards';

export default function App() {

 return (
   <BackgroundApp>

     <Header/>

     <FlatList
      data={Data}
      renderItem={ ({item})=>
        <Cards cor={item.Color} titulo={item.Title} horas={item.Time} imagem={item.Image}/>
      }
     />

   </BackgroundApp> 
  )
}