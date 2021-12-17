import React,{useState} from 'react';
import { ScrollView, View, FlatList } from 'react-native';

import {BackgroundApp} from './SRC/Pages/Header/styles'
import {Data} from './SRC/Assets/Data/data'

import Header from './SRC/Pages/Header';
import Cards from './SRC/Pages/Cards';

export default function App() {

  const [data, setData] = useState (Data);

  const [daily, setDaily] = useState (true);
  const [weekly, setWeekly] = useState (false);
  const [monthly, setMonthly] = useState (false);
  const [select, setSelect] = useState ('day');

  function HandleDaily () {
    setDaily(true); setWeekly(false); setMonthly(false); setSelect('day')
  }

  function HandleWeekly () {
    setDaily(false); setWeekly(true); setMonthly(false); setSelect('week')
  }

  function HandleMonthly () {
    setDaily(false); setWeekly(false); setMonthly(true); setSelect('month')
  }

 return (
   <BackgroundApp>

     <Header 
      HandleDaily={HandleDaily} daily={daily} 
      HandleWeekly={HandleWeekly} weekly={weekly} 
      HandleMonthly={HandleMonthly} monthly={monthly}/>

     <FlatList
      data={data}
      renderItem={ ({item})=>
        <Cards 
          cor={item.Color} 
          titulo={item.Title} 
          time={item.Time[select]} 
          imagem={item.Image} 
          daily={daily} 
          weekly={weekly} 
          monthly={monthly}  
        />
      }
     />

   </BackgroundApp> 
  )
}