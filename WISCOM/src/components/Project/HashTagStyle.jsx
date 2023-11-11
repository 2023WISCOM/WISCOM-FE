import styled from 'styled-components';

export const HashTagWrapper = styled.div`
  width: 140px;
  height: 60px;
  border-radius: 50px;
  background-color: #75ff72;
  color: #000;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  @media screen and (min-width: 320px) and (max-width: 530px) {
    min-width: 60px;
    height: 30px;
  }

  @media screen and (min-width: 530px) and (max-width: 700px) {
    min-width: 85px;
    height: 35px;
    white-space: nowrap:
  }

  @media screen and (min-width: 700px) and (max-width: 900px) {
    min-width: 120px;
    height: 45px;
    white-space: nowrap:
  }
`;

export const ClickedHashTagWrapper = styled.div`
  width: 140px;
  height: 60px;
  border-radius: 50px;
  background-color: #75ff72;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  box-shadow: 0px 5px 5px 5px rgb(0, 0, 0, 0.5) inset;

  @media screen and (min-width: 320px) and (max-width: 530px) {
    min-width: 60px;
    height: 30px;
  }

  @media screen and (min-width: 530px) and (max-width: 700px) {
    min-width: 85px;
    height: 35px;
    white-space: nowrap:
  }

  @media screen and (min-width: 700px) and (max-width: 900px) {
    min-width: 120px;
    height: 45px;
    white-space: nowrap:
  }
`;

export const HashTagSpan = styled.div`
  font-size: 24px;
  font-weight: bold;

  @media screen and (max-width: 393px) {
    font-size: 10px;
  }

  @media screen and (min-width: 393px) and (max-width: 530px) {
    font-size: 11px;
  }

  @media screen and (min-width: 530px) and (max-width: 700px) {
    font-size: 16px;
  }

  @media screen and (min-width: 700px) and (max-width: 900px) {
    font-size: 20px;
  }
`;
