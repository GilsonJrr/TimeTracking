import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity  } from 'react-native';

import {BackgroundApp, HeaderMain, Picture, HeaderContainer, Text01, Name, HeaderBottom, BottomContainer} from './styles';

export default function Header(props) {
 return (  
        <HeaderBottom>

            <HeaderMain>
                <Picture/>
                <HeaderContainer>
                    <Text01> Report for </Text01>
                    <Name> Gilson Cosme</Name>
                </HeaderContainer>
            </HeaderMain>

            <BottomContainer>
                <TouchableOpacity onPress={ () => props.HandleDaily()}>
                    { props.daily === true && <Text01 style={{color:'#FFFFFF'}}> Daily </Text01> }
                    { props.daily === false &&<Text01 > Daily </Text01> }
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => props.HandleWeekly()}>
                    { props.weekly === true && <Text01 style={{color:'#FFFFFF'}}> Weekly </Text01> }
                    { props.weekly === false &&<Text01 > Weekly </Text01> }
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => props.HandleMonthly()}>
                    { props.monthly === true && <Text01 style={{color:'#FFFFFF'}}> Monthly </Text01> }
                    { props.monthly === false &&<Text01 > Monthly </Text01> }
                </TouchableOpacity>
            </BottomContainer>

        </HeaderBottom>
  );
}