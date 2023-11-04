import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import unclickedLikeImg from '../../img/Project/Likes.svg';
import clickedLikeImg from '../../img/Project/ClickedLikes.svg';
import * as L from './LikesStyle';

const Likes = () => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const { post_id } = useParams();

  const handleLikeClick = () => {
    //setLikes(likes + 1);
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  // '좋아요' 데이터를 가져오는 부분
  useEffect(() => {
    const postId = parseInt(post_id, 10);
    axios
      .get(`posts/${postId}/like/`)
      .then((response) => {
        console.log(response.data);
        setLikes(likes);
      })
      .catch((error) => {
        if (error.response) {
          // 서버가 2xx 범위 외의 상태 코드로 응답한 경우
          console.error('Response error', error.response.status);
        } else if (error.request) {
          // 요청이 발생했으나 응답을 받지 못한 경우
          console.error('No response', error.request);
        } else {
          // 요청을 설정하는 단계에서 문제가 발생한 경우
          console.error('Error', error.message);
        }
      });
  }, [post_id]); // post_id가 변경될 때마다 useEffect가 실행

  return (
    <L.LikesWrapper onClick={handleLikeClick}>
      <L.LikesImg src={isLiked ? clickedLikeImg : unclickedLikeImg} alt="image" />
      <L.LikesSpan>{likes}</L.LikesSpan>
    </L.LikesWrapper>
  );
};

export default Likes;
