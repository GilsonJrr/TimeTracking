import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity  } from 'react-native';

import {BackgroundApp, HeaderMain, Picture, HeaderContainer, Text01, Name, HeaderBottom, BottomContainer} from './styles';

export default function Header() {
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
                <TouchableOpacity>
                    <Text01> Daily </Text01>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text01 style={{color:'#FFFFFF'}}> Weekly </Text01>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text01> Monthly </Text01>
                </TouchableOpacity>
            </BottomContainer>

        </HeaderBottom>
  );
}