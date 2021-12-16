import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { Main, MainFundo, Titulo, Horas, ContainerTitle, ContainerMore} from './styles';

export default function Cards(props) {
 return (
    <MainFundo style={{backgroundColor: props.cor}}>
      <Image
          source={props.imagem}
          style={{position:'absolute'}}
        />
      <Main>
        <ContainerTitle>
          <Titulo>{props.titulo}</Titulo>
          <Horas>{props.horas}hrs</Horas>
        </ContainerTitle>
        <ContainerMore>
          <TouchableOpacity>
            <Image source={require('../../Assets/Image/Dots.png')} style={{ marginBottom: 20 }}/>
          </TouchableOpacity>
          <Titulo style={{color: '#5F659E'}}> Last week - 36hrs</Titulo>
        </ContainerMore>
      </Main>
    </MainFundo>
   
  );
}