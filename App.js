import React from 'react';
import { ScrollView, View } from 'react-native';

import {BackgroundApp} from './SRC/Pages/Header/styles'
import {DataTitles} from './SRC/Assets/Data/data'

import Header from './SRC/Pages/Header';
import Cards from './SRC/Pages/Cards';

export default function App() {

 return (
   <BackgroundApp>

     <Header/>

     <ScrollView style={{width:'100%'}}>
       <View style={{alignItems: 'center', paddingBottom: 50}}>
        <Cards cor={DataTitles.color[0]} titulo={DataTitles.titles[0]} horas={DataTitles.time[0]} imagem={DataTitles.image[0]}/>
        <Cards cor={DataTitles.color[1]} titulo={DataTitles.titles[1]} horas={DataTitles.time[1]} imagem={DataTitles.image[1]}/>
        <Cards cor={DataTitles.color[2]} titulo={DataTitles.titles[2]} horas={DataTitles.time[2]} imagem={DataTitles.image[2]}/>
        <Cards cor={DataTitles.color[3]} titulo={DataTitles.titles[3]} horas={DataTitles.time[3]} imagem={DataTitles.image[3]}/>
        <Cards cor={DataTitles.color[4]} titulo={DataTitles.titles[4]} horas={DataTitles.time[4]} imagem={DataTitles.image[4]}/>
        <Cards cor={DataTitles.color[5]} titulo={DataTitles.titles[5]} horas={DataTitles.time[5]} imagem={DataTitles.image[5]}/>
       </View>
     </ScrollView>

   </BackgroundApp> 
  )
}