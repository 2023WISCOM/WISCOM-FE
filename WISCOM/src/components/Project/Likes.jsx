import React, { useState } from 'react';
import unclickedLikeImg from '../../img/Project/Likes.svg';
import clickedLikeImg from '../../img/Project/ClickedLikes.svg';
import * as L from './LikesStyle';

const Likes = () => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    //setLikes(likes + 1);
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <L.LikesWrapper onClick={handleLikeClick}>
      <L.LikesImg src={isLiked ? clickedLikeImg : unclickedLikeImg} alt="image" />
      <L.LikesSpan>{likes}</L.LikesSpan>
    </L.LikesWrapper>
  );
};

export default Likes;
