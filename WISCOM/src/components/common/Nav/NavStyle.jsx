import styled from 'styled-components';
import Logo from '../../../img/Nav/Logo.svg';

export const NavWrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3em;
  padding-bottom: 8em;
`;

export const NavContent = styled.div`
  display: flex;
  margin-bottom: 90px;
  justify-content: end;
`;

export const NavTag = styled.a`
  width: 150px;
  height: 45px;
  border-radius: 50px;
  background: #75ff72;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  color: black;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  text-align: center;

  &:hover {
    color: white;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavBtn = styled.div`
  width: 150px;
  height: 45px;
  border-radius: 50px;
  background: #75ff72;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  color: black;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  text-align: center;

  &:hover {
    color: white;
  }
  @media screen and (min-width: 900px) {
    display: none;
  }
`;
export const LogoImg = styled.div`
  background-image: url(${Logo});
  width: 320px;
  height: 192px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (max-width: 500px) {
    width: 250px;
    height: 150px;
  }
  @media screen and (max-width: 300px) {
    width: 200px;
  }
`;

export const Text = styled.div`
  text-align: center;
  font-size: 45px;
  font-weight: 700;

  @media screen and (max-width: 500px) {
    font-size: 35px;
  }
  @media screen and (max-width: 300px) {
    font-size: 26px;
  }
`;
