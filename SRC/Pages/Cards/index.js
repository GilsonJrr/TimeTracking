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
          <Horas>{props.time}hrs</Horas>
        </ContainerTitle>
        <ContainerMore>
          <TouchableOpacity>
            <Image source={require('../../Assets/Image/Dots.png')} style={{ marginBottom: 20 }}/>
          </TouchableOpacity>
            { props.daily === true && <Titulo style={{color: '#5F659E'}}> Yesterday - {props.time}hrs</Titulo> }
            { props.weekly === true && <Titulo style={{color: '#5F659E'}}> Last Week - {props.time}hrs</Titulo> }
            { props.monthly === true && <Titulo style={{color: '#5F659E'}}> Last Month - {props.time}hrs</Titulo> }
        </ContainerMore>
      </Main>
    </MainFundo>
   
  );
}