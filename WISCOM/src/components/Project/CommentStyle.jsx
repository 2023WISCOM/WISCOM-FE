import styled from 'styled-components';

export const CommentWrapper = styled.div``;
export const CommentTextBox = styled.div`
  margin: 20px auto;
  max-width: 1260px;
  height: 350px;
  display: flex;
  flex-direction: column;
  background-color: #000;
  border-radius: 45px;
  position: relative;

  @media screen and (min-width: 0px) and (max-width: 319px) {
    display: none;
  }
`;

export const CommentTagList = styled.div`
  margin-top: 5px;
  padding: 30px 30px;
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  overflow-x: scroll;
  overflow-y: hidden;
  width: 100%;
  white-space: nowrap;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  -webkit-overflow-scrolling: touch; // iOS 기기에서 스크롤 성능 향상

  // 웹킷 기반 브라우저에서 스크롤바 숨기기
  &::-webkit-scrollbar {
    display: none; // 
  }

  // 파이어폭스에서 스크롤바 숨기기
  scrollbar-width: none; 
  
  // IE와 엣지에서 스크롤바 숨기기
  -ms-overflow-style: none; 

  }
`;

export const CommentInput = styled.input`
  background-color: #000;
  border: none;
  resize: none;
  color: white;
  font-size: 26px;
  margin: 10px 10px 10px 30px;
  font-family: 'Pretendard';

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #fff;
    font-size: 26px;
    font-family: 'Pretendard';

    @media screen and (min-width: 320px) and (max-width: 393px) {
      font-size: 14px;
      color: #fff;
    }

    @media screen and (min-width: 393px) and (max-width: 530px) {
      font-size: 16px;
      color: #fff;
    }

    @media screen and (min-width: 530px) and (max-width: 700px) {
      font-size: 20px;
      color: #fff;
    }

    @media screen and (min-width: 700px) and (max-width: 900px) {
      font-size: 23px;
      color: #fff;
    }
  }
`;

export const CommentTextArea = styled.textarea`
  background-color: #000;
  border: none;
  resize: none;
  color: #fff;
  font-size: 26px;
  font-weight: bold;
  margin: 10px 15px 10px 20px;
  height: 170px;
  font-family: 'Pretendard';
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 12px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #d9d9d9;
    border-radius: 10px;
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #fff;
    font-size: 26px;
    font-family: 'Pretendard';

    @media screen and (min-width: 320px) and (max-width: 393px) {
      font-size: 14px;
    }

    @media screen and (min-width: 393px) and (max-width: 530px) {
      font-size: 16px;
    }

    @media screen and (min-width: 530px) and (max-width: 700px) {
      font-size: 20px;
    }

    @media screen and (min-width: 700px) and (max-width: 900px) {
      font-size: 23px;
    }
  }
`;

export const CommentCharCount = styled.p`
  color: #fff;
  margin-right: 40px;
  margin-bottom: 40px;
  text-align: right;

  font-size: 26px;
  font-weight: bold;

  @media screen and (min-width: 320px) and (max-width: 393px) {
    font-size: 14px;
    margin-right: 30px;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 393px) and (max-width: 530px) {
    font-size: 16px;
    margin-right: 30px;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 530px) and (max-width: 700px) {
    font-size: 20px;
  }

  @media screen and (min-width: 700px) and (max-width: 900px) {
    font-size: 23px;
  }
`;

export const CommentButton = styled.button`
  background-color: #75ff72;
  width: 350px;
  height: 75px;
  border-radius: 20px;
  margin: 0 auto;
  display: block;
  font-size: 28px;
  font-weight: bold;
  font-family: 'Pretendard';
  margin-bottom: 30px;

  @media screen and (max-width: 393px) {
    width: 190px;
    height: 50px;
    font-size: 18px;
  }

  @media screen and (min-width: 393px) and (max-width: 480px) {
    width: 210px;
    height: 55px;
    font-size: 20px;
  }

  @media screen and (min-width: 480px) and (max-width: 570px) {
    width: 240px;
    height: 60px;
    font-size: 22px;
  }

  @media screen and (min-width: 570px) and (max-width: 700px) {
    width: 280px;
    height: 65px;
    font-size: 24px;
  }

  @media screen and (min-width: 700px) and (max-width: 900px) {
    width: 330px;
    height: 70px;
    font-size: 26px;
  }
`;

export const CommentList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CommentItem = styled.div`
  flex-basis: calc(33.33% - 50px);
  height: 450px;
  border-radius: 20px;
  background-color: #eeeeee;
  margin: 35px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 320px) and (max-width: 700px) {
    margin: 10px;
    flex-basis: calc(100% - 20px);
    height: 300px;
  }
  @media screen and (min-width: 700px) and (max-width: 900px) {
    margin: 10px;
    flex-basis: calc(50% - 20px);
    height: 430px;
  }
`;

export const CommentInfoWrapper = styled.div``;

export const CommentInfo = styled.div`
  margin: 20px;
`;

export const CommentAuthor = styled.span`
  font-weight: bold;
  font-size: 18px;
  margin-right: 20px;

  @media screen and (min-width: 320px) and (max-width: 393px) {
    font-size: 10px;
  }

  @media screen and (min-width: 393px) and (max-width: 530px) {
    font-size: 12px;
  }

  @media screen and (min-width: 530px) and (max-width: 700px) {
    font-size: 14px;
  }

  @media screen and (min-width: 700px) and (max-width: 900px) {
    font-size: 16px;
  }
`;

export const CommentDate = styled.span`
  font-weight: bold;
  font-size: 18px;

  @media screen and (min-width: 320px) and (max-width: 393px) {
    font-size: 10px;
  }

  @media screen and (min-width: 393px) and (max-width: 530px) {
    font-size: 12px;
  }

  @media screen and (min-width: 530px) and (max-width: 700px) {
    font-size: 14px;
  }

  @media screen and (min-width: 700px) and (max-width: 900px) {
    font-size: 16px;
  }
`;

export const CommentContent = styled.div`
  padding: 15px 5px 15px 15px;
  margin-right: 15px;
  font-weight: bold;
  font-size: 26px;
  max-height: 210px;
  overflow-x: hidden;
  overflow-y: scroll;
  color: #f00;

  &::-webkit-scrollbar {
    width: 20px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #000;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #d9d9d9;
    border-radius: 10px;
  }

  @media screen and (min-width: 320px) and (max-width: 393px) {
    font-size: 18px;
  }

  @media screen and (min-width: 393px) and (max-width: 530px) {
    font-size: 20px;
  }

  @media screen and (min-width: 530px) and (max-width: 700px) {
    font-size: 22px;
  }

  @media screen and (min-width: 700px) and (max-width: 900px) {
    font-size: 24px;
  }
`;

export const CommentTagsWrapper = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  display: flex;
  flex-wrap: wrap;
`;

export const CommentSelectedTag = styled.div`
  width: 110px;
  height: 45px;
  border-radius: 50px;
  background-color: #fff;
  color: #000;

  margin: 0 10px 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 320px) and (max-width: 700px) {
    width: 75px;
    height: 35px;
  }
  @media screen and (min-width: 700px) and (max-width: 900px) {
    width: 85px;
    height: 40px;
  }

  @media screen and (min-width: 900px) and (max-width: 950px) {
    width: 70px;
    height: 40px;
  }

  @media screen and (min-width: 950px) and (max-width: 1050px) {
    width: 80px;
    height: 40px;
  }

  @media screen and (min-width: 1050px) and (max-width: 1200px) {
    width: 85px;
    height: 40px;
  }
`;

export const CommentP = styled.p`
  font-size: 22px;
  font-weight: bold;

  @media screen and (max-width: 393px) {
    font-size: 15px;
  }

  @media screen and (min-width: 393px) and (max-width: 530px) {
    font-size: 16px;
  }

  @media screen and (min-width: 530px) and (max-width: 700px) {
    font-size: 17px;
  }

  @media screen and (min-width: 700px) and (max-width: 900px) {
    font-size: 18px;
  }

  @media screen and (min-width: 900px) and (max-width: 950px) {
    font-size: 14px;
  }

  @media screen and (min-width: 950px) and (max-width: 1050px) {
    font-size: 17px;
  }

  @media screen and (min-width: 1050px) and (max-width: 1200px) {
    font-size: 18px;
  }
`;

export const CommentPagination = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  ul {
    list-style: none;
    display: flex;
    gap: 10px;
    padding: 0;

    li {
      cursor: pointer;
      border: 1px solid #fff;
      font-size: 40px;
      font-weight: bold;
      color: #d9d9d9;

      @media screen and (min-width: 0px) and (max-width: 393px) {
        font-size: 18px;
      }

      @media screen and (min-width: 393px) and (max-width: 520px) {
        font-size: 22px;
      }

      @media screen and (min-width: 520px) and (max-width: 700px) {
        font-size: 28px;
      }

      @media screen and (min-width: 700px) and (max-width: 900px) {
        font-size: 36px;
      }

      &:hover {
        color: #000;
      }
      &.active {
        color: #75ff72;
      }
    }
  }
`;
