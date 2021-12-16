import styled from 'styled-components/native';

export const BackgroundApp = styled.SafeAreaView`
    flex: 1;
    background-color: #0D1323;
    align-items: center;
    padding-top: 50;
`;

export const HeaderMain = styled.View`
    width: 100%;
    height: 140px;
    background: #5746EA;
    border-radius: 20px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Picture = styled.View`
    width: 90px;
    height: 90px;
    background: #1D204B;
    border: 3px solid #FFFFFF;
    border-radius: 100px;
`;

export const HeaderContainer = styled.View`
    align-items: flex-start;
    padding-left: 20px;
    width: 60%;
`;

export const Text01 = styled.Text`
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    text-align: center;
    color: #B5ADFF;
`;

export const Name = styled.Text`
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    text-align: left;
    color: #FFFFFF;
`;

export const HeaderBottom = styled.View`
    width: 90%;
    height: 200px;
    background: #1D204B;
    border-radius: 20px;
`;

export const BottomContainer = styled.View`
    flex-direction: row; 
    justify-content: space-around;
    padding-top: 15;
`;