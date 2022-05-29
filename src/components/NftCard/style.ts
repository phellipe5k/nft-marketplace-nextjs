import styled from 'styled-components';

export const Container = styled.main`
  width: 320px;
  height: 440px;
  display: flex;
  border: 2px solid #ccc;
  position: relative;
`;


export const Info = styled.main`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: #0c1536;
  height: 200px;
  padding: 8% 8%;

`;
export const Image = styled.div`
  width: 100%;
  height: auto;
  background-repeat: no-repeat;
  background-position: center top;
  position: relative;
  top: -25px;
  background-image: url(https://static.wixstatic.com/media/6e4086_170f85a311a546ea86c6af4b875d56f3~mv2.png/v1/fill/w_262,h_262,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Rahul.png);
`

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 4% 0;
`;


export const CollectionsName = styled.h3`

`;

export const Name = styled.h1`

`;


export const Value = styled.h3`

`;
